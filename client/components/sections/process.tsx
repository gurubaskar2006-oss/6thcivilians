'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/data/content'
import { EASE, Reveal, StaggerGroup, useIsReducedMotion } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'

export function Process() {
  const reduced = useIsReducedMotion()

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 w-full py-28 border-t border-border/40">
      <div className="max-w-3xl">
        <SectionLabel index="05" label="Methodology" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
            A structured lifecycle from discovery to{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              continuous scale.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our delivery model reduces uncertainty, enforces architecture discipline, and guarantees reproducible quality at every milestone.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-20">
        {/* Subtle connecting line for large screens */}
        <div className="absolute inset-x-0 top-8 hidden xl:block pointer-events-none">
          <div className="h-px w-full bg-gradient-to-r from-emerald-500/10 via-emerald-500/40 to-emerald-500/10" />
        </div>

        <StaggerGroup stagger={0.1} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.08} className="relative">
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/60">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-background text-emerald-400 font-display text-sm font-bold shadow-lg shadow-emerald-500/10 transition-transform duration-300 group-hover:scale-105">
                    {step.step}
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400/90">
                    {step.tagline}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
