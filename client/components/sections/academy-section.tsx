'use client'

import { brand } from '@/data/content'
import { ArrowUpRight, GraduationCap } from 'lucide-react'

export function AcademySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 w-full py-16 border-b border-border">
      <div className="border border-border bg-card/60 p-8 sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest">
                ECOSYSTEM DIVISION // TALENT & IMMERSION
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="font-mono text-[11px] text-zinc-400">EXTERNAL BRAND</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {brand.academy.name}
            </h2>

            <p className="mt-1 text-sm font-medium text-emerald-400">
              {brand.academy.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {brand.academy.description}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={brand.academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-secondary/80 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-zinc-400 hover:bg-secondary"
            >
              <span>Visit EWDTH Academy</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
