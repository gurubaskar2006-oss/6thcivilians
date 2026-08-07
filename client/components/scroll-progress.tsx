'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useIsReducedMotion } from '@/components/motion'

export function ScrollProgress() {
  const reduced = useIsReducedMotion()
  const { scrollYProgress } = useScroll()
  const springScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scaleX = reduced ? scrollYProgress : springScale

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-quantum shadow-[0_0_8px_rgba(57,255,138,0.8)]"
      style={{ scaleX }}
    />
  )
}
