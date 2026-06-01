'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ROUTES } from '@/lib/routes'
import { useEffect, useState } from 'react'

export default function RouteVideoPage({ params }: { params: { routeId: string } }) {
  const id = parseInt(params.routeId)
  const route = ROUTES.find(r => r.id === id)
  if (!route) notFound()

  const [watched, setWatched] = useState(false)
  const [revisit, setRevisit] = useState(false)

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('routeProgress') || '{}')
    setWatched(!!progress[id]?.watched)
    setRevisit(!!progress[id]?.revisit)
  }, [id])

  const saveProgress = (updates: { watched?: boolean; revisit?: boolean }) => {
    const progress = JSON.parse(localStorage.getItem('routeProgress') || '{}')
    progress[id] = { ...progress[id], ...updates }
    localStorage.setItem('routeProgress', JSON.stringify(progress))
  }

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-amber-100 text-amber-800',
    Complex: 'bg-red-100 text-red-800',
  }

  const prev = ROUTES.find(r => r.id === id - 1)
  const next = ROUTES.find(r => r.id === id + 1)

  return (
    <main className="pt-20 bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-primary py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/test-routes" className="text-accent hover:text-white transition-colors text-sm font-bold flex items-center gap-2 mb-6">
            ← Back to All Routes
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <span className="bg-white/10 text-white font-black px-4 py-1.5 rounded-full text-sm">
              Route {route.id}
            </span>
            <span className={`font-bold text-sm px-4 py-1.5 rounded-full ${difficultyColors[route.difficulty]}`}>
              {route.difficulty}
            </span>
            <span className="text-white/50 text-sm">{route.duration}</span>
          </div>
          <h1 className="heading-display font-black text-white text-3xl md:text-5xl">
            {route.routeName}
          </h1>
          <p className="text-white/60 mt-2">{route.area} area</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden mb-8 relative"
          style={{ boxShadow: '8px 8px 0px #1A3A5C' }}
        >
          <div className="aspect-video bg-primary flex items-center justify-center relative">
            <Image
              src={`https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=675&fit=crop&auto=format`}
              alt={route.routeName}
              fill
              className="object-cover opacity-40"
              unoptimized
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-accent/90 rounded-full p-6 mb-4 cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white font-bold">Video content — subscribe to watch</p>
              <p className="text-white/60 text-sm mt-1">{route.duration} · {route.area}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Hazards */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8" style={{ boxShadow: '4px 4px 0px #8B5E3C' }}>
            <h2 className="font-black text-primary text-xl mb-6">Key Hazards on This Route</h2>
            <ul className="space-y-4">
              {route.hazards.map((hazard, i) => (
                <li key={i} className="flex items-start gap-4 p-4 bg-secondary/5 rounded-xl">
                  <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-primary/80 leading-relaxed">{hazard}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Info card */}
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="font-black text-lg mb-6">Route Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Route Number</span>
                <span className="font-bold">Route {route.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Area</span>
                <span className="font-bold">{route.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Duration</span>
                <span className="font-bold">{route.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Difficulty</span>
                <span className={`font-bold px-2 py-0.5 rounded text-xs ${difficultyColors[route.difficulty]}`}>
                  {route.difficulty}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Hazards</span>
                <span className="font-bold">{route.hazards.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress controls */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => {
              setWatched(!watched)
              saveProgress({ watched: !watched })
            }}
            className={`btn-pill font-bold text-sm transition-all duration-300 ${
              watched ? 'bg-green-500 text-white' : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
            }`}
          >
            {watched ? '✓ Watched' : 'Mark as Watched'}
          </button>
          <button
            onClick={() => {
              setRevisit(!revisit)
              saveProgress({ revisit: !revisit })
            }}
            className={`btn-pill font-bold text-sm transition-all duration-300 ${
              revisit ? 'bg-amber-500 text-white' : 'bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white'
            }`}
          >
            {revisit ? '⚑ Marked to Revisit' : 'Flag for Revisit'}
          </button>
        </div>

        {/* Prev / Next nav */}
        <div className="flex justify-between gap-4">
          {prev ? (
            <Link href={`/test-routes/${prev.id}`} className="btn-pill bg-white text-primary font-bold text-sm border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
              ← Route {prev.id}
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/test-routes/${next.id}`} className="btn-pill bg-primary text-white font-bold text-sm hover:bg-secondary transition-all duration-300">
              Route {next.id} →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
