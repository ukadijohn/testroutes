'use client'

import { motion } from 'framer-motion'

const stages = [
  {
    step: '01',
    title: 'Your First Lesson',
    desc: 'Get comfortable behind the wheel in a safe, quiet environment. Your instructor tailors the lesson to your confidence level.',
    color: 'bg-primary',
  },
  {
    step: '02',
    title: 'Theory Test Prep',
    desc: 'Master the Highway Code, road signs, and hazard perception with our guided study materials and practice tests.',
    color: 'bg-secondary',
  },
  {
    step: '03',
    title: 'Learn the Test Routes',
    desc: 'Watch all 40 Portsmouth test route videos. Understand every junction, roundabout, and tricky manoeuvre you\'ll face on test day.',
    color: 'bg-accent',
  },
  {
    step: '04',
    title: 'Mock Test Drive',
    desc: 'Complete a full mock test simulation on the actual Portsmouth test routes. Get detailed feedback to iron out any faults.',
    color: 'bg-primary',
  },
  {
    step: '05',
    title: 'Pass Your Test',
    desc: 'Walk into the test centre with confidence, route knowledge, and the skills to pass first time. Congratulations!',
    color: 'bg-secondary',
  },
]

export default function Timeline() {
  return (
    <section className="py-32 bg-primary px-6 lg:px-12 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <span className="text-accent font-bold tracking-widest text-xs uppercase">Your Journey</span>
          <h2 className="heading-display font-black text-white text-5xl md:text-6xl lg:text-7xl mt-3">
            From Zero<br />
            <span className="text-accent">to Passed</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step number dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full ${stage.color} flex items-center justify-center font-black text-white text-sm border-4 border-primary`}>
                    {stage.step}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                    <h3 className="font-black text-white text-xl mb-2">{stage.title}</h3>
                    <p className="text-white/60 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
