'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'

const words = ['Master', 'Every', 'Road.']
const words2 = ['Pass', 'First', 'Time.']

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative min-h-screen flex overflow-hidden">
      {/* Left — navy panel */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full lg:w-1/2 bg-primary flex flex-col justify-center px-8 lg:px-16 xl:px-24 pt-32 pb-20 clip-diagonal"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2 mb-10 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-bold text-xs tracking-widest uppercase">
            Portsmouth&apos;s #1 Driving School
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="heading-display font-black text-white mb-4">
          <div className="flex gap-4 flex-wrap text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
            {words.map((word, i) => (
              <AnimatedWord key={word} word={word} delay={0.4 + i * 0.1} />
            ))}
          </div>
          <div className="flex gap-4 flex-wrap text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl mt-1">
            {words2.map((word, i) => (
              <AnimatedWord key={word} word={word} delay={0.7 + i * 0.1} />
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-medium"
        >
          Expert driving tuition, all 40 Portsmouth test routes on video,
          hazard perception training, and mock tests — everything you need
          to pass first time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton>
            <Link
              href="/test-routes"
              className="btn-pill bg-accent text-white font-black text-base hover:bg-white hover:text-primary transition-all duration-300"
            >
              Explore Test Routes
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/lessons"
              className="btn-pill border-2 border-white/30 text-white font-bold text-base hover:border-accent hover:text-accent transition-all duration-300"
            >
              Free Lessons
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex gap-8 mt-14 pt-8 border-t border-white/10"
        >
          {[
            { value: '94%', label: 'Pass Rate' },
            { value: '40+', label: 'Test Routes' },
            { value: '2,400+', label: 'Students Passed' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl font-black text-accent">{stat.value}</div>
              <div className="text-white/50 text-xs font-semibold tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right — cinematic image */}
      <div className="hidden lg:block absolute right-0 top-0 w-3/5 h-full">
        <motion.div style={{ y: imageY }} className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=900&fit=crop&auto=format"
            alt="Driving on Portsmouth roads"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Brown gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/30 via-primary/20 to-primary/80" />
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="absolute bottom-16 right-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-accent/80 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex text-accent text-sm">★★★★★</div>
            </div>
            <p className="text-white text-sm font-semibold">Passed first time!</p>
            <p className="text-white/60 text-xs">Just now · Portsmouth Test Centre</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile image */}
      <div className="absolute inset-0 lg:hidden -z-0">
        <Image
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&auto=format"
          alt="Driving"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
      </div>
    </section>
  )
}
