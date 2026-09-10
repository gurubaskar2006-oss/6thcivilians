'use client'

import { industries } from '@/data/content'
import { Reveal, StaggerGroup } from '@/components/motion'
import { ArrowUpRight } from 'lucide-react'

export function Industries() {
  const featured = industries.slice(0, 2)
  const remaining = industries.slice(2)

  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            03 // INDUSTRY ARCHITECTURES & OPERATIONAL DOMAINS
          </span>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Purpose-built technology applied across industry verticals.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We adapt our engineering patterns to the regulatory frameworks, throughput requirements, and data topologies of critical business sectors.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Asymmetric Modular Layout: Top Featured Row (7 cols / 5 cols) */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 border border-border divide-y lg:divide-y-0 lg:divide-x divide-border bg-card/30">
        {/* Featured 1 (7 cols) */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-between group hover:bg-card/70 transition-colors">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-emerald-500">
                [DOMAIN_01] // FEATURED ARCHITECTURE
              </span>
              <div className="flex h-8 w-8 items-center justify-center border border-border text-zinc-400 group-hover:text-foreground transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
              {featured[0].title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xl">
              {featured[0].description}
            </p>

            <div className="mt-8 pt-6 border-t border-border/50">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                CORE SYSTEM IMPLEMENTATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {featured[0].applications.map((app) => (
                  <span
                    key={app}
                    className="border border-border bg-secondary/50 px-3 py-1.5 text-xs text-zinc-200 font-mono"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>GOVERNANCE: ENTERPRISE AUDIT</span>
            <span className="text-emerald-500">HIGH-CONCURRENCY</span>
          </div>
        </div>

        {/* Featured 2 (5 cols) */}
        <div className="lg:col-span-5 p-8 flex flex-col justify-between group hover:bg-card/70 transition-colors">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-emerald-500">
                [DOMAIN_02] // PLATFORM ARCHITECTURE
              </span>
              <div className="flex h-8 w-8 items-center justify-center border border-border text-zinc-400 group-hover:text-foreground transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
              {featured[1].title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {featured[1].description}
            </p>

            <div className="mt-8 pt-6 border-t border-border/50">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                CORE SYSTEM IMPLEMENTATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {featured[1].applications.map((app) => (
                  <span
                    key={app}
                    className="border border-border bg-secondary/50 px-3 py-1.5 text-xs text-zinc-200 font-mono"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>ISOLATION: ROW-LEVEL SCHEMA</span>
            <span className="text-emerald-500">MULTI-TENANT</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: 4-Column Dense Technical Specification Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-b border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-card/20">
        {remaining.map((ind, idx) => (
          <div
            key={ind.id}
            className="p-6 flex flex-col justify-between group hover:bg-card/60 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors">
                  0{idx + 3}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
              </div>

              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {ind.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {ind.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {ind.applications.map((app) => (
                  <span
                    key={app}
                    className="text-[10px] font-mono text-zinc-400 border border-border/60 bg-secondary/30 px-2 py-0.5"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
