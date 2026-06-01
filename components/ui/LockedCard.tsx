'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface LockedCardProps {
  id: number
  routeName: string
  duration: string
  difficulty: 'Easy' | 'Medium' | 'Complex'
  area: string
  hazards: string[]
  locked?: boolean
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-amber-100 text-amber-800',
  Complex: 'bg-red-100 text-red-800',
}

export default function LockedCard({
  id,
  routeName,
  duration,
  difficulty,
  area,
  hazards,
  locked = true,
}: LockedCardProps) {
  const imgSeed = id * 7 + 42

  if (!locked) {
    return (
      <Link href={`/test-routes/${id}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="group relative rounded-2xl overflow-hidden bg-white shadow-navy cursor-pointer"
        >
          <div className="relative h-44 overflow-hidden">
            <Image
              src={`https://images.unsplash.com/photo-${1449965408869 + imgSeed}?w=400&h=180&fit=crop&auto=format`}
              alt={routeName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-primary/40" />
            <span className="absolute top-3 left-3 bg-primary text-white text-xs font-black px-3 py-1 rounded-full">
              Route {id}
            </span>
            <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-primary text-sm leading-tight mb-1">{routeName}</h3>
            <p className="text-secondary text-xs mb-2">{area} · {duration}</p>
            <ul className="space-y-1">
              {hazards.slice(0, 2).map((h, i) => (
                <li key={i} className="text-xs text-primary/60 flex items-start gap-1">
                  <span className="text-accent mt-0.5">▸</span> {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden bg-white group cursor-pointer"
      style={{ boxShadow: '6px 6px 0px #8B5E3C' }}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-${1449965408869 + imgSeed}?w=400&h=180&fit=crop&auto=format`}
          alt={routeName}
          fill
          className="object-cover blur-sm scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-primary/70 scanlines" />
        {/* Animated padlock */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-secondary/90 rounded-full p-3">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>
        <span className="absolute top-3 left-3 bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full backdrop-blur-sm">
          Route {id}
        </span>
        <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${difficultyColors[difficulty]} opacity-80`}>
          {difficulty}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-primary text-sm leading-tight mb-1">{routeName}</h3>
        <p className="text-secondary text-xs mb-2">{area} · {duration}</p>
        <p className="text-xs text-primary/40 italic">Subscribe to unlock</p>
      </div>
    </motion.div>
  )
}
