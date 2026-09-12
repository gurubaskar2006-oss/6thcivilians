'use client'

import { motion } from 'framer-motion'
import { useIsReducedMotion, EASE } from '@/components/motion'

export function SignatureTransition() {
  const reduced = useIsReducedMotion()

  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#073B32] text-white overflow-hidden select-none">
      {/* Dynamic Multi-Hue Organic Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#073B32] via-[#0B5D4F] via-[#4C6FFF] to-[#7C5CFF] opacity-90" />

      {/* Ambient Moving Glow Blooms */}
      <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-[#35D07F]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-[#48DDEB]/30 blur-3xl pointer-events-none" />

      {/* Floating Noise/Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col items-center text-center">
        {/* Registration Mark */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-mono font-semibold tracking-widest text-white uppercase mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-[#35D07F] animate-pulse" />
          <span>OUR CORE BELIEF</span>
        </motion.div>

        {/* Massive Editorial Statement */}
        <motion.h2
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.92]"
        >
          IDEAS <br />
          <span className="bg-gradient-to-r from-white via-[#48DDEB] to-[#35D07F] bg-clip-text text-transparent">
            IN MOTION.
          </span>
        </motion.h2>

        {/* Supporting Proposition */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-8 max-w-2xl text-base sm:text-xl font-medium leading-relaxed text-white/80"
        >
          Thoughtful engineering. Pragmatic innovation. Built for what&apos;s ahead.
        </motion.p>
      </div>
    </section>
  )
}
