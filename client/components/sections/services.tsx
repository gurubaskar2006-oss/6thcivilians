'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { capabilityGroups, type CapabilityGroup, type CapabilityItem } from '@/data/content'
import { EASE, Reveal, useIsReducedMotion } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
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
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: EASE }}
      className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/70"
    >
      <div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-secondary/30 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h4 className="mt-3.5 font-display text-sm font-semibold text-foreground">
          {item.title}
        </h4>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/80 group-hover:text-emerald-300">
        <span>Production-Ready Delivery</span>
        <CheckCircle2 className="h-3.5 w-3.5 ml-auto text-emerald-400/70" />
      </div>
    </motion.div>
  )
}

export function Services() {
  const [activeId, setActiveId] = useState<string>(capabilityGroups[0].id)
  const reduced = useIsReducedMotion()

  const activeGroup = capabilityGroups.find((g) => g.id === activeId) || capabilityGroups[0]

  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 w-full py-28 border-t border-border/40">
      <div className="max-w-3xl">
        <SectionLabel index="02" label="Capabilities" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
            Disciplined technology capabilities{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              engineered for scale.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our software engineering practice spans the entire application lifecycle — from custom operational systems and applied machine learning to scalable cloud topologies and enterprise technology consulting.
          </p>
        </Reveal>
      </div>

      {/* Main Interactive Services Console Layout */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Vertical Category Selector (Desktop & Tablet) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 font-mono">
              CAPABILITY DIRECTORY
            </span>
            <span className="text-[10px] font-mono text-emerald-400/80">05 CORE DOMAINS</span>
          </div>

          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {capabilityGroups.map((group) => {
              const isActive = group.id === activeId
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveId(group.id)}
                  className={`group relative flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 min-w-[240px] lg:min-w-0 ${
                    isActive
                      ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_25px_-5px_rgba(16,185,129,0.2)]'
                      : 'border-white/5 bg-zinc-900/30 hover:border-white/10 hover:bg-zinc-900/50'
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
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                    ) : (
                      <ChevronRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-400" />
                    )}
                  </div>

                  {/* Active highlight bar on left (desktop) */}
                  {isActive && (
                    <motion.div
                      layoutId="active-capability-marker"
                      className="absolute -left-px top-2 bottom-2 w-1 rounded-r bg-emerald-400 hidden lg:block"
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="mt-4 p-4 rounded-xl border border-white/5 bg-zinc-950/40 text-xs text-muted-foreground hidden lg:block">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1 font-mono">
              Enterprise Governance
            </span>
            All practices adhere to verified corporate ISO-compliant engineering standards, OWASP top 10 security, and automated continuous delivery.
          </div>
        </div>

        {/* Right Column: Interactive Console Stage */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={reduced ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-zinc-950/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl"
            >
              {/* Category Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      SYSTEM CAPABILITY // {activeGroup.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">ENTERPRISE-GRADE</span>
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
                  className="inline-flex items-center gap-2 self-start md:self-auto rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Dynamic Technical Schematic Visual */}
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase">
                  <span>ARCHITECTURE & TOPOLOGY BLUEPRINT</span>
                  <span className="text-emerald-400/80">SIMULATION: LIVE</span>
                </div>
                {renderSchematic(activeGroup.id)}
              </div>

              {/* Sub-capabilities Grid (Progressive Disclosure) */}
              <div>
                <div className="mb-3 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase">
                  <span>CORE CAPABILITY MODULES</span>
                  <span>05 PRODUCTION ENGINES</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
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
