import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createBillingPortalSession } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'

export async function POST() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { stripeCustomerId: true },
  })

  if (!user?.stripeCustomerId) {
    return NextResponse.json({ error: 'No subscription found' }, { status: 404 })
  }

  const portalSession = await createBillingPortalSession(user.stripeCustomerId)
  return NextResponse.json({ url: portalSession.url })
}
