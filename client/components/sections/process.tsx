'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { processSteps } from '@/data/content'
import { EASE, Reveal, useIsReducedMotion } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { CheckCircle2, ArrowRight, Layers, FileCode, Shield, Server, RefreshCw } from 'lucide-react'

const stageDeliverables: Record<string, { deliverables: string[]; criteria: string; icon: any }> = {
  '01': {
    icon: FileCode,
    deliverables: [
      'Comprehensive Technical Scope & Boundary Definition',
      'System Architecture Blueprint & Data Schema Design',
      'Security Risk Assessment & Compliance Checklist',
    ],
    criteria: 'Verified architectural consensus and formal technical specification signoff.',
  },
  '02': {
    icon: Layers,
    deliverables: [
      'System Interface & Component Design System (Figma/Tokens)',
      'REST / GraphQL API Contracts & Entity-Relationship Schemas',
      'Interactive High-Fidelity Interactive Prototypes',
    ],
    criteria: 'Usability validation and deterministic API contracts established.',
  },
  '03': {
    icon: Shield,
    deliverables: [
      'Type-Safe, Modular Codebase (TypeScript, Next.js, Node/Go/Python)',
      'Automated Test Suites (Unit, Integration, and E2E Tests)',
      'Immutable Code Reviews & Static Security Vulnerability Auditing',
    ],
    criteria: '100% CI pipeline passing with zero high-severity vulnerabilities.',
  },
  '04': {
    icon: Server,
    deliverables: [
      'Automated Multi-Stage CI/CD Deployment Workflows',
      'Containerized Orchestration (Docker / Kubernetes) with Zero Downtime',
      'Real-Time Observability (Logs, Distributed Tracing, Metrics)',
    ],
    criteria: 'Successful production release with automated health probes and rollback safety.',
  },
  '05': {
    icon: RefreshCw,
    deliverables: [
      'Performance Profiling & Bottleneck Optimization',
      'Horizontal Scaling & Database Sharding / Cache Strategies',
      'Continuous Feature Iteration & Enterprise SLA Governance',
    ],
    criteria: 'Predictable uptime, low latency, and ongoing architectural evolution.',
  },
}

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const reduced = useIsReducedMotion()

  const currentStep = processSteps[activeStepIndex]
  const details = stageDeliverables[currentStep.step] || stageDeliverables['01']
  const StepIcon = details.icon

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 w-full py-28 border-t border-border/40">
      <div className="max-w-3xl">
        <SectionLabel index="05" label="Methodology" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
            A structured lifecycle from discovery to{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              continuous scale.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our delivery model reduces uncertainty, enforces architectural discipline, and guarantees reproducible enterprise quality at every milestone.
          </p>
        </Reveal>
      </div>

      {/* Desktop Horizontal Presentation */}
      <div className="relative mt-20 hidden lg:block">
        {/* Continuous Horizontal Background Track */}
        <div className="absolute top-6 inset-x-8 h-0.5 bg-zinc-800 -z-10" />

        {/* Dynamic Progress Line */}
        <motion.div
          className="absolute top-6 left-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 -z-10"
          initial={false}
          animate={{
            width: `${(activeStepIndex / (processSteps.length - 1)) * 88}%`,
          }}
          transition={{ duration: 0.4, ease: EASE }}
        />

        {/* 5 Horizontal Step Buttons */}
        <div className="grid grid-cols-5 gap-4">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex
            const isPassed = idx < activeStepIndex

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setActiveStepIndex(idx)}
                className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
                aria-label={`Select stage ${step.step}: ${step.title}`}
              >
                {/* Step Node Circle */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border font-mono text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_20px_-3px_rgba(16,185,129,0.5)] scale-110'
                      : isPassed
                      ? 'border-emerald-500/40 bg-zinc-900 text-emerald-400'
                      : 'border-white/10 bg-zinc-950 text-zinc-500 group-hover:border-white/25 group-hover:text-zinc-300'
                  }`}
                >
                  {step.step}
                  {isActive && (
                    <span className="absolute -inset-1 rounded-2xl border border-emerald-400/40 animate-ping pointer-events-none" />
                  )}
                </div>

                <h3
                  className={`mt-4 font-display text-base font-bold transition-colors ${
                    isActive ? 'text-foreground' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}
                >
                  {step.title}
                </h3>

                <span className="mt-1 text-[11px] font-mono uppercase tracking-wider text-emerald-400/80">
                  Phase {step.step}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detailed Active Stage Console Panel */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={reduced ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="rounded-2xl border border-emerald-500/30 bg-zinc-950/80 p-8 backdrop-blur-xl shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Meta */}
                <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                        PHASE {currentStep.step} // LIFECYCLE
                      </span>
                      <h4 className="font-display text-2xl font-bold text-foreground">
                        {currentStep.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-teal-400/90">
                    {currentStep.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {currentStep.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                      GATE CRITERIA
                    </span>
                    <p className="text-xs text-zinc-300 font-mono">
                      {details.criteria}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-4">
                    TECHNICAL DELIVERABLES & ARTIFACTS
                  </span>
                  <div className="space-y-3">
                    {details.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-zinc-900/40"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-xs font-medium text-zinc-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Presentation */}
      <div className="mt-16 flex flex-col gap-6 lg:hidden">
        {processSteps.map((step, idx) => {
          const info = stageDeliverables[step.step] || stageDeliverables['01']
          const IconComponent = info.icon

          return (
            <div
              key={step.step}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-400">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80">
                    {step.tagline}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                {info.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
