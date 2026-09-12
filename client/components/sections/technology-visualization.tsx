'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { Lightbulb, Network, Sparkles, AppWindow, TrendingUp, ChevronRight } from 'lucide-react'

interface Stage {
  id: string
  step: string
  label: string
  title: string
  tagline: string
  description: string
  focus: string
  deliverable: string
  icon: any
}

const stages: Stage[] = [
  {
    id: 'idea',
    step: '01',
    label: 'IDEA',
    title: 'Conceptual Synthesis & Domain Framing',
    tagline: 'Translating business vision into technical boundary conditions.',
    description:
      'We deconstruct complex organizational objectives into first-principles engineering challenges, clarifying technical constraints, user needs, and architectural feasibility before committing code.',
    focus: 'Problem definition, data boundaries, and technical feasibility.',
    deliverable: 'Verified Technical Blueprint & Architectural Consensus',
    icon: Lightbulb,
  },
  {
    id: 'system',
    step: '02',
    label: 'SYSTEM',
    title: 'Deterministic Architectural Scaffolding',
    tagline: 'Structuring modular boundaries, type-safety, and concurrent data models.',
    description:
      'We architect the foundational system topology: resilient schemas, event-driven service boundaries, and deterministic contracts that eliminate race conditions and sustain long-term operational resilience.',
    focus: 'Distributed data integrity, microservice boundaries, and type safety.',
    deliverable: 'Scalable System Architecture & API Contracts',
    icon: Network,
  },
  {
    id: 'intelligence',
    step: '03',
    label: 'INTELLIGENCE',
    title: 'Applied Machine Learning & Automation',
    tagline: 'Injecting contextual models, semantic retrieval, and algorithmic workflows.',
    description:
      'Rather than superficial generative gimmicks, we deploy applied machine intelligence directly into workflow friction points—enabling contextual document analysis, semantic routing, and predictive optimization.',
    focus: 'Contextual retrieval, domain-adapted models, and automated triage.',
    deliverable: 'Integrated Applied ML & Workflow Automation Engines',
    icon: Sparkles,
  },
  {
    id: 'product',
    step: '04',
    label: 'PRODUCT',
    title: 'Production-Grade Ergonomics & High Performance',
    tagline: 'Engineering cohesive, accessible touchpoints that users trust daily.',
    description:
      'We craft high-performance web and mobile interfaces powered by systematic design tokens, sub-second edge interactions, and accessible UX patterns that eliminate user friction.',
    focus: 'Sub-second interaction speed, design systems, and responsive layout.',
    deliverable: 'Multi-Platform Digital Products & Web Portals',
    icon: AppWindow,
  },
  {
    id: 'impact',
    step: '05',
    label: 'IMPACT',
    title: 'Organizational Durability & Continuous Scale',
    tagline: 'Deploying mission-critical software that drives tangible enterprise velocity.',
    description:
      'Our systems enter production with zero-downtime deployment pipelines, comprehensive telemetry instrumentation, and maintainable codebases engineered to endure team succession and business growth.',
    focus: 'Operational uptime, business efficiency, and sustainable scale.',
    deliverable: 'Enduring Enterprise Asset & Operational Resilience',
    icon: TrendingUp,
  },
]

function TransformationMetaphor({ activeStageId }: { activeStageId: string }) {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] border border-border bg-zinc-950/80 p-6 flex flex-col justify-between overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 arch-grid opacity-25 pointer-events-none" />

      {/* Top Console Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-zinc-200">METAMORPHOSIS // STAGE_{activeStageId.toUpperCase()}</span>
        </span>
        <span className="text-zinc-500">CONCEPTUAL VISUAL STORYTELLING</span>
      </div>

      {/* Central Visual Metaphor Stage */}
      <div className="relative my-auto flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {activeStageId === 'idea' && (
            <motion.div
              key="idea"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center justify-center"
            >
              <svg className="h-44 w-44 sm:h-52 sm:w-52 text-emerald-500/80" viewBox="0 0 200 200">
                {/* Concentric expanding ripples from an idea point */}
                <circle cx="100" cy="100" r="15" fill="rgba(16,185,129,0.12)" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeDasharray="4 4" />
                {/* Focal core */}
                <circle cx="100" cy="100" r="5" fill="#10B981" />
              </svg>
              <span className="mt-2 font-mono text-xs text-zinc-400">STAGE 01 // THE SEED CONCEPT</span>
            </motion.div>
          )}

          {activeStageId === 'system' && (
            <motion.div
              key="system"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center justify-center"
            >
              <svg className="h-44 w-44 sm:h-52 sm:w-52 text-zinc-400" viewBox="0 0 200 200">
                {/* Isometric Structural Lattice */}
                <polygon points="100,30 160,65 100,100 40,65" fill="rgba(255,255,255,0.02)" stroke="#A1A1AA" strokeWidth="1" />
                <polygon points="40,65 100,100 100,165 40,130" fill="rgba(255,255,255,0.04)" stroke="#A1A1AA" strokeWidth="1" />
                <polygon points="100,100 160,65 160,130 100,165" fill="rgba(16,185,129,0.06)" stroke="#10B981" strokeWidth="1.2" />
                {/* Internal partition lines */}
                <line x1="100" y1="30" x2="100" y2="165" stroke="rgba(16,185,129,0.5)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="40" y1="65" x2="160" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
              </svg>
              <span className="mt-2 font-mono text-xs text-zinc-400">STAGE 02 // ARCHITECTURAL STRUCTURE</span>
            </motion.div>
          )}

          {activeStageId === 'intelligence' && (
            <motion.div
              key="intelligence"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center justify-center"
            >
              <svg className="h-44 w-44 sm:h-52 sm:w-52 text-emerald-500" viewBox="0 0 200 200">
                {/* Multi-node neural synthesis network */}
                <circle cx="50" cy="60" r="8" fill="none" stroke="#71717A" strokeWidth="1" />
                <circle cx="50" cy="140" r="8" fill="none" stroke="#71717A" strokeWidth="1" />
                <circle cx="100" cy="100" r="14" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="150" cy="60" r="8" fill="none" stroke="#71717A" strokeWidth="1" />
                <circle cx="150" cy="140" r="8" fill="none" stroke="#71717A" strokeWidth="1" />

                {/* Connecting synthesis rays */}
                <line x1="58" y1="60" x2="88" y2="92" stroke="#10B981" strokeWidth="1.2" />
                <line x1="58" y1="140" x2="88" y2="108" stroke="#10B981" strokeWidth="1.2" />
                <line x1="112" y1="92" x2="142" y2="60" stroke="#10B981" strokeWidth="1.2" />
                <line x1="112" y1="108" x2="142" y2="140" stroke="#10B981" strokeWidth="1.2" />

                <circle cx="100" cy="100" r="5" fill="#10B981" />
              </svg>
              <span className="mt-2 font-mono text-xs text-zinc-400">STAGE 03 // APPLIED INTELLIGENCE</span>
            </motion.div>
          )}

          {activeStageId === 'product' && (
            <motion.div
              key="product"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center justify-center"
            >
              <svg className="h-44 w-44 sm:h-52 sm:w-52 text-zinc-300" viewBox="0 0 200 200">
                {/* Modern Window Shell */}
                <rect x="30" y="40" width="140" height="110" rx="4" fill="rgba(255,255,255,0.02)" stroke="#A1A1AA" strokeWidth="1.2" />
                <line x1="30" y1="60" x2="170" y2="60" stroke="#52525B" strokeWidth="0.8" />
                <circle cx="45" cy="50" r="2.5" fill="#71717A" />
                <circle cx="53" cy="50" r="2.5" fill="#71717A" />
                <circle cx="61" cy="50" r="2.5" fill="#71717A" />

                {/* Internal Layout Cards */}
                <rect x="45" y="72" width="40" height="65" rx="2" fill="rgba(255,255,255,0.04)" stroke="#52525B" strokeWidth="0.8" />
                <rect x="95" y="72" width="60" height="30" rx="2" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1" />
                <rect x="95" y="110" width="60" height="27" rx="2" fill="rgba(255,255,255,0.03)" stroke="#52525B" strokeWidth="0.8" />
              </svg>
              <span className="mt-2 font-mono text-xs text-zinc-400">STAGE 04 // POLISHED DIGITAL PRODUCT</span>
            </motion.div>
          )}

          {activeStageId === 'impact' && (
            <motion.div
              key="impact"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center justify-center"
            >
              <svg className="h-44 w-44 sm:h-52 sm:w-52 text-emerald-400" viewBox="0 0 200 200">
                {/* Outward Radiating Harmonic Hexagon Wave */}
                <polygon points="100,45 150,70 150,130 100,155 50,130 50,70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" strokeDasharray="3 3" />
                <polygon points="100,30 165,65 165,135 100,170 35,135 35,65" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <polygon points="100,15 180,60 180,140 100,185 20,140 20,60" fill="rgba(16,185,129,0.05)" stroke="#10B981" strokeWidth="1.4" />

                <circle cx="100" cy="100" r="8" fill="#10B981" />
              </svg>
              <span className="mt-2 font-mono text-xs text-zinc-400">STAGE 05 // SUSTAINED ENTERPRISE VALUE</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
        <span>VALUE CHAIN // CONTINUOUS TRANSFORMATION</span>
        <span className="text-zinc-300">6TH CIVILIANS METHODOLOGY</span>
      </div>
    </div>
  )
}

export function TechnologyVisualization() {
  const [activeStageId, setActiveStageId] = useState<string>('idea')
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0]

  return (
    <section id="technology-model" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            03 // CONCEPTUAL TRANSFORMATION MODEL
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            From abstract concepts to engineered organizational reality.
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every software breakthrough begins as an undefined challenge. We guide ideas through disciplined structural modeling, applied intelligence, and refined production deployment.
          </p>
        </div>
      </div>

      {/* Interactive Metaphor Scrubber Bar */}
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-card/50">
        {stages.map((stage) => {
          const isActive = stage.id === activeStageId
          const Icon = stage.icon
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-4 sm:p-5 flex flex-col items-start text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-emerald-500/10 text-foreground'
                  : 'text-muted-foreground hover:bg-card hover:text-foreground'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span className={`font-mono text-xs font-bold ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`}>
                  {stage.step}
                </span>
                <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`} />
              </div>
              <span className={`font-display text-sm sm:text-base font-bold tracking-tight ${isActive ? 'text-foreground' : 'text-zinc-300'}`}>
                {stage.label}
              </span>
              <span className="mt-1 text-[10px] text-zinc-500 hidden sm:block truncate w-full">
                {stage.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Main Dual Stage Showcase */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Conceptual Transformation Metaphor Visual (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <TransformationMetaphor activeStageId={activeStage.id} />
        </div>

        {/* Right Column: Stage Editorial Specification Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-border bg-card p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
              <span className="font-mono text-xs font-bold text-emerald-500 uppercase">
                PHASE {activeStage.step} // {activeStage.label}
              </span>
              <span className="font-mono text-[10px] text-zinc-500">ENGINEERING LIFECYCLE</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground">
              {activeStage.title}
            </h3>

            <p className="mt-2 text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              {activeStage.tagline}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-sans">
              {activeStage.description}
            </p>

            <div className="mt-6 pt-5 border-t border-border space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  ENGINEERING FOCUS
                </span>
                <span className="text-xs text-zinc-200 font-mono">
                  {activeStage.focus}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  VERIFIED DELIVERABLE
                </span>
                <span className="text-xs text-emerald-400 font-mono">
                  {activeStage.deliverable}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>DISCIPLINED EXECUTION</span>
            <span className="text-zinc-400">STAGE {activeStage.step} OF 05</span>
          </div>
        </div>
      </div>
    </section>
  )
}
