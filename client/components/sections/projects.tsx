'use client'

import { projects, type Project } from '@/data/content'
import { Reveal, StaggerGroup } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-zinc-950/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/50">
      <div>
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
            {project.category}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {project.clientOrDomain}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-xl font-bold text-foreground sm:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-6 space-y-2">
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
              className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:text-emerald-300 group/link"
          >
            <span>Live Platform</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        )}
      </div>
    </div>
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
