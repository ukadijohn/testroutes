'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  strength?: number
}

export default function MagneticButton({ children, strength = 0.4 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPos({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
