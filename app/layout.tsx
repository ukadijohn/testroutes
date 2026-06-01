import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import PageTransition from '@/components/layout/PageTransition'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portsmouth Driving School | Pass First Time',
  description:
    "Portsmouth's premier driving school. Access all 40 test routes, hazard perception training, mock tests and expert tuition to help you pass first time.",
  keywords: 'Portsmouth driving school, driving lessons Portsmouth, driving test routes Portsmouth, pass driving test',
  openGraph: {
    title: 'Portsmouth Driving School | Pass First Time',
    description: "Portsmouth's #1 driving school with all 40 test routes available online.",
    url: 'https://portsmouthdrivingschool.co.uk',
    siteName: 'Portsmouth Driving School',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Portsmouth Driving School',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portsmouth Driving School | Pass First Time',
    description: "Portsmouth's #1 driving school with all 40 test routes available online.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body className="font-poppins bg-cream text-primary antialiased overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
