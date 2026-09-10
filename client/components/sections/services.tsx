'use client'

import { capabilityGroups, type CapabilityGroup, type CapabilityItem } from '@/data/content'
import { Reveal, StaggerGroup, useTiltInteraction } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { motion } from 'framer-motion'

function CapabilityCard({ item }: { item: CapabilityItem }) {
  const { ref, onMove, reset, style } = useTiltInteraction()
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={style}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/70"
    >
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/30 text-emerald-400 transition-all duration-300 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10">
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
        </div>
        <h4 className="mt-4 font-display text-base font-semibold text-foreground">
          {item.title}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

function CapabilityGroupBlock({ group }: { group: CapabilityGroup }) {
  return (
    <div className="flex flex-col border-t border-white/5 pt-12 first:border-none first:pt-0">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase">
            {group.number}
          </span>
          <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {group.category}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground sm:text-sm max-w-md">
          {group.tagline}
        </p>
      </div>

      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {group.items.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.05}>
            <CapabilityCard item={item} />
          </Reveal>
        ))}
      </StaggerGroup>
    </div>
  )
}

export function Services() {
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
            Our software engineering practice spans the entire application lifecycle — from custom operational systems and applied machine learning to scalable cloud topologies and technology consulting.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-16">
        {capabilityGroups.map((group) => (
          <CapabilityGroupBlock key={group.id} group={group} />
        ))}
      </div>
    </section>
  )
}
