import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import WhyUs from '@/components/sections/WhyUs'
import Timeline from '@/components/sections/Timeline'
import Testimonials from '@/components/sections/Testimonials'
import RoutesTeaser from '@/components/sections/RoutesTeaser'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <WhyUs />
      <Timeline />
      <Testimonials />
      <RoutesTeaser />
    </main>
  )
}
