'use client'

import { Suspense, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const redirect = params.get('redirect') || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password')
      setLoading(false)
    } else {
      router.push(redirect)
    }
  }

  const handleGoogle = () => {
    signIn('google', { callbackUrl: redirect })
  }

  return (
    <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '6px 6px 0px #C4914F' }}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm font-semibold">
          {error}
        </div>
      )}

      <button
        onClick={handleGoogle}
        className="w-full btn-pill border-2 border-primary/20 text-primary font-bold mb-6 justify-center hover:border-primary transition-all duration-200 flex items-center gap-3"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Continue with Google
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-primary/10" />
        <span className="text-primary/40 text-xs font-bold">OR</span>
        <div className="flex-1 h-px bg-primary/10" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-primary font-bold text-sm mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-primary font-bold text-sm mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-pill bg-accent text-white font-black w-full justify-center hover:bg-primary transition-all duration-300 disabled:opacity-60"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center text-primary/60 text-sm mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="text-accent font-bold hover:underline">
          Create one free
        </Link>
      </p>
    </div>
  )
}

export default function LoginPage() {
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
          <h1 className="heading-display font-black text-white text-4xl">Welcome Back</h1>
          <p className="text-white/60 mt-2">Sign in to access your test routes</p>
        </div>

        <Suspense fallback={<div className="bg-white rounded-2xl p-8 text-center text-primary">Loading...</div>}>
          <LoginForm />
        </Suspense>
      </motion.div>
    </main>
  )
}
