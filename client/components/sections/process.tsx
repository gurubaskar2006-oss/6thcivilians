'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { processSteps, brand } from '@/data/content'
import { EASE, Reveal, StaggerGroup, useIsReducedMotion } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'

export function Process() {
  const reduced = useIsReducedMotion()

  return (
    <section id="process-panel" className="relative mx-auto max-w-7xl px-6 w-full min-h-screen flex flex-col justify-center py-24">
      <div className="max-w-2xl">
        <SectionLabel index="02" label="Method" />
        <Reveal>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance metallic-heading sm:text-4xl md:text-5xl">
            How we move from signal to shipped.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-20">
        {/* animated connecting line (waveform motif) */}
        <div className="absolute inset-x-0 top-10 hidden md:block">
          <svg viewBox="0 0 1000 20" preserveAspectRatio="none" className="h-5 w-full" aria-hidden>
            <motion.path
              d="M20 10 Q 140 -6 260 10 T 500 10 T 740 10 T 980 10"
              fill="none"
              stroke="rgba(0, 212, 255,0.6)"
              strokeWidth="1.5"
              initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.8, ease: EASE }}
            />
          </svg>
        </div>

        <StaggerGroup stagger={0.15} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {processSteps.map((s, idx) => (
            <Reveal key={s.step} delay={idx + 1} className="relative">
              <div className="glass-panel relative h-full rounded-2xl p-6">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-quantum/40 bg-background text-quantum shadow-[0_0_15px_-8px_rgba(0,212,255,0.2)]">
                  <span className="font-display text-sm font-bold">{s.step}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold metallic-heading">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>

        {/* Meet Team Gambit CTA */}
        <Reveal delay={1}>
          <div className="mt-14 flex flex-col items-center justify-center">
            <h3 className="mb-6 font-display text-2xl font-bold metallic-heading">Ready to Engineer the Next Reality?</h3>
            <a
              href={brand.gambitUrl}
              className="glass-panel group inline-flex items-center gap-4 rounded-full px-10 py-5 text-lg font-bold tracking-wide text-foreground transition-all duration-300 hover:border-quantum/40 hover:shadow-[0_0_45px_-10px_rgba(16,185,129,0.55)] hover:scale-105"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-quantum opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-quantum" />
              </span>
              Meet Team Gambit
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
