'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ROUTES } from '@/lib/routes'

interface RouteProgressState {
  [routeId: number]: { watched?: boolean; revisit?: boolean }
}

export default function DashboardPage() {
  const [progress, setProgress] = useState<RouteProgressState>({})
  const userName = 'Student'

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem('routeProgress') || '{}')
    setProgress(p)
  }, [])

  const watched = ROUTES.filter(r => progress[r.id]?.watched)
  const revisit = ROUTES.filter(r => progress[r.id]?.revisit)
  const recent = [...watched].slice(-5).reverse()
  const percent = Math.round((watched.length / ROUTES.length) * 100)

  const handleCancelSubscription = async () => {
    const res = await fetch('/api/stripe/portal', { method: 'POST' })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-amber-100 text-amber-800',
    Complex: 'bg-red-100 text-red-800',
  }

  return (
    <main className="pt-20 bg-cream min-h-screen">
      {/* Welcome Banner */}
      <section className="bg-primary py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Member Dashboard</span>
            <h1 className="heading-display font-black text-white text-4xl md:text-5xl mt-2">
              Welcome back, {userName} 👋
            </h1>
            <p className="text-white/60 mt-2">Keep going — you&apos;re {percent}% through all the routes.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Routes Watched', value: watched.length, total: ROUTES.length },
            { label: 'To Revisit', value: revisit.length, total: null },
            { label: 'Remaining', value: ROUTES.length - watched.length, total: null },
            { label: 'Completion', value: `${percent}%`, total: null },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6"
              style={{ boxShadow: '4px 4px 0px #1A3A5C' }}
            >
              <div className="text-4xl font-black text-primary">
                {stat.value}
                {stat.total && <span className="text-xl text-primary/40">/{stat.total}</span>}
              </div>
              <div className="text-primary/60 text-sm font-semibold mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Progress ring + recent */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Progress ring */}
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center" style={{ boxShadow: '4px 4px 0px #8B5E3C' }}>
            <svg className="w-40 h-40 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#FAF6F1" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#C4914F"
                strokeWidth="10"
                strokeDasharray={`${percent * 2.512} ${251.2}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center -mt-2">
              <div className="text-4xl font-black text-primary">{watched.length}/{ROUTES.length}</div>
              <div className="text-primary/60 text-sm font-semibold">Routes Watched</div>
            </div>
          </div>

          {/* Recently watched */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8" style={{ boxShadow: '4px 4px 0px #8B5E3C' }}>
            <h2 className="font-black text-primary text-lg mb-6">Recently Watched</h2>
            {recent.length === 0 ? (
              <p className="text-primary/40">No routes watched yet. Start with Route 1!</p>
            ) : (
              <ul className="space-y-3">
                {recent.map(route => (
                  <li key={route.id}>
                    <Link href={`/test-routes/${route.id}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group">
                      <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                        {route.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-primary text-sm truncate group-hover:text-accent transition-colors">{route.routeName}</div>
                        <div className="text-primary/50 text-xs">{route.area} · {route.duration}</div>
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${difficultyColors[route.difficulty]}`}>
                        {route.difficulty}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* All routes grid */}
        <div className="bg-white rounded-2xl p-8 mb-8" style={{ boxShadow: '4px 4px 0px #1A3A5C' }}>
          <h2 className="font-black text-primary text-xl mb-6">All 40 Routes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
            {ROUTES.map(route => {
              const isWatched = !!progress[route.id]?.watched
              const isRevisit = !!progress[route.id]?.revisit
              return (
                <Link
                  key={route.id}
                  href={`/test-routes/${route.id}`}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center text-xs font-black transition-all duration-200 hover:scale-105 ${
                    isWatched
                      ? 'bg-green-500 text-white'
                      : isRevisit
                      ? 'bg-amber-400 text-white'
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <span className="text-lg">{isWatched ? '✓' : isRevisit ? '⚑' : route.id}</span>
                  {isWatched && <span className="text-[10px] opacity-80">Done</span>}
                  {isRevisit && !isWatched && <span className="text-[10px] opacity-80">Revisit</span>}
                  {!isWatched && !isRevisit && <span className="text-[10px] opacity-60">Rt. {route.id}</span>}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Account management */}
        <div className="bg-primary rounded-2xl p-8">
          <h2 className="font-black text-white text-xl mb-6">Account & Subscription</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCancelSubscription}
              className="btn-pill border-2 border-white/30 text-white font-bold text-sm hover:border-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Manage Subscription
            </button>
            <Link
              href="/auth/login"
              className="btn-pill border-2 border-white/20 text-white/60 font-bold text-sm hover:text-white hover:border-white/40 transition-all duration-300"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
