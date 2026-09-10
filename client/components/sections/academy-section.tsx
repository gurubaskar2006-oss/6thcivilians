'use client'

import { brand } from '@/data/content'
import { Reveal } from '@/components/motion'
import { ArrowUpRight, GraduationCap } from 'lucide-react'

export function AcademySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 w-full py-20 border-t border-border/40">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/60 via-zinc-950/80 to-zinc-900/60 p-8 sm:p-12 backdrop-blur-xl">
          {/* Subtle accent glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>{brand.academy.division}</span>
              </div>

              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {brand.academy.name}
              </h2>

              <p className="mt-2 text-sm font-medium text-emerald-400/90 sm:text-base">
                {brand.academy.tagline}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {brand.academy.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={brand.academy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
              >
                <span>Visit Ewdth Academy</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
