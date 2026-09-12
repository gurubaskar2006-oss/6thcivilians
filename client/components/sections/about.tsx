'use client'

import { founders, type Founder } from '@/data/content'
import { LinkedInIcon } from '@/components/social-icons'
import { Reveal, StaggerGroup } from '@/components/motion'

function LeaderCard({ f, index }: { f: Founder; index: number }) {
  return (
    <div className="group relative flex h-full flex-col justify-between border border-border bg-card p-6 transition-colors duration-200 hover:border-zinc-500 hover:bg-secondary/40">
      <div>
        <div className="flex items-center gap-4">
          {f.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={f.photo}
              alt={f.name}
              className="h-14 w-14 object-cover border border-border filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center border border-border bg-secondary font-display text-base font-bold text-emerald-400">
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
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 mt-0.5 font-mono">
              {f.role}
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          {f.bio}
        </p>
      </div>

      {f.linkedin && (
        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
          <a
            href={f.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`${f.name} LinkedIn Profile`}
          >
            <LinkedInIcon className="h-3.5 w-3.5 text-zinc-400" />
            <span className="font-mono text-[11px] text-zinc-400 hover:text-emerald-400 transition-colors">LinkedIn Profile</span>
          </a>
        </div>
      )}
    </div>
  )
}

export function About() {
  const corporateValues = [
    {
      code: '01',
      title: 'Engineering Mindset',
      desc: 'First-principles architecture, deterministic type safety, and disciplined design patterns over ad-hoc hacks.',
    },
    {
      code: '02',
      title: 'Practical Technology',
      desc: 'Applied AI and modern software engineering focused directly on operational impact, efficiency, and verifiable return.',
    },
    {
      code: '03',
      title: 'Scalable Solutions',
      desc: 'Systems designed with clear domain boundaries that sustain organizational growth and high concurrency.',
    },
    {
      code: '04',
      title: 'Long-Term Thinking',
      desc: 'We architect software as long-lived enterprise assets, documented and maintainable for decades.',
    },
  ]

  return (
    <section id="company" className="relative mx-auto max-w-7xl px-6 w-full py-24 border-b border-border">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-border">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
            CORPORATE GOVERNANCE & LEADERSHIP
          </span>
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              We build technology with purpose and architectural integrity.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              6th Civilians Corporation is driven by an engineering-first culture. We combine technical rigor, architectural integrity, and strategic advisory to build software that organizations rely on daily.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Corporate values row: 4-column structured specification */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-card/40">
        {corporateValues.map((val) => (
          <div key={val.title} className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-foreground">
                {val.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {val.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Team Directory */}
      <div className="mt-20">
        <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 font-bold block mb-1">
              EXECUTIVE ROSTER
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Key People Steering 6th Civilians Corporation
            </h3>
          </div>
          <span className="font-mono text-xs text-zinc-500 hidden sm:block">GOVERNANCE COUNCIL</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {founders.map((f, i) => (
            <LeaderCard key={f.name} f={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
