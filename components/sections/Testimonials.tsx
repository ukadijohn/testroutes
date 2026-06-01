'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Sophie Hargreaves',
    date: 'Passed April 2024',
    stars: 5,
    text: 'Watching all the test routes before my test was a game-changer. I knew exactly what was coming and felt completely calm. Passed with only two minor faults!',
    route: 'Route 12 — Copnor Road Circuit',
  },
  {
    name: 'James Whitfield',
    date: 'Passed February 2024',
    stars: 5,
    text: 'I had failed twice at other schools. After joining Portsmouth Driving School and studying all 40 routes, I passed third time with zero major faults. The route videos are incredible.',
    route: 'Route 3 — Milton Road Triangle',
  },
  {
    name: 'Aisha Patel',
    date: 'Passed March 2024',
    stars: 5,
    text: 'The mock test sessions and the theory prep sections are brilliant. My instructor was patient and knowledgeable. I genuinely felt prepared for everything.',
    route: 'Route 7 — Eastern Road Approach',
  },
  {
    name: 'Tom Brennan',
    date: 'Passed January 2024',
    stars: 5,
    text: 'Subscription is absolutely worth every penny. I watched Route 1 five times before my test and nailed every junction. First time pass!',
    route: 'Route 1 — Cosham High Street Circuit',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next: number) => {
    setDir(next > current ? 1 : -1)
    setCurrent(next)
  }

  const t = testimonials[current]

  return (
    <section className="py-32 bg-cream px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Testimonials</span>
            <h2 className="heading-display font-black text-primary text-5xl md:text-6xl mt-3">
              What Our<br />
              <span className="text-secondary">Students Say</span>
            </h2>
          </div>
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-8' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            initial={{ opacity: 0, x: dir * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -80 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-10 md:p-16"
            style={{ boxShadow: '8px 8px 0px #1A3A5C' }}
          >
            <div className="flex text-accent text-2xl mb-6">
              {'★'.repeat(t.stars)}
            </div>
            <p className="text-primary text-xl md:text-2xl font-semibold leading-relaxed mb-8 max-w-3xl">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-black text-lg">
                {t.name[0]}
              </div>
              <div>
                <div className="font-black text-primary">{t.name}</div>
                <div className="text-secondary text-sm">{t.date} · {t.route}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-4 mt-8 justify-end">
          <button
            onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
            className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => go((current + 1) % testimonials.length)}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
