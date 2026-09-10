'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Code2, Cpu, Cloud, ShieldCheck } from 'lucide-react'
import { brand } from '@/data/content'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { MagneticButton } from '@/components/magnetic-button'
import { HeroInteractiveArchitecture } from '@/components/hero-interactive-architecture'

export function Hero() {
  const reduced = useIsReducedMotion()

  const techHighlights = [
    { icon: Code2, label: 'Enterprise Software' },
    { icon: Cpu, label: 'Applied AI & ML' },
    { icon: Cloud, label: 'Cloud Architecture' },
    { icon: ShieldCheck, label: 'Mission-Critical Reliability' },
  ]

  const line1 = 'Engineering technology'
  const line2 = 'for what comes next.'

  return (
    <section
      id="hero-panel"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden pt-32 pb-20 tech-grid"
    >
      {/* Proprietary Interactive Technical Architecture Background */}
      <HeroInteractiveArchitecture />

      {/* Hero content container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Corporate division pill with micro-radar dot */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>6th Civilians Corporation</span>
        </motion.div>

        {/* Primary headline with engineered line-by-line reveal */}
        <div className="overflow-hidden">
          <motion.h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl max-w-4xl leading-[1.08]">
            <motion.span
              initial={reduced ? false : { y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="block"
            >
              {line1}
            </motion.span>
            <motion.span
              initial={reduced ? false : { y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="block mt-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent"
            >
              {line2}
            </motion.span>
          </motion.h1>
        </div>

        {/* Supporting corporate copy */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {brand.subheadline}
        </motion.p>

        {/* Action buttons with micro-interaction hover */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto"
        >
          <MagneticButton href="#services">
            <span className="flex items-center gap-2">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Work With Us
          </MagneticButton>
        </motion.div>

        {/* Technology Highlights Row */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 w-full max-w-3xl"
        >
          {techHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/40 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
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
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-14 flex flex-col items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="uppercase tracking-widest text-[10px] font-medium text-emerald-400/90">Explore</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-emerald-400" />
      </motion.a>
    </section>
  )
}
