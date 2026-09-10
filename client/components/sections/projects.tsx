'use client'

import { projects, type Project } from '@/data/content'
import { Reveal, StaggerGroup } from '@/components/motion'
import { ArrowUpRight, CheckCircle2, Terminal, Network, Sparkles, Layers, Shield } from 'lucide-react'

export function Projects() {
  const gambitProject = projects.find((p) => p.id === 'pr-gambit-platform') || projects[0]
  const telemetryProject = projects.find((p) => p.id === 'iot-telemetry-engine') || projects[1]
  const automationProject = projects.find((p) => p.id === 'automation-engine') || projects[2]
  const saasProject = projects.find((p) => p.id === 'saas-core-platform') || projects[3]

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            04 // SELECTED ARCHITECTURES & CASE STUDIES
          </span>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Evidence of disciplined execution and enterprise architecture.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A curated monograph of software systems, distributed pipelines, and platforms delivered across the 6th Civilians ecosystem.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Featured Case Study 01: Team Gambit Platform (Full-Width Asymmetric Monograph) */}
      <div className="mt-14 border border-border bg-card/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-emerald-500">
                  CASE STUDY // 01
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span className="font-mono text-[11px] text-zinc-400 uppercase">
                  {gambitProject.clientOrDomain}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-foreground">
                {gambitProject.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {gambitProject.description}
              </p>

              {/* Architectural Highlights */}
              <div className="mt-6 space-y-2.5">
                {gambitProject.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {gambitProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-secondary/50 px-2.5 py-1 text-xs font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {gambitProject.url && (
              <div className="mt-8 pt-6 border-t border-border/50">
                <a
                  href={gambitProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-secondary/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-zinc-500 hover:bg-secondary"
                >
                  <span>Access Live Platform</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* Right Architecture Topology Console (5 cols) */}
          <div className="lg:col-span-5 p-8 bg-zinc-950/60 flex flex-col justify-between font-mono text-xs">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Terminal className="h-3.5 w-3.5" />
                  TOPOLOGY_SPEC // GAMBIT_PORTAL
                </span>
                <span>EDGE_RENDERED</span>
              </div>

              <div className="my-6 space-y-3">
                <div className="border border-border/60 bg-secondary/30 p-3">
                  <span className="text-[10px] text-zinc-500 block mb-1">FRONTEND ARCHITECTURE</span>
                  <span className="text-zinc-200 font-semibold block">Next.js 14 / TypeScript / Tailwind Core</span>
                  <span className="text-[11px] text-zinc-400 mt-1 block">Sub-second page transitions & edge caching</span>
                </div>

                <div className="border border-border/60 bg-secondary/30 p-3">
                  <span className="text-[10px] text-zinc-500 block mb-1">ASSET PIPELINE</span>
                  <span className="text-zinc-200 font-semibold block">Automated Responsive WebP/AVIF Delivery</span>
                  <span className="text-[11px] text-zinc-400 mt-1 block">Zero content layout shift (CLS: &lt;0.01)</span>
                </div>

                <div className="border border-border/60 bg-secondary/30 p-3">
                  <span className="text-[10px] text-zinc-500 block mb-1">ACCESSIBILITY & SEO</span>
                  <span className="text-emerald-400 font-semibold block">WCAG 2.1 AA Compliant</span>
                  <span className="text-[11px] text-zinc-400 mt-1 block">Structured OpenGraph & metadata indexing</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] text-zinc-500">
              <span>STATUS: PRODUCTION</span>
              <span className="text-emerald-500">VERIFIED UPTIME: 99.98%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Complementary Case Studies Side-by-Side (6 cols / 6 cols) */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 border border-border divide-y lg:divide-y-0 lg:divide-x divide-border bg-card/30">
        {/* Case Study 02: Fleet Telemetry */}
        <div className="p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-emerald-500">
                CASE STUDY // 02
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="font-mono text-[11px] text-zinc-400 uppercase">
                {telemetryProject.clientOrDomain}
              </span>
            </div>

            <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground">
              {telemetryProject.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {telemetryProject.description}
            </p>

            <div className="mt-6 space-y-2">
              {telemetryProject.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {telemetryProject.tags.map((t) => (
                <span key={t} className="text-[11px] font-mono text-zinc-400 border border-border bg-secondary/40 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <span className="font-mono text-[11px] text-zinc-500">VERIFIED ARCHITECTURE</span>
          </div>
        </div>

        {/* Case Study 03: Automation Engine */}
        <div className="p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-emerald-500">
                CASE STUDY // 03
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span className="font-mono text-[11px] text-zinc-400 uppercase">
                {automationProject.clientOrDomain}
              </span>
            </div>

            <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-foreground">
              {automationProject.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {automationProject.description}
            </p>

            <div className="mt-6 space-y-2">
              {automationProject.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {automationProject.tags.map((t) => (
                <span key={t} className="text-[11px] font-mono text-zinc-400 border border-border bg-secondary/40 px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
            <span className="font-mono text-[11px] text-zinc-500">VERIFIED ARCHITECTURE</span>
          </div>
        </div>
      </div>

      {/* Case Study 04: SaaS Foundation Architecture (Full-Width Technical Dossier) */}
      <div className="mt-8 border border-border bg-card/20 p-8 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs font-bold text-emerald-500 block mb-2">
              CASE STUDY // 04 · ENTERPRISE CORE
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              {saasProject.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {saasProject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {saasProject.tags.map((tag) => (
                <span key={tag} className="border border-border bg-secondary/40 px-2.5 py-1 text-xs font-mono text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8 space-y-2 font-mono text-xs text-zinc-300">
            {saasProject.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
