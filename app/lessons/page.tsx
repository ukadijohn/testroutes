'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LESSONS } from '@/lib/lessons'
import TiltCard from '@/components/ui/TiltCard'

export default function LessonsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative">
          {/* Animated road path SVG */}
          <motion.svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10 hidden lg:block"
            viewBox="0 0 200 200"
            fill="none"
          >
            <motion.path
              d="M 20 180 Q 100 100 180 20"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.path
              d="M 50 180 Q 130 100 180 50"
              stroke="#C4914F"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Free Lessons</span>
            <h1 className="heading-display font-black text-white text-5xl md:text-7xl mt-3 mb-6">
              Start Your<br />
              <span className="text-accent">Driving Journey</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Eight comprehensive free lessons covering everything from your very first
              day behind the wheel through to theory test preparation. No account needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-primary overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12 fill-cream">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Lessons grid */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LESSONS.map((lesson, i) => (
              <motion.div
                key={lesson.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <TiltCard className="h-full">
                  <Link
                    href={`/lessons/${lesson.slug}`}
                    className="block bg-white rounded-2xl p-6 h-full group hover:shadow-brown transition-all duration-300"
                    style={{ boxShadow: '4px 4px 0px #1A3A5C' }}
                  >
                    <div className="text-4xl mb-4">{lesson.icon}</div>
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                      {lesson.category} · {lesson.duration}
                    </div>
                    <h2 className="font-black text-primary text-lg mb-3 leading-tight group-hover:text-secondary transition-colors">
                      {lesson.title}
                    </h2>
                    <p className="text-primary/60 text-sm leading-relaxed mb-6">
                      {lesson.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:text-accent transition-colors">
                      Start Learning
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-display font-black text-white text-4xl md:text-5xl mb-6">
            Ready for the Test Routes?
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Subscribe to unlock all 40 Portsmouth test route videos.
          </p>
          <Link
            href="/pricing"
            className="btn-pill bg-white text-primary font-black text-lg hover:bg-accent hover:text-white transition-all duration-300"
          >
            Unlock Test Routes — £9.99/month
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
