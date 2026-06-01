import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createCheckoutSession } from '@/lib/stripe'

export async function POST() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const checkout = await createCheckoutSession(
    (session.user as any).id,
    session.user.email
  )

  return NextResponse.json({ url: checkout.url })
}
