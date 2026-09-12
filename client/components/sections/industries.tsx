'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { industries } from '@/data/content'
import { ChevronRight, ArrowRight, Building2, Layers, GraduationCap, Stethoscope, Radio, Cpu } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

export function Industries() {
  const [activeDomainId, setActiveDomainId] = useState<string>(industries[0].id)
  const reduced = useIsReducedMotion()

  const activeDomain = industries.find((i) => i.id === activeDomainId) || industries[0]
  const Icon = activeDomain.icon

  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            SECTOR EXPLORER & INDUSTRY DOMAINS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Purpose-built technology applied across industry verticals.
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Explore how our engineering capabilities translate into specific operational environments, data requirements, and domain workflows.
          </p>
        </div>
      </div>

      {/* Interactive Industry Explorer Layout */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Domain Navigation List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 font-mono">
              INDUSTRY DOMAIN DIRECTORY
            </span>
            <span className="text-[10px] font-mono text-emerald-500 font-semibold">6 ACTIVE SECTORS</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {industries.map((ind, idx) => {
              const isActive = ind.id === activeDomainId
              const IndIcon = ind.icon
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveDomainId(ind.id)}
                  onMouseEnter={() => setActiveDomainId(ind.id)}
                  className={`group relative flex items-center justify-between p-4 border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-emerald-500 bg-emerald-500/10 text-foreground'
                      : 'border-border bg-card/40 text-muted-foreground hover:border-zinc-500 hover:bg-card hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <IndIcon className={`h-4 w-4 transition-colors ${isActive ? 'text-emerald-400' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
                    <span className="font-display text-sm font-semibold">
                      {ind.title}
                    </span>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isActive ? 'text-emerald-400 translate-x-1' : 'text-zinc-600'
                    }`}
                  />

                  {isActive && (
                    <motion.div
                      layoutId="domain-active-bar"
                      className="absolute -left-px top-0 bottom-0 w-1 bg-emerald-500"
                      transition={{ duration: 0.2, ease: EASE }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Active Domain Presentation (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="border border-border bg-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-xs font-bold text-zinc-300 uppercase">
                      INDUSTRY SPECIFICATION // {activeDomain.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">ENTERPRISE PRACTICE</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {activeDomain.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">
                  {activeDomain.description}
                </p>

                {/* Practical Applications & Deliverables */}
                <div className="mt-8 pt-6 border-t border-border">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                    CORE SOFTWARE CAPABILITIES DELIVERED
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeDomain.applications.map((app) => (
                      <div
                        key={app}
                        className="p-3 border border-border bg-secondary/30 flex items-center justify-between text-xs text-zinc-200"
                      >
                        <span className="font-medium">{app}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>SECTOR READINESS: ACTIVE</span>
                <a
                  href="#contact"
                  className="text-foreground hover:text-emerald-400 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Request Sector Briefing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
