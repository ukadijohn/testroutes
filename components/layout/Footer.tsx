import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" className="w-full h-16 fill-cream">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2.5" />
                  <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" />
                  <line x1="20" y1="2" x2="20" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="20" y1="28" x2="20" y2="38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="2" y1="20" x2="12" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="28" y1="20" x2="38" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="block font-black text-xl leading-none">Portsmouth</span>
                <span className="block text-accent text-xs font-semibold tracking-widest uppercase">Driving School</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-xs">
              Portsmouth&apos;s premier DVSA-approved driving school. Master every road,
              memorise every test route, and pass first time.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-semibold text-white/80">Stripe Secured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="text-xs font-semibold text-white/80">DVSA Approved</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-accent uppercase tracking-widest text-xs mb-6">Learn</h3>
            <ul className="space-y-3">
              {[
                { href: '/lessons', label: 'Free Lessons' },
                { href: '/lessons/starting-moving-off', label: 'Starting & Moving Off' },
                { href: '/lessons/hazard-perception', label: 'Hazard Perception' },
                { href: '/lessons/theory-test', label: 'Theory Test Prep' },
                { href: '/test-routes', label: 'Test Routes' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-accent uppercase tracking-widest text-xs mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/contact', label: 'Contact' },
                { href: '/dashboard', label: 'My Dashboard' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-white/40 text-xs">
                📞{' '}
                <a href="tel:02392000000" className="hover:text-accent transition-colors">
                  023 9200 0000
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Portsmouth Driving School Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center md:text-right max-w-md">
            All driving instruction is conducted in accordance with DVSA standards and UK Highway Code.
            Test route videos are for educational purposes only and do not guarantee test pass outcomes.
          </p>
        </div>
      </div>
    </footer>
  )
}
