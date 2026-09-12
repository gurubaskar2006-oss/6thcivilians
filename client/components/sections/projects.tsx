'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type Project } from '@/data/content'
import { ArrowUpRight, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

function ProjectVisualFrame({ project }: { project: Project }) {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full aspect-[16/9] border border-border bg-zinc-950 overflow-hidden flex flex-col justify-between p-5">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5 text-zinc-200 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          CASE_STUDY // {project.id.toUpperCase()}
        </span>
        <span className="text-zinc-500 uppercase">{project.category}</span>
      </div>

      {/* Central Visual Presentation */}
      <div className="relative my-auto flex items-center justify-center w-full h-full">
        {project.id === 'pr-gambit-platform' && (
          <motion.div
            initial={reduced ? false : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="h-12 w-12 rounded-full border border-emerald-500/60 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 font-display font-bold text-lg">
              TG
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Team Gambit Communications
            </span>
            <span className="font-mono text-xs text-zinc-400 mt-1">
              EDGE-RENDERED CORPORATE PORTAL
            </span>
          </motion.div>
        )}

        {project.id === 'telemetry-dashboard' && (
          <motion.div
            initial={reduced ? false : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex flex-col items-center text-center p-4"
          >
            <svg className="h-20 w-48 text-emerald-400" viewBox="0 0 200 80">
              <path
                d="M 10,40 Q 50,15 90,45 T 170,35"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="40" r="3" fill="#71717A" />
              <circle cx="90" cy="45" r="4" fill="#10B981" />
              <circle cx="170" cy="35" r="3" fill="#71717A" />
            </svg>
            <span className="font-display text-lg font-bold text-foreground mt-1">
              Connected Device Fleet
            </span>
            <span className="font-mono text-xs text-zinc-400 mt-0.5">
              STREAMING SENSOR INGEST & MONITORING
            </span>
          </motion.div>
        )}

        {project.id === 'conversational-automation' && (
          <motion.div
            initial={reduced ? false : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="border border-border bg-secondary/60 px-3 py-1 text-xs font-mono text-zinc-300">
                INQUIRY INGEST
              </div>
              <ChevronRight className="h-4 w-4 text-emerald-400" />
              <div className="border border-emerald-500 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300 font-semibold">
                NLP ROUTING
              </div>
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Intelligent Workflow Engine
            </span>
            <span className="font-mono text-xs text-zinc-400 mt-0.5">
              CONTEXT-AWARE ENTERPRISE TRIAGE
            </span>
          </motion.div>
        )}

        {project.id === 'saas-core-platform' && (
          <motion.div
            initial={reduced ? false : { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.04 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="flex flex-col items-center text-center p-4"
          >
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-mono text-zinc-300">
                TENANT A
              </div>
              <div className="border border-emerald-500/60 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-mono text-emerald-300">
                CORE ROUTER
              </div>
              <div className="border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-mono text-zinc-300">
                TENANT B
              </div>
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Multi-Tenant Foundation Core
            </span>
            <span className="font-mono text-xs text-zinc-400 mt-0.5">
              ISOLATED WORKSPACE ARCHITECTURE
            </span>
          </motion.div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
        <span>VERIFIED_SYSTEM</span>
        <span className="text-zinc-300">{project.clientOrDomain}</span>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id)
  const reduced = useIsReducedMotion()

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0]

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            05 // INTERACTIVE CASE-STUDY SHOWCASE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Evidence of disciplined execution and enterprise architecture.
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            A curated monograph of software systems, distributed pipelines, and platforms delivered across the 6th Civilians ecosystem. Select any project to inspect verified deliverables.
          </p>
        </div>
      </div>

      {/* Interactive Case-Study Explorer Layout */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Project Directory List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
              PROJECT DOSSIER
            </span>
            <span className="text-[10px] font-mono text-emerald-500 font-semibold">4 VERIFIED SYSTEMS</span>
          </div>

          <div className="flex flex-col gap-2">
            {projects.map((p, idx) => {
              const isActive = p.id === activeProjectId
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProjectId(p.id)}
                  onMouseEnter={() => setActiveProjectId(p.id)}
                  className={`group relative flex flex-col p-5 border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-emerald-500 bg-emerald-500/10 text-foreground'
                      : 'border-border bg-card/40 text-muted-foreground hover:border-zinc-500 hover:bg-card hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? 'text-emerald-400' : 'text-zinc-500'
                      }`}
                    >
                      0{idx + 1} // {p.category}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        isActive ? 'text-emerald-400 translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </div>

                  <h3
                    className={`mt-2 font-display text-base sm:text-lg font-bold transition-all ${
                      isActive ? 'text-foreground translate-x-1' : 'text-zinc-300'
                    }`}
                  >
                    {p.title}
                  </h3>

                  <span className="mt-1 text-xs text-zinc-500 font-mono">
                    {p.clientOrDomain}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="project-active-rail"
                      className="absolute -left-px top-0 bottom-0 w-1 bg-emerald-500"
                      transition={{ duration: 0.2, ease: EASE }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Large Active Case Study Preview Monograph (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="border border-border bg-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Active Directional Clip-Mask Preview */}
                <div className="mb-6">
                  <ProjectVisualFrame project={activeProject} />
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-500 uppercase">
                    {activeProject.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {activeProject.clientOrDomain}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {activeProject.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">
                  {activeProject.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    VERIFIED ENGINEERING DELIVERABLES
                  </span>
                  {activeProject.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="mt-6 pt-6 border-t border-border/60 flex flex-wrap gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-secondary/50 px-2.5 py-1 text-xs font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">
                  STATUS: VERIFIED IN PRODUCTION
                </span>

                {activeProject.url ? (
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:border-zinc-400 transition-colors"
                  >
                    <span>Launch Portal</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-emerald-500">
                    CORE SYSTEM ARCHITECTURE
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
