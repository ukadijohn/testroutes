'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Registration failed')
      setLoading(false)
      return
    }

    await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    })

    router.push('/pricing')
  }

  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="w-14 h-14 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
                <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" />
                <line x1="20" y1="2" x2="20" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="20" y1="28" x2="20" y2="38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="2" y1="20" x2="12" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="28" y1="20" x2="38" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </Link>
          <h1 className="heading-display font-black text-white text-4xl">Create Account</h1>
          <p className="text-white/60 mt-2">Start your journey to passing first time</p>
        </div>

        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '6px 6px 0px #C4914F' }}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-primary font-bold text-sm mb-2">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
                className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-primary font-bold text-sm mb-2">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-primary font-bold text-sm mb-2">Password</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                placeholder="Min. 8 characters"
                className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-pill bg-accent text-white font-black w-full justify-center hover:bg-primary transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-primary/40 text-xs mt-4 leading-relaxed">
            By creating an account you agree to our Terms of Service and Privacy Policy.
          </p>

          <p className="text-center text-primary/60 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-accent font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  )
}
