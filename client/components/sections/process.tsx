'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { processSteps } from '@/data/content'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { CheckCircle2, FileText, Layout, Code2, Rocket, RefreshCw } from 'lucide-react'

const stageDeliverables: Record<string, { deliverables: string[]; criteria: string; icon: any }> = {
  '01': {
    icon: FileText,
    deliverables: [
      'Comprehensive Technical Scope & Boundary Definition',
      'System Architecture Blueprint & Data Schema Design',
      'Security & Integration Feasibility Assessment',
    ],
    criteria: 'Verified architectural consensus and formal technical specification signoff.',
  },
  '02': {
    icon: Layout,
    deliverables: [
      'Interactive High-Fidelity Functional Prototypes',
      'Design Token Specifications & Component Systems',
      'REST & GraphQL API Contracts & Entity Schemas',
    ],
    criteria: 'Deterministic API contracts and usability validation completed.',
  },
  '03': {
    icon: Code2,
    deliverables: [
      'Type-Safe Modular Codebase & Backend Architecture',
      'Automated Test Suites (Unit & Integration Coverage)',
      'Peer Review & Static Code Quality Auditing',
    ],
    criteria: 'Automated CI verification passing with verified test coverage.',
  },
  '04': {
    icon: Rocket,
    deliverables: [
      'Automated Multi-Stage Deployment Pipelines',
      'Cloud Environment Configuration & Rollback Safeguards',
      'System Health Instrumentation & Performance Checks',
    ],
    criteria: 'Smooth production rollout with automated health probes.',
  },
  '05': {
    icon: RefreshCw,
    deliverables: [
      'Continuous Performance Profiling & Optimization',
      'Elastic Scaling & Database Indexing Strategies',
      'Ongoing Architectural Advisory & Feature Expansion',
    ],
    criteria: 'Predictable uptime, low latency, and ongoing architectural evolution.',
  },
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const reduced = useIsReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 60%'],
  })

  // Synchronize scroll position with active step if user is scrolling through
  useEffect(() => {
    if (reduced) return
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const stepIndex = Math.min(
        processSteps.length - 1,
        Math.max(0, Math.floor(v * processSteps.length))
      )
      setActiveStepIndex(stepIndex)
    })
    return () => unsubscribe()
  }, [scrollYProgress, reduced])

  const currentStep = processSteps[activeStepIndex]
  const details = stageDeliverables[currentStep.step] || stageDeliverables['01']
  const StepIcon = details.icon

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            STRUCTURED DELIVERY LIFECYCLE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            A structured lifecycle from discovery to continuous scale.
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our delivery model reduces uncertainty, enforces architectural discipline, and guarantees reproducible quality across every milestone.
          </p>
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

        {/* 5 Horizontal Step Nodes */}
        <div className="grid grid-cols-5 gap-4">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex
            const isPassed = idx < activeStepIndex
            const NodeIcon = step.icon

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setActiveStepIndex(idx)}
                className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
                aria-label={`Select stage: ${step.title}`}
              >
                {/* Step Node Box */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center border transition-all duration-200 ${
                    isActive
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                      : isPassed
                      ? 'border-border bg-card text-foreground'
                      : 'border-border bg-background text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300'
                  }`}
                >
                  <NodeIcon className="h-5 w-5" />
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
              </button>
            )
          })}
        </div>

        {/* Detailed Active Stage Console Panel */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -10 }}
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
                        STAGE SPECIFICATION
                      </span>
                      <h4 className="font-display text-2xl font-bold text-foreground">
                        {currentStep.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {currentStep.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">
                    {currentStep.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border/60">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                      MILESTONE GATE CRITERIA
                    </span>
                    <p className="text-xs text-zinc-300 font-mono">
                      {details.criteria}
                    </p>
                  </div>
                </div>

                {/* Right Deliverables */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-4">
                    KEY MILESTONE DELIVERABLES
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

      {/* Mobile Vertical Presentation */}
      <div className="mt-14 flex flex-col gap-5 lg:hidden">
        {processSteps.map((step) => {
          const info = stageDeliverables[step.step] || stageDeliverables['01']
          const MobileIcon = step.icon
          return (
            <div key={step.step} className="border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border border-border bg-secondary text-emerald-400">
                  <MobileIcon className="h-4 w-4" />
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

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground font-sans">
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
