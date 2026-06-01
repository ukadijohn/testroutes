'use client'

const items = [
  'HAZARD PERCEPTION',
  'MOCK TESTS',
  'TEST ROUTES',
  'MANOEUVRES',
  'THEORY PREP',
  'PARALLEL PARKING',
  'ROUNDABOUTS',
  'BAY PARKING',
  'MOTORWAY AWARENESS',
  'EMERGENCY STOPS',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-accent py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="text-white font-black text-sm tracking-widest uppercase">{item}</span>
            <span className="text-white/40 text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
