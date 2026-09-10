'use client'

import { projects, type Project } from '@/data/content'
import { Reveal, StaggerGroup, useTiltInteraction } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight, CheckCircle2, Terminal, Network, Sparkles, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

function ProjectVisualHeader({ id }: { id: string }) {
  switch (id) {
    case 'pr-gambit-platform':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 font-mono text-[10px] text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Terminal className="h-3 w-3" />
              GAMBIT_EDGE_PORTAL
            </span>
            <span className="text-zinc-500">EDGE_SSR · 99.9% ACCESSIBILITY</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-emerald-400 font-bold text-xs">FAST</span>
              <span className="text-[9px] text-zinc-500">Global CDN</span>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2 text-center">
              <span className="block text-emerald-300 font-bold text-xs">NEXT.JS</span>
              <span className="text-[9px] text-zinc-400">React Core</span>
            </div>
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-emerald-400 font-bold text-xs">RESPONSIVE</span>
              <span className="text-[9px] text-zinc-500">Adaptive UI</span>
            </div>
          </div>
        </div>
      )
    case 'iot-telemetry-engine':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 font-mono text-[10px] text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Network className="h-3 w-3" />
              TELEMETRY_PIPELINE
            </span>
            <span className="text-zinc-500">MQTT · PROTOBUF · INGEST</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-cyan-400 font-bold text-xs">REALTIME</span>
              <span className="text-[9px] text-zinc-500">WebSockets</span>
            </div>
            <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-2 text-center">
              <span className="block text-cyan-300 font-bold text-xs">STREAM</span>
              <span className="text-[9px] text-zinc-400">Kafka Bus</span>
            </div>
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-cyan-400 font-bold text-xs">TIME-SERIES</span>
              <span className="text-[9px] text-zinc-500">Analytics</span>
            </div>
          </div>
        </div>
      )
    case 'automation-engine':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 font-mono text-[10px] text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-teal-400">
              <Sparkles className="h-3 w-3" />
              AUTOMATION_ROUTER
            </span>
            <span className="text-zinc-500">NLP · ORCHESTRATION</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-teal-400 font-bold text-xs">AGENT</span>
              <span className="text-[9px] text-zinc-500">Classifier</span>
            </div>
            <div className="rounded-lg border border-teal-500/20 bg-teal-500/5 p-2 text-center">
              <span className="block text-teal-300 font-bold text-xs">PIPELINE</span>
              <span className="text-[9px] text-zinc-400">Async Queue</span>
            </div>
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-teal-400 font-bold text-xs">CRM SYNC</span>
              <span className="text-[9px] text-zinc-500">Webhooks</span>
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-950 p-4 font-mono text-[10px] text-zinc-400">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Layers className="h-3 w-3" />
              SAAS_CORE_MATRIX
            </span>
            <span className="text-zinc-500">MULTI_TENANT · ISOLATION</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-emerald-400 font-bold text-xs">RLS</span>
              <span className="text-[9px] text-zinc-500">Row Security</span>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2 text-center">
              <span className="block text-emerald-300 font-bold text-xs">DOCKER</span>
              <span className="text-[9px] text-zinc-400">Microservices</span>
            </div>
            <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
              <span className="block text-emerald-400 font-bold text-xs">POSTGRES</span>
              <span className="text-[9px] text-zinc-500">Partitioned</span>
            </div>
          </div>
        </div>
      )
  }
}

function ProjectCard({ project }: { project: Project }) {
  const { ref, onMove, reset, style } = useTiltInteraction()

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={style}
      className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-zinc-950/60 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
    >
      <div>
        {/* Visual Header / Case study schematic preview */}
        <div className="transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectVisualHeader id={project.id} />
        </div>

        {/* Top meta row */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
            {project.category}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {project.clientOrDomain}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-display text-xl font-bold text-foreground sm:text-2xl transition-colors group-hover:text-emerald-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Architectural Highlights */}
        <div className="mt-5 space-y-2">
          {project.highlights.map((item) => (
            <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Tags & CTA */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-400 transition-colors group-hover:border-emerald-500/20 group-hover:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300 group/link"
          >
            <span>Live Platform</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-zinc-500">Verified Architecture</span>
        )}
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 w-full py-28 border-t border-border/40">
      <div className="max-w-3xl">
        <SectionLabel index="04" label="Selected Work" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
            Evidence of disciplined{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              execution and architecture.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A representative selection of platforms and software architectures delivered across the 6th Civilians ecosystem.
          </p>
        </Reveal>
      </div>

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.id} delay={idx * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  )
}
