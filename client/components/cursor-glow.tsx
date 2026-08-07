'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsReducedMotion } from '@/components/motion'

/** A soft green glow blob that trails the cursor. Desktop / fine-pointer only. */
export function CursorGlow() {
  const reduced = useIsReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    if (reduced) return
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 250)
      y.set(e.clientY - 250)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 h-[500px] w-[500px] rounded-full"
      style={{
        x: sx,
        y: sy,
        opacity: 1,
        background:
          'radial-gradient(circle, rgba(0, 212, 255,0.05) 0%, rgba(0, 212, 255,0.02) 35%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
