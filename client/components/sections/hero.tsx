'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { brand } from '@/data/content'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { MagneticButton } from '@/components/magnetic-button'
export function Hero() {
  const reduced = useIsReducedMotion()
  const words = brand.headline.split(' ')

  return (
    <section id="hero-panel" className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center flex flex-col items-center">
        
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 10, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
          transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
          className="mb-6 text-xs tracking-brand text-quantum uppercase"
        >
          {brand.tagline}
        </motion.p>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance metallic-heading sm:text-6xl md:text-7xl">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={reduced ? false : { opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.9, ease: EASE }}
              className="mr-[0.25em] inline-block last:mr-0"
            >
              {w === 'Reality.' ? <span className="text-quantum text-glow">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.9, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {brand.subheadline}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#services">Explore Our Work</MagneticButton>
          <MagneticButton href="#team" variant="ghost">
            Meet the Team
          </MagneticButton>
        </motion.div>
      </div>



      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to content"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-brand uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
