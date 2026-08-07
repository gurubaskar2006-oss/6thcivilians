'use client'

import { founders, type Founder } from '@/data/content'
import { LinkedInIcon } from '@/components/social-icons'
import { Globe } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem, useIsReducedMotion, useTiltInteraction } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { motion } from 'framer-motion'

function FounderCard({ f, index }: { f: Founder; index: number }) {
  const reduced = useIsReducedMotion()
  const { ref, onMove, reset, style } = useTiltInteraction()
  const num = (index + 1).toString().padStart(2, '0')

  return (
    <Reveal delay={index + 1} style={{ perspective: 800 }}>
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={style}
        className="quantum-border grain glass-panel group relative h-full flex flex-col overflow-hidden rounded-2xl p-4"
      >
        {/* Glow blob matching ServiceCard */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255,0.1), transparent 70%)' }}
        />

        {/* Index */}
        <span className="inline-block font-display text-sm font-semibold tracking-brand text-metal transition-all duration-500 origin-left group-hover:scale-110 group-hover:text-quantum">
          {num}
        </span>

        {/* Name with underline reveal */}
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight metallic-heading">
          <span className="relative inline-block">
            {f.name}
            {!reduced && (
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-quantum transition-transform duration-500 group-hover:scale-x-100" />
            )}
          </span>
        </h3>

        {/* Role */}
        <p className="mt-1.5 text-sm tracking-wide text-quantum uppercase">{f.title}</p>

        {/* Bio */}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {f.bio}
        </p>

        {/* Links */}
        <div className="mt-6 flex items-center gap-3">
          {f.linkedin && (
            <a
              href={f.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-transparent text-muted-foreground transition-colors hover:border-quantum/50 hover:bg-quantum/10 hover:text-quantum"
              aria-label={`${f.name} on LinkedIn`}
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          )}
          {f.portfolio && (
            <a
              href={f.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-transparent text-muted-foreground transition-colors hover:border-quantum/50 hover:bg-quantum/10 hover:text-quantum"
              aria-label={`${f.name} Portfolio`}
            >
              <Globe className="h-4 w-4" />
            </a>
          )}
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Team() {
  return (
    <section id="team-panel" className="relative mx-auto max-w-7xl px-6 w-full min-h-screen flex flex-col justify-center py-24">
      <div className="max-w-2xl">
        <SectionLabel index="04" label="Leadership" />
        <Reveal>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance metallic-heading sm:text-4xl md:text-5xl">
            9 leaders. One trajectory.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            The people steering 6th Civilians across engineering, design, hardware, and growth.
          </p>
        </Reveal>
      </div>

      <StaggerGroup
        stagger={0.08}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {founders.map((f, i) => (
          <FounderCard key={f.name} f={f} index={i} />
        ))}
      </StaggerGroup>
    </section>
  )
}
