'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Code2, Cpu, Cloud, ShieldCheck } from 'lucide-react'
import { brand } from '@/data/content'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { MagneticButton } from '@/components/magnetic-button'

export function Hero() {
  const reduced = useIsReducedMotion()

  const techHighlights = [
    { icon: Code2, label: 'Enterprise Software' },
    { icon: Cpu, label: 'Applied AI & ML' },
    { icon: Cloud, label: 'Cloud Architecture' },
    { icon: ShieldCheck, label: 'Mission-Critical Reliability' },
  ]

  return (
    <section
      id="hero-panel"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden pt-32 pb-20 tech-grid"
    >
      {/* Controlled subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
      >
        <div className="h-[480px] w-[700px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-[120px] opacity-70" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Corporate division pill */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>6th Civilians Corporation</span>
        </motion.div>

        {/* Primary headline */}
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: EASE }}
          className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl max-w-4xl text-balance leading-[1.08]"
        >
          Engineering technology for{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            what comes next.
          </span>
        </motion.h1>

        {/* Supporting corporate copy */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          6th Civilians Corporation builds custom enterprise software, digital products, AI-driven architectures, and scalable technology infrastructure for modern organizations.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto"
        >
          <MagneticButton href="#services">
            Explore Our Services
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Work With Us
          </MagneticButton>
        </motion.div>

        {/* Technology Highlights Row */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 w-full max-w-3xl"
        >
          {techHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left backdrop-blur-sm transition-colors hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/40 text-emerald-400">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {item.label}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to corporate introduction"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-14 flex flex-col items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="uppercase tracking-widest text-[10px]">Explore</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-emerald-400" />
      </motion.a>
    </section>
  )
}
