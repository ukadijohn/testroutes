'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import LockedCard from '@/components/ui/LockedCard'
import MagneticButton from '@/components/ui/MagneticButton'
import { ROUTES } from '@/lib/routes'

export default function RoutesTeaser() {
  const teaser = ROUTES.slice(0, 6)

  return (
    <section className="py-32 bg-primary px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-6"
        >
          <span className="text-accent font-bold tracking-widest text-xs uppercase">Subscription Content</span>
          <h2 className="heading-display font-black text-white text-5xl md:text-6xl lg:text-7xl mt-3">
            Unlock Every<br />
            <span className="text-accent">Portsmouth</span><br />
            Test Route
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.15 }}
          className="text-white/60 text-lg mb-16 max-w-xl"
        >
          All 40 routes filmed from the driver&apos;s seat. Know every road, every hazard,
          every tricky junction before your test day.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {teaser.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08 }}
            >
              <LockedCard {...route} locked={true} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <p className="text-white/40 mb-6 text-sm">
            + {ROUTES.length - 6} more routes locked — subscribe to unlock all
          </p>
          <MagneticButton>
            <Link
              href="/pricing"
              className="btn-pill bg-accent text-white font-black text-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Unlock All Routes — £9.99/month
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
