'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { processSteps } from '@/data/content'
import { EASE, Reveal, useIsReducedMotion } from '@/components/motion'
import { CheckCircle2, FileCode, Layers, Shield, Server, RefreshCw } from 'lucide-react'

const stageDeliverables: Record<string, { deliverables: string[]; criteria: string; icon: any }> = {
  '01': {
    icon: FileCode,
    deliverables: [
      'Comprehensive Technical Scope & System Boundaries',
      'Architecture Blueprint & Data Schema Design',
      'Security Risk Matrix & Compliance Checklist',
    ],
    criteria: 'Verified architectural consensus and formal technical specification signoff.',
  },
  '02': {
    icon: Layers,
    deliverables: [
      'Interface & Component Design Tokens (Figma/Code)',
      'REST / GraphQL API Contracts & Entity-Relationship Schemas',
      'Interactive High-Fidelity Functional Prototypes',
    ],
    criteria: 'Usability validation and deterministic API contracts established.',
  },
  '03': {
    icon: Shield,
    deliverables: [
      'Type-Safe, Modular Codebase (TypeScript, Next.js, Node/Python)',
      'Automated Test Suites (Unit, Integration, and E2E Tests)',
      'Peer Code Reviews & Static Security Vulnerability Auditing',
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
    <section id="process" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            05 // ENGINEERING LIFECYCLE & DELIVERY MODEL
          </span>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              A structured lifecycle from discovery to continuous scale.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our delivery model reduces uncertainty, enforces architecture discipline, and guarantees reproducible enterprise quality at every milestone.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop Horizontal Presentation */}
      <div className="relative mt-16 hidden lg:block">
        {/* Continuous Horizontal Background Track */}
        <div className="absolute top-6 inset-x-8 h-px bg-border -z-10" />

        {/* Dynamic Progress Line */}
        <motion.div
          className="absolute top-6 left-8 h-px bg-emerald-500 -z-10"
          initial={false}
          animate={{
            width: `${(activeStepIndex / (processSteps.length - 1)) * 88}%`,
          }}
          transition={{ duration: 0.35, ease: EASE }}
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
                {/* Step Node Box */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center border font-mono text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                      : isPassed
                      ? 'border-border bg-card text-foreground'
                      : 'border-border bg-background text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300'
                  }`}
                >
                  {step.step}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 bg-emerald-500" />
                  )}
                </div>

                <h3
                  className={`mt-4 font-display text-base font-bold transition-colors ${
                    isActive ? 'text-foreground' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}
                >
                  {step.title}
                </h3>

                <span className="mt-1 text-[10px] font-mono uppercase tracking-wider text-emerald-500">
                  PHASE {step.step}
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
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="border border-border bg-card p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Meta */}
                <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-border bg-secondary text-emerald-400">
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500">
                        PHASE {currentStep.step} // SPECIFICATION
                      </span>
                      <h4 className="font-display text-2xl font-bold text-foreground">
                        {currentStep.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {currentStep.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {currentStep.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                      GATE CRITERIA & VALIDATION
                    </span>
                    <p className="text-xs text-zinc-300 font-mono">
                      {details.criteria}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-4">
                    TECHNICAL ARTIFACTS & DELIVERABLES
                  </span>
                  <div className="space-y-2.5">
                    {details.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 border border-border bg-secondary/30"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-xs font-medium text-zinc-200 font-sans">{item}</span>
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
      <div className="mt-14 flex flex-col gap-5 lg:hidden">
        {processSteps.map((step) => {
          const info = stageDeliverables[step.step] || stageDeliverables['01']
          return (
            <div
              key={step.step}
              className="border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-border bg-secondary font-mono text-xs font-bold text-emerald-400">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500">
                    {step.tagline}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              <div className="mt-4 pt-3 border-t border-border/60 space-y-2">
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
