'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from '@/components/ui/CountUp'

const stats = [
  { value: 94, suffix: '%', label: 'First-Time Pass Rate' },
  { value: 2400, suffix: '+', label: 'Students Passed' },
  { value: 40, suffix: '', label: 'Test Routes Covered' },
  { value: 18, suffix: ' yrs', label: 'Teaching Experience' },
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">About Us</span>
            <h1 className="heading-display font-black text-white text-5xl md:text-7xl mt-3">
              Driven by<br />
              <span className="text-accent">Your Success</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-primary overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full h-12 fill-cream">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      {/* Instructor bio */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '10px 10px 0px #1A3A5C' }}>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&auto=format"
                  alt="Driving Instructor"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-accent text-white text-xs font-black px-4 py-2 rounded-full mb-2">
                    DVSA Approved ADI
                  </div>
                  <div className="text-white font-black text-xl">James Hartley</div>
                  <div className="text-white/70 text-sm">Chief Instructor · 18 Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-accent font-bold tracking-widest text-xs uppercase">Our Instructor</span>
              <h2 className="heading-display font-black text-primary text-4xl md:text-5xl mt-3 mb-6">
                Teaching Portsmouth&apos;s Roads<br />for 18 Years
              </h2>
              <p className="text-primary/70 leading-relaxed mb-6 text-lg">
                I&apos;m James Hartley, a fully DVSA-qualified Approved Driving Instructor (ADI)
                based in Portsmouth. I&apos;ve been teaching learner drivers on these exact roads
                since 2006 and I know every hazard, every timing challenge, and every
                examiner expectation.
              </p>
              <p className="text-primary/70 leading-relaxed mb-8">
                What started as one-to-one lessons expanded into this platform because I
                wanted every Portsmouth learner — not just my students — to have the unfair
                advantage of truly knowing the test routes before test day. That knowledge
                transforms nervous candidates into confident drivers.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-accent pl-6 my-8">
                <p className="text-primary text-xl font-bold leading-relaxed italic">
                  &ldquo;Familiarity breeds confidence. When you&apos;ve driven a route fifty times in
                  your head, the test is just another drive.&rdquo;
                </p>
                <footer className="text-accent font-bold mt-3">— James Hartley, ADI</footer>
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <div className="bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-bold">DVSA Grade A Instructor</div>
                <div className="bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-bold">IAM RoadSmart Member</div>
                <div className="bg-primary/10 rounded-full px-4 py-2 text-primary text-sm font-bold">Portsmouth Resident</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-secondary px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-display font-black text-white text-4xl md:text-5xl">
              The Numbers Speak
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="heading-display font-black text-white text-6xl md:text-7xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 font-semibold mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Our Mission</span>
            <h2 className="heading-display font-black text-primary text-4xl md:text-5xl mt-3 mb-8">
              Democratise Route Knowledge
            </h2>
            <p className="text-primary/70 text-xl leading-relaxed mb-8">
              For too long, knowing the test routes has been an insider secret — passed between
              instructors and their long-term students. We believe every learner deserves that
              knowledge, regardless of how many lessons they can afford.
            </p>
            <p className="text-primary/70 text-xl leading-relaxed mb-12">
              Our platform puts all 40 Portsmouth test routes in your hands, accessible from your
              sofa, your commute, or the night before your test. Because preparation isn&apos;t
              cheating — it&apos;s the smartest thing you can do.
            </p>
            <Link
              href="/pricing"
              className="btn-pill bg-primary text-white font-black text-lg hover:bg-secondary transition-all duration-300"
            >
              Join 2,400+ Passed Students
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
