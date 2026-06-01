'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getLessonBySlug, LESSONS } from '@/lib/lessons'
import { useEffect, useState } from 'react'

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug)
  if (!lesson) notFound()

  const [watched, setWatched] = useState(false)

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}')
    setWatched(!!progress[params.slug])
  }, [params.slug])

  const markWatched = () => {
    const progress = JSON.parse(localStorage.getItem('lessonProgress') || '{}')
    progress[params.slug] = true
    localStorage.setItem('lessonProgress', JSON.stringify(progress))
    setWatched(true)
  }

  const nextLesson = lesson.nextLesson ? getLessonBySlug(lesson.nextLesson) : null

  return (
    <main className="pt-20 bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/lessons" className="text-accent hover:text-white transition-colors text-sm font-bold flex items-center gap-2 mb-6">
            ← Back to All Lessons
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{lesson.icon}</span>
            <div>
              <span className="text-accent font-bold tracking-widest text-xs uppercase">{lesson.category} · {lesson.duration}</span>
              <h1 className="heading-display font-black text-white text-4xl md:text-5xl mt-1">{lesson.title}</h1>
            </div>
          </div>
          <p className="text-white/60 text-lg max-w-2xl">{lesson.description}</p>
          {watched && (
            <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 text-green-300 rounded-full px-4 py-2 text-sm font-bold">
              ✓ Completed
            </div>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-navy"
          style={{ boxShadow: '8px 8px 0px #1A3A5C' }}
        >
          <div className="aspect-video bg-primary relative flex items-center justify-center">
            {lesson.videoId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${lesson.videoId}`}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-white/40">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-bold">Video Coming Soon</span>
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8"
            style={{ boxShadow: '4px 4px 0px #8B5E3C' }}
          >
            <h2 className="font-black text-primary text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</span>
              Key Learning Points
            </h2>
            <ul className="space-y-4">
              {lesson.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-primary/70 leading-relaxed">
                  <span className="text-accent font-black mt-0.5 flex-shrink-0">0{i + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Common mistakes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8"
            style={{ boxShadow: '4px 4px 0px #C4914F' }}
          >
            <h2 className="font-black text-primary text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs">!</span>
              Common Mistakes
            </h2>
            <ul className="space-y-4">
              {lesson.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex items-start gap-3 text-primary/70 leading-relaxed">
                  <span className="text-secondary font-black mt-0.5 flex-shrink-0">✗</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Progress + Next */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-8" style={{ boxShadow: '4px 4px 0px #1A3A5C' }}>
          <button
            onClick={markWatched}
            disabled={watched}
            className={`btn-pill font-black text-base transition-all duration-300 ${
              watched
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-primary text-white hover:bg-secondary'
            }`}
          >
            {watched ? '✓ Marked as Complete' : 'Mark as Complete'}
          </button>

          {nextLesson && (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              className="btn-pill bg-accent text-white font-black text-base hover:bg-secondary transition-all duration-300 flex items-center gap-2"
            >
              Next: {nextLesson.title} →
            </Link>
          )}
        </div>
      </div>

      {/* Other lessons */}
      <section className="py-16 px-6 lg:px-12 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-primary text-2xl mb-8">All Lessons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LESSONS.map(l => (
              <Link
                key={l.slug}
                href={`/lessons/${l.slug}`}
                className={`p-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                  l.slug === params.slug
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-accent hover:text-white'
                }`}
              >
                <span className="block text-2xl mb-1">{l.icon}</span>
                {l.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
