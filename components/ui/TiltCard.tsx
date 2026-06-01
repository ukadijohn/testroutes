'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  style?: React.CSSProperties
}

export default function TiltCard({ children, className = '', intensity = 10, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientY - rect.top - rect.height / 2) / rect.height
    const y = (e.clientX - rect.left - rect.width / 2) / rect.width
    setTilt({ x: x * intensity, y: -y * intensity })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
