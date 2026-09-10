'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Terminal, CheckCircle2 } from 'lucide-react'
import { brand } from '@/data/content'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { HeroInteractiveArchitecture } from '@/components/hero-interactive-architecture'

export function Hero() {
  const reduced = useIsReducedMotion()

  const capabilities = [
    { code: '01', label: 'Software Engineering', spec: 'Distributed Systems & Web Core' },
    { code: '02', label: 'Applied Intelligence', spec: 'Production ML & LLM Workflows' },
    { code: '03', label: 'Cloud Architecture', spec: 'Multi-Cloud & Zero-Downtime' },
    { code: '04', label: 'Technology Advisory', spec: 'Enterprise Modernization' },
  ]

  return (
    <section
      id="hero-panel"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 arch-grid border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 w-full my-auto">
        {/* Asymmetric Split Layout: Left Content, Right Architectural Topology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Editorial Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Architectural Registration Bar */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-3 border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-mono tracking-wider text-zinc-300 mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>6TH CIVILIANS CORPORATION // ARCHITECTURE & SYSTEMS</span>
            </motion.div>

            {/* Solid, Commanding Typographic Headline in Syne */}
            <div className="overflow-hidden">
              <motion.h1
                initial={reduced ? false : { y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.04]"
              >
                Engineering technology for what comes next.
              </motion.h1>
            </div>

            {/* Editorial Positioning Statement */}
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-sans text-pretty"
            >
              We design, engineer, and deploy mission-critical software systems, applied machine learning architectures, and scalable cloud topologies for forward-thinking enterprises.
            </motion.p>

            {/* High-Contrast Action Cluster */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-zinc-500 hover:bg-white/[0.03]"
              >
                Initiate Engagement
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural Schematic Console (5 cols) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-border bg-card p-5 font-mono">
              {/* Corner marks */}
              <div className="absolute -top-1.5 -left-1.5 text-xs text-zinc-500">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-xs text-zinc-500">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-xs text-zinc-500">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-xs text-zinc-500">+</div>

              {/* Console Header Bar */}
              <div className="flex items-center justify-between border-b border-border pb-3 text-[11px] text-zinc-400">
                <span className="flex items-center gap-2 text-zinc-200">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  SYSTEM_CORE_TOPOLOGY
                </span>
                <span className="text-emerald-400">STATUS: NOMINAL</span>
              </div>

              {/* Interactive Vector Node Viewport */}
              <div className="relative h-64 sm:h-72 w-full my-3 overflow-hidden border border-border/50 bg-black/40">
                <HeroInteractiveArchitecture />
              </div>

              {/* Console Telemetry Row */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border text-[10px] text-zinc-400">
                <div>
                  <span className="text-zinc-500 block">THROUGHPUT</span>
                  <span className="text-zinc-200 font-semibold">120K REQ/SEC</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">UPTIME SLA</span>
                  <span className="text-zinc-200 font-semibold">99.99% VERIFIED</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">SECURITY</span>
                  <span className="text-emerald-400 font-semibold">ZERO-TRUST</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width Architectural Capability Index Bar */}
      <div className="mt-12 w-full border-t border-border bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {capabilities.map((item) => (
            <div key={item.code} className="flex flex-col pt-3 md:pt-0 md:px-4 first:pl-0">
              <span className="font-mono text-xs text-emerald-500 font-bold mb-1">
                [{item.code}]
              </span>
              <span className="text-xs font-semibold text-foreground">
                {item.label}
              </span>
              <span className="text-[11px] text-muted-foreground mt-0.5">
                {item.spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
