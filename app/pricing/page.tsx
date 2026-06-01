'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'

const features = [
  'All 40 Portsmouth test routes on video',
  'HD driver-seat perspective filming',
  'Key hazard timestamps per route',
  'Difficulty ratings (Easy / Medium / Complex)',
  'Personal progress dashboard',
  '"Watched" and "Revisit" tracking per route',
  'Mobile, tablet & desktop optimised',
  'New routes added when DVSA updates them',
  'Free lesson library (always free)',
  '7-day money-back guarantee',
  'Cancel any time — no lock-in',
]

const testimonials = [
  { name: 'Emily T.', text: 'Worth every penny. I watched Route 7 four times and aced it on test day.' },
  { name: 'Ravi M.', text: 'The route videos are exactly what I needed. Cancelled after passing — super easy.' },
  { name: 'Charlotte B.', text: 'Best £9.99 I ever spent. Passed first time with zero major faults.' },
]

export default function PricingPage() {
  const handleCheckout = async () => {
    const res = await fetch('/api/stripe/checkout', { method: 'POST' })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else window.location.href = '/auth/login?redirect=/pricing'
  }

  return (
    <main className="pt-20 bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-primary py-24 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circles" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Simple Pricing</span>
            <h1 className="heading-display font-black text-white text-5xl md:text-7xl mt-3 mb-4">
              One Plan.<br />
              <span className="text-accent">Everything Included.</span>
            </h1>
            <p className="text-white/60 text-xl">No tiers. No hidden fees. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-primary overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12 fill-cream">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Pricing card */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-10 md:p-14 text-center relative"
            style={{ boxShadow: '10px 10px 0px #1A3A5C' }}
          >
            {/* Money back badge */}
            <div className="absolute -top-5 right-8 bg-green-500 text-white font-black text-xs px-4 py-2 rounded-full">
              7-Day Money-Back Guarantee
            </div>

            <div className="text-5xl mb-4">🎓</div>
            <h2 className="font-black text-primary text-2xl mb-2">Full Access Subscription</h2>
            <p className="text-primary/60 mb-8">Everything you need to pass your test</p>

            {/* Price */}
            <div className="mb-10">
              <div className="heading-display font-black text-primary text-8xl leading-none">
                £9<span className="text-5xl">.99</span>
              </div>
              <div className="text-primary/50 text-lg mt-2">per month · cancel anytime</div>
            </div>

            {/* Features */}
            <ul className="text-left space-y-3 mb-10">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-3 text-primary/80"
                >
                  <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <MagneticButton>
              <button
                onClick={handleCheckout}
                className="btn-pill bg-accent text-white font-black text-xl w-full justify-center hover:bg-primary transition-all duration-300"
              >
                Start Subscription
              </button>
            </MagneticButton>
            <p className="text-primary/40 text-xs mt-4">
              Secured by Stripe · No card stored on our servers
            </p>

            {/* Already have account */}
            <div className="mt-6 pt-6 border-t border-primary/10">
              <p className="text-primary/60 text-sm">
                Already subscribed?{' '}
                <Link href="/dashboard" className="text-accent font-bold hover:underline">
                  Go to your dashboard →
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="py-16 px-6 lg:px-12 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-primary text-2xl mb-10 text-center">Students Who Subscribed and Passed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6"
                style={{ boxShadow: '4px 4px 0px #8B5E3C' }}
              >
                <div className="flex text-accent mb-3">★★★★★</div>
                <p className="text-primary/70 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-black text-primary text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
