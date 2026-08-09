'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { serviceClusters, clusterFrameRanges, type ServiceCluster, type ServiceItem } from '@/data/content'
import { Reveal, StaggerGroup, useTiltInteraction } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'

function ServiceCard({ item }: { item: ServiceItem }) {
  const { ref, onMove, reset, style } = useTiltInteraction()

  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={style}
      className="quantum-border grain glass-panel group relative h-full overflow-hidden rounded-2xl p-6"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle, rgba(0, 212, 255,0.1), transparent 70%)' }}
      />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-quantum transition-all duration-500 group-hover:border-quantum/50 group-hover:bg-quantum/5 group-hover:shadow-[0_0_10px_-3px_rgba(0,212,255,0.15)]">
        <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110" strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-display text-base font-semibold metallic-heading">{item.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
    </motion.div>
  )
}

function ClusterBlock({
  cluster,
  range,
  index,
}: {
  cluster: ServiceCluster
  range: { from: number; to: number }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  return (
    <Reveal>
      <div
        ref={ref}
        id={`services-${cluster.id}`}
        className={cn(
          'relative py-10 transition-opacity duration-500 min-h-[80vh] flex flex-col justify-center',
          index > 0 && 'border-t border-white/5'
        )}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">

          <h3 className="font-display text-xl font-bold metallic-heading sm:text-2xl">{cluster.category}</h3>
          <span className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
        </div>

        <StaggerGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cluster.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx + 1}>
              <ServiceCard item={item} />
            </Reveal>
          ))}
        </StaggerGroup>
      </div>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services-panel" className="relative mx-auto max-w-7xl px-6 w-full py-24">
      <div className="max-w-2xl">
        <SectionLabel index="03" label="Capabilities" />
        <Reveal>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance metallic-heading sm:text-4xl md:text-5xl">
            One studio, the full technology stack.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            From pixels to firmware to quantum-inspired research — 25+ services grouped into four
            disciplines, delivered by one aligned team.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-col gap-[40vh]">
        {serviceClusters.map((cluster, i) => (
          <ClusterBlock key={cluster.id} cluster={cluster} range={clusterFrameRanges[i] ?? { from: 500, to: 888 }} index={i} />
        ))}
      </div>
    </section>
  )
}
