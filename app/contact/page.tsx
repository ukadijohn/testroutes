'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', days: [] as string[] })
  const [submitted, setSubmitted] = useState(false)

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const toggleDay = (day: string) => {
    setForm(prev => ({
      ...prev,
      days: prev.days.includes(day) ? prev.days.filter(d => d !== day) : [...prev.days, day],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-20 bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Get In Touch</span>
            <h1 className="heading-display font-black text-white text-5xl md:text-6xl mt-3">
              Book a Lesson<br />
              <span className="text-accent">or Ask Anything</span>
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

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center" style={{ boxShadow: '6px 6px 0px #1A3A5C' }}>
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="font-black text-primary text-2xl mb-4">Message Received!</h2>
                  <p className="text-primary/60 leading-relaxed">
                    Thanks for getting in touch. We&apos;ll reply within 24 hours. In the meantime,
                    why not explore our free lessons?
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10" style={{ boxShadow: '6px 6px 0px #1A3A5C' }}>
                  <h2 className="font-black text-primary text-2xl mb-8">Booking Enquiry</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-primary font-bold text-sm mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-bold text-sm mb-2">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-bold text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        placeholder="07xxx xxxxxx"
                        className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-bold text-sm mb-3">Preferred Lesson Days</label>
                      <div className="flex flex-wrap gap-2">
                        {days.map(day => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => toggleDay(day)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                              form.days.includes(day)
                                ? 'bg-primary text-white'
                                : 'bg-primary/10 text-primary hover:bg-primary/20'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-primary font-bold text-sm mb-2">Message</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        placeholder="Tell us about your experience level, any specific goals, or questions..."
                        rows={4}
                        className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 font-medium text-primary focus:border-accent focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-pill bg-accent text-white font-black text-base w-full justify-center hover:bg-primary transition-all duration-300"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-primary/10 h-64 relative flex items-center justify-center" style={{ boxShadow: '6px 6px 0px #8B5E3C' }}>
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-bold text-primary">Portsmouth Driving Test Centre</p>
                  <p className="text-primary/60 text-sm">Tangier Road, Portsmouth PO3 6JP</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '4px 4px 0px #1A3A5C' }}>
                <h3 className="font-black text-primary text-xl mb-6">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: '📞', label: 'Phone', value: '023 9200 0000', href: 'tel:02392000000' },
                    { icon: '✉️', label: 'Email', value: 'hello@portsmouthdriving.co.uk', href: 'mailto:hello@portsmouthdriving.co.uk' },
                    { icon: '📍', label: 'Area', value: 'Portsmouth & surrounding areas', href: null },
                    { icon: '🕐', label: 'Lessons', value: 'Mon–Sat, 7am–7pm', href: null },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-primary/50 text-xs font-bold uppercase tracking-wide">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-primary font-bold hover:text-accent transition-colors">{item.value}</a>
                        ) : (
                          <div className="text-primary font-bold">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating phone CTA */}
              <a
                href="tel:02392000000"
                className="flex items-center gap-4 bg-accent text-white rounded-2xl p-6 hover:bg-secondary transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <div className="font-black text-xl">023 9200 0000</div>
                  <div className="text-white/80 text-sm">Call us Mon–Sat 8am–6pm</div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
