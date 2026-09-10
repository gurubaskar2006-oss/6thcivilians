'use client'

import { corporatePillars } from '@/data/content'
import { Reveal, StaggerGroup } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { ShieldCheck, Cpu, Cloud, Handshake } from 'lucide-react'

export function CorporateIntro() {
  const pillarIcons = [ShieldCheck, Cpu, Cloud, Handshake]

  return (
    <section id="about" className="relative w-full py-28 border-t border-border/40 bg-zinc-950/40">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-start">
          {/* Left Column: Mission & Identity */}
          <div className="flex flex-col">
            <Reveal>
              <SectionLabel index="01" label="Corporate Profile" />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.15]">
                Technology built around{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  real business needs.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                6th Civilians Corporation is a technology corporation specializing in custom software engineering, applied artificial intelligence, scalable cloud systems, and technology consulting.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80 sm:text-base">
                We partner with modern organizations to design, build, and maintain digital assets that solve operational bottlenecks and power long-term growth. Every system is architected with disciplined engineering standards, transparent communication, and measurable business outcomes.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {['Custom Software', 'Applied AI/ML', 'Cloud Topologies', 'Technology Consulting'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Corporate Pillars */}
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {corporatePillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length]
              return (
                <Reveal key={pillar.title} delay={0.1 + idx * 0.1}>
                  <div className="group relative flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
