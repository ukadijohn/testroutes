'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const scale = useMotionValue(1)

  const springConfig = { damping: 25, stiffness: 300 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }

    const enter = () => scale.set(2.5)
    const leave = () => scale.set(1)

    window.addEventListener('mousemove', move)

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [cursorX, cursorY, scale])

  return (
    <motion.div
      style={{ x, y, scale }}
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent z-[9999] pointer-events-none mix-blend-multiply"
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    />
  )
}
