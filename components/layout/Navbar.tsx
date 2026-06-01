'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/lessons', label: 'Free Lessons' },
  { href: '/test-routes', label: 'Test Routes' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
                <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" />
                <line x1="20" y1="2" x2="20" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="20" y1="28" x2="20" y2="38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="2" y1="20" x2="12" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="28" y1="20" x2="38" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="block text-white font-black text-lg leading-none tracking-tight">
                Portsmouth
              </span>
              <span className="block text-accent text-xs font-semibold tracking-widest uppercase">
                Driving School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent font-semibold text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/test-routes"
              className="text-white/80 hover:text-white font-semibold text-sm transition-colors"
            >
              Log In
            </Link>
            <MagneticButton>
              <Link
                href="/pricing"
                className="btn-pill bg-accent text-white text-sm px-6 py-3 hover:bg-secondary transition-colors"
              >
                Start Learning
              </Link>
            </MagneticButton>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-all"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-black text-white hover:text-accent transition-colors heading-display"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/pricing"
                onClick={() => setMenuOpen(false)}
                className="btn-pill bg-accent text-white text-lg mt-4 inline-block"
              >
                Start Learning — £9.99/mo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
