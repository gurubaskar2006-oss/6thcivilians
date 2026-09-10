'use client'

import { industries } from '@/data/content'
import { Reveal, StaggerGroup, useTiltInteraction } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

function IndustryCard({ ind, idx }: { ind: (typeof industries)[0]; idx: number }) {
  const { ref, onMove, reset, style } = useTiltInteraction()
  const Icon = ind.icon

  return (
    <Reveal delay={idx * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={style}
        className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.05] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)]"
      >
        <div>
          {/* Top row with visual icon & interactive arrow */}
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-secondary/30 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-zinc-500 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          <h3 className="mt-5 font-display text-lg font-bold text-foreground sm:text-xl transition-colors group-hover:text-emerald-300">
            {ind.title}
          </h3>

          <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {ind.description}
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-white/5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/80 block mb-2 font-mono">
            Key Implementations
          </span>
          <div className="flex flex-wrap gap-1.5">
            {ind.applications.map((app) => (
              <span
                key={app}
                className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-300 transition-colors group-hover:border-emerald-500/20"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export function Industries() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 w-full py-28 border-t border-border/40">
      <div className="max-w-3xl">
        <SectionLabel index="03" label="Solutions & Domains" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
            Purpose-built technology applied across{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              industry verticals.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We adapt our engineering methodologies to the regulatory, data, and performance requirements of diverse operational environments.
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, idx) => (
          <IndustryCard key={ind.id} ind={ind} idx={idx} />
        ))}
      </StaggerGroup>
    </section>
  )
}
