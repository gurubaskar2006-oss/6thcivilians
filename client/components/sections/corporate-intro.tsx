'use client'

import { corporatePillars } from '@/data/content'
import { Reveal, StaggerGroup } from '@/components/motion'
import { ShieldCheck, Cpu, Cloud, Handshake, ArrowUpRight } from 'lucide-react'

export function CorporateIntro() {
  const pillarIcons = [ShieldCheck, Cpu, Cloud, Handshake]

  return (
    <section id="about" className="relative w-full py-24 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-border">
          {/* Left Headline (7 cols) */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
              01 // CORPORATE PROFILE & FOUNDATIONAL ETHOS
            </span>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Technology built around real business needs.
              </h2>
            </Reveal>
          </div>

          {/* Right Editorial Manifesto (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                We reject ephemeral tech fads and superficial prototypes. 6th Civilians Corporation engineers disciplined, mission-critical systems designed for multi-year operational longevity, verified security, and enterprise scale.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Structured Engineering Standards Matrix (4-Column Tabular Grid with Hairline Dividers) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-card/40">
          {corporatePillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length]
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between p-8 transition-colors duration-300 hover:bg-secondary/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors">
                      0{idx + 1}
                    </span>
                    <Icon className="h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-6 font-display text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>DISCIPLINE_METRIC</span>
                  <span className="text-emerald-500 font-semibold">100% AUDITED</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
