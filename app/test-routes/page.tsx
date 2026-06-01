'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ROUTES } from '@/lib/routes'
import LockedCard from '@/components/ui/LockedCard'
import MagneticButton from '@/components/ui/MagneticButton'

const faqs = [
  {
    q: 'Are these the real Portsmouth test routes?',
    a: 'Yes. Our routes are based on real routes used at Portsmouth Driving Test Centre on Tangier Road. They are driven and filmed by our DVSA-qualified ADIs specifically to help you prepare.',
  },
  {
    q: 'How often are the routes updated?',
    a: 'We review routes every three months. When the DVSA updates test routes (which happens occasionally), we re-film and update the videos within 30 days.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes, at any time. Cancel through your dashboard and you\'ll retain access until the end of your billing period.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We don\'t offer a free trial, but we do offer a 7-day money-back guarantee if the content doesn\'t meet your expectations.',
  },
  {
    q: 'Can I watch the videos on mobile?',
    a: 'Absolutely. The platform is fully responsive and optimised for mobile, tablet, and desktop viewing.',
  },
]

export default function TestRoutesPage() {
  const [filter, setFilter] = useState<'All' | 'Easy' | 'Medium' | 'Complex'>('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = filter === 'All' ? ROUTES : ROUTES.filter(r => r.difficulty === filter)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">40 Routes Available</span>
            <h1 className="heading-display font-black text-white text-5xl md:text-7xl mt-3 mb-6">
              Every Portsmouth<br />
              <span className="text-accent">Test Route.</span><br />
              Every Possibility.
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mb-10">
              Memorise every junction, every roundabout, every hazard — before you sit in that examiner&apos;s seat.
            </p>
            <MagneticButton>
              <Link href="/pricing" className="btn-pill bg-accent text-white font-black text-lg hover:bg-white hover:text-primary transition-all duration-300">
                Unlock All Routes — £9.99/month
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-primary overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12 fill-cream">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Filters + Grid */}
      <section className="py-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10 flex-wrap">
            <span className="font-bold text-primary/60 text-sm">Filter by difficulty:</span>
            {(['All', 'Easy', 'Medium', 'Complex'] as const).map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
                  filter === d
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {filtered.map((route, i) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 10) * 0.05 }}
              >
                <LockedCard {...route} locked={true} />
              </motion.div>
            ))}
          </div>

          {/* Pricing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary rounded-3xl py-16 px-8"
          >
            <h2 className="heading-display font-black text-white text-4xl md:text-5xl mb-4">
              Unlock All <span className="text-accent">40 Routes</span>
            </h2>
            <div className="text-7xl font-black text-white my-6">£9.99<span className="text-3xl text-white/50">/mo</span></div>
            <ul className="text-white/70 space-y-2 mb-10 max-w-sm mx-auto text-left">
              {['All 40 Portsmouth test routes', 'HD driver-seat video', 'Progress tracking dashboard', 'Hazard highlights per route', '7-day money-back guarantee', 'Cancel any time'].map(f => (
                <li key={f} className="flex items-center gap-3">
                  <span className="text-accent">✓</span> {f}
                </li>
              ))}
            </ul>
            <MagneticButton>
              <Link href="/pricing" className="btn-pill bg-accent text-white font-black text-xl hover:bg-white hover:text-primary transition-all duration-300">
                Subscribe Now
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-display font-black text-primary text-4xl md:text-5xl mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '3px 3px 0px #1A3A5C' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold text-primary flex items-center justify-between"
                >
                  {faq.q}
                  <span className={`transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-primary/60 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
