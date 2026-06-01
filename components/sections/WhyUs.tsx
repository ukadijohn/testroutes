'use client'

import { motion } from 'framer-motion'
import TiltCard from '@/components/ui/TiltCard'

const reasons = [
  {
    num: '01',
    title: 'All 40 Test Routes Covered',
    body:
      "Every single route used at Portsmouth Driving Test Centre, filmed from the driver's seat. Watch them until the roads feel like second nature.",
  },
  {
    num: '02',
    title: 'DVSA-Approved Instruction',
    body:
      'Our instructors are fully DVSA-qualified ADIs with decades of experience teaching in Portsmouth — they know every speed camera, every trick junction.',
  },
  {
    num: '03',
    title: '94% First-Time Pass Rate',
    body:
      'Our students pass at nearly double the national average. Structured learning, proper mock tests, and route familiarity make all the difference.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-32 bg-cream px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-accent font-bold tracking-widest text-xs uppercase">Why Choose Us</span>
          <h2 className="heading-display font-black text-primary text-5xl md:text-6xl lg:text-7xl mt-3">
            Built for<br />
            <span className="text-secondary">Portsmouth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <TiltCard
                className={`p-8 rounded-2xl border-l-4 border-secondary bg-white h-full ${
                  i === 1 ? 'md:mt-8' : ''
                }`}
                style={{ boxShadow: '6px 6px 0px #8B5E3C' } as React.CSSProperties}
              >
                <div className="text-7xl font-black text-secondary/20 leading-none mb-4">{r.num}</div>
                <h3 className="font-black text-primary text-xl mb-4 leading-tight">{r.title}</h3>
                <p className="text-primary/60 leading-relaxed">{r.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
