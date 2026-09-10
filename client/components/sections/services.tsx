'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { capabilityGroups, type CapabilityGroup, type CapabilityItem } from '@/data/content'
import { EASE, Reveal, useIsReducedMotion } from '@/components/motion'
import {
  SoftwareEngineeringSchematic,
  AISchematic,
  DigitalProductsSchematic,
  CloudInfrastructureSchematic,
  ConsultingSchematic,
} from '@/components/service-schematics'
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react'

function renderSchematic(id: string) {
  switch (id) {
    case 'software-engineering':
      return <SoftwareEngineeringSchematic />
    case 'ai-intelligent-systems':
      return <AISchematic />
    case 'digital-products':
      return <DigitalProductsSchematic />
    case 'cloud-infrastructure':
      return <CloudInfrastructureSchematic />
    case 'technology-consulting':
      return <ConsultingSchematic />
    default:
      return <SoftwareEngineeringSchematic />
  }
}

function SubCapabilityCard({ item, index }: { item: CapabilityItem; index: number }) {
  const Icon = item.icon
  const reduced = useIsReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: EASE }}
      className="group relative flex flex-col justify-between border border-border bg-card p-5 transition-colors duration-200 hover:border-zinc-500 hover:bg-secondary/40"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center border border-border bg-secondary text-zinc-300 transition-colors group-hover:text-emerald-400">
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </div>
          <span className="font-mono text-[10px] text-zinc-500">SPEC_0{index + 1}</span>
        </div>

        <h4 className="mt-4 font-display text-sm font-bold text-foreground">
          {item.title}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-zinc-500">
        <span>DELIVERY_STANDARD</span>
        <span className="text-emerald-500 font-medium">PRODUCTION-READY</span>
      </div>
    </motion.div>
  )
}

export function Services() {
  const [activeId, setActiveId] = useState<string>(capabilityGroups[0].id)
  const reduced = useIsReducedMotion()

  const activeGroup = capabilityGroups.find((g) => g.id === activeId) || capabilityGroups[0]

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            02 // TECHNICAL CAPABILITIES DIRECTORY
          </span>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Disciplined engineering capabilities structured for enterprise scale.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              From custom transactional architectures and operational machine intelligence to high-concurrency cloud topologies, our five core practices operate with verified engineering rigor.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main Interactive Services Console Layout */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Vertical Category Selector */}
        <div className="lg:col-span-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
              CORE DOMAINS
            </span>
            <span className="text-[10px] font-mono text-emerald-500 font-semibold">5 ACTIVE PRACTICES</span>
          </div>

          <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {capabilityGroups.map((group) => {
              const isActive = group.id === activeId
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveId(group.id)}
                  className={`group relative flex items-center justify-between p-4 border text-left transition-all duration-200 min-w-[240px] lg:min-w-0 ${
                    isActive
                      ? 'border-emerald-500 bg-emerald-500/10 text-foreground'
                      : 'border-border bg-card/40 text-muted-foreground hover:border-zinc-600 hover:bg-card hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold tracking-widest transition-colors ${
                        isActive ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      {group.number}
                    </span>
                    <span
                      className={`font-display text-sm font-semibold transition-colors ${
                        isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {group.category}
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center">
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-400" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-4 p-4 border border-border bg-secondary/30 text-xs text-muted-foreground hidden lg:block font-mono">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              ARCHITECTURAL COMPLIANCE
            </span>
            All practices adhere to verified corporate ISO-compliant engineering standards, OWASP Top 10 security, and automated CI/CD validation.
          </div>
        </div>

        {/* Right Column: Technical Console Stage */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="flex flex-col gap-6 border border-border bg-card p-6 md:p-8"
            >
              {/* Category Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest">
                      SYSTEM CAPABILITY // {activeGroup.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-emerald-500/60" />
                    <span className="text-[11px] font-mono text-zinc-400 uppercase">ENTERPRISE PRACTICE</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-foreground">
                    {activeGroup.category}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl">
                    {activeGroup.tagline}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 self-start md:self-auto border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-zinc-500 hover:bg-secondary"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Dynamic Technical Schematic Visual */}
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase">
                  <span>ARCHITECTURE & TOPOLOGY SPECIFICATION</span>
                  <span className="text-emerald-400">TELEMETRY: LIVE</span>
                </div>
                {renderSchematic(activeGroup.id)}
              </div>

              {/* Sub-capabilities Grid */}
              <div>
                <div className="mb-3 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase">
                  <span>CAPABILITY MODULE SPECIFICATIONS</span>
                  <span>5 PRODUCTION ENGINES</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeGroup.items.map((item, idx) => (
                    <SubCapabilityCard key={item.title} item={item} index={idx} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
