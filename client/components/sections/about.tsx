'use client'

import { founders, type Founder } from '@/data/content'
import { LinkedInIcon } from '@/components/social-icons'
import { Reveal, StaggerGroup, useTiltInteraction } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'
import { motion } from 'framer-motion'

function LeaderCard({ f, index }: { f: Founder; index: number }) {
  const { ref, onMove, reset, style } = useTiltInteraction()

  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={style}
        className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-zinc-950/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/50"
      >
        <div>
          {/* Header row with avatar and role */}
          <div className="flex items-center gap-4">
            {f.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={f.photo}
                alt={f.name}
                className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/10 filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-secondary/50 font-display text-base font-bold text-emerald-400">
                {f.name.slice(0, 2).toUpperCase()}
              </div>
            )}

            <div className="flex flex-col">
              <h3 className="font-display text-base font-bold text-foreground">
                {f.name}
              </h3>
              <span className="text-xs font-semibold text-emerald-400">
                {f.title}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mt-0.5">
                {f.role}
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {f.bio}
          </p>
        </div>

        {f.linkedin && (
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <a
              href={f.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-emerald-400"
              aria-label={`${f.name} LinkedIn Profile`}
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        )}
      </motion.div>
    </Reveal>
  )
}

export function About() {
  const corporateValues = [
    {
      title: 'Engineering Mindset',
      desc: 'First-principles architecture, type safety, and disciplined design patterns over ad-hoc hacks.',
    },
    {
      title: 'Practical Technology',
      desc: 'Applied AI and modern software engineering focused directly on operational impact and efficiency.',
    },
    {
      title: 'Scalable Solutions',
      desc: 'Systems designed with modular boundaries that sustain organizational growth and high concurrency.',
    },
    {
      title: 'Long-Term Thinking',
      desc: 'We architect software as long-lived enterprise assets, documented and maintainable for decades.',
    },
  ]

  return (
    <section id="company" className="relative mx-auto max-w-7xl px-6 w-full py-28 border-t border-border/40">
      <div className="max-w-3xl">
        <SectionLabel index="06" label="Corporate Vision & Leadership" />
        <Reveal>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.12]">
            We build technology{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              with purpose.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            6th Civilians Corporation is driven by an engineering-first culture. We combine technical rigor, architectural integrity, and strategic advisory to build software that organizations rely on daily.
          </p>
        </Reveal>
      </div>

      {/* Corporate values row */}
      <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {corporateValues.map((val, idx) => (
          <Reveal key={val.title} delay={idx * 0.08}>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
              <span className="font-mono text-xs text-emerald-400 font-semibold block mb-2">
                0{idx + 1}
              </span>
              <h3 className="font-display text-base font-bold text-foreground">
                {val.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {val.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </StaggerGroup>

      {/* Leadership Team */}
      <div className="mt-20">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Leadership & Governance
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Key People Steering 6th Civilians Corporation
          </h3>
        </div>

        <StaggerGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {founders.map((f, i) => (
            <LeaderCard key={f.name} f={f} index={i} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
