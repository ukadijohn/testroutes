import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
})

export const PLAN_PRICE_ID = process.env.STRIPE_PRICE_ID!

export async function createCheckoutSession(userId: string, email: string) {
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: PLAN_PRICE_ID,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing?cancelled=true`,
    metadata: { userId },
    subscription_data: {
      metadata: { userId },
    },
  })
  return session
}

export async function createBillingPortalSession(stripeCustomerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${process.env.NEXTAUTH_URL}/dashboard`,
  })
  return session
}
