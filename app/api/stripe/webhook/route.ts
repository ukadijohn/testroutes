import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch {
    return NextResponse.json({ error: 'Webhook signature invalid' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      if (userId) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            subscribed: true,
            stripeCustomerId: session.customer as string,
            stripeSubId: session.subscription as string,
          },
        })
      }
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const userId = sub.metadata?.userId
      if (userId) {
        await prisma.user.update({
          where: { id: userId },
          data: { subscribed: false },
        })
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      const customerId = invoice.customer as string
      await prisma.user.updateMany({
        where: { stripeCustomerId: customerId },
        data: { subscribed: false },
      })
      break
    }
  }

  return NextResponse.json({ received: true })
}
