import Stripe from 'stripe';

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY is missing');
  return new Stripe(key, {
    apiVersion: '2025-05-28.basil',
  });
}

export const PLAN_PRICE_ID = process.env.STRIPE_PRICE_ID ?? '';

export async function createCheckoutSession(userId: string, email: string) {
  const stripe = getStripe();

  return stripe.checkout.sessions.create({
    customer_email: email,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: PLAN_PRICE_ID, quantity: 1 }],
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/pricing?cancelled=true`,
    metadata: { userId },
    subscription_data: { metadata: { userId } },
  });
}

export async function createBillingPortalSession(stripeCustomerId: string) {
  const stripe = getStripe();

  return stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${process.env.NEXTAUTH_URL}/dashboard`,
  });
}

export async function createBillingPortalSession(stripeCustomerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${process.env.NEXTAUTH_URL}/dashboard`,
  })
  return session
}
