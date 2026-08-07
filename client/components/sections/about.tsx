'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { stats } from '@/data/content'
import { Reveal, StaggerGroup, staggerItem, useIsReducedMotion } from '@/components/motion'
import { SectionLabel } from '@/components/section-label'

function Counter({ value, suffix, raw }: { value: number; suffix: string; raw?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useIsReducedMotion()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(value)
      return
    }
    let frame = 0
    const duration = 1400
    const startT = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - startT) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, reduced])

  return (
    <span ref={ref} className="font-display text-5xl font-bold metallic-heading sm:text-6xl">
      {raw ? value : display}
      <span className="text-quantum">{suffix}</span>
    </span>
  )
}

export function About() {
  const reduced = useIsReducedMotion()

  return (
    <section id="about-panel" className="relative w-full min-h-screen flex flex-col justify-center py-24">
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <StaggerGroup className="flex flex-col">
          <Reveal delay={0.1}>
            <SectionLabel index="01" label="Mission" />
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance metallic-heading sm:text-4xl md:text-5xl">
              We build the technology that moves ambitious ideas into reality.
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              6th Civilians delivers end-to-end technology solutions for startups, businesses,
              educational institutions, and enterprises. We bridge disciplined software engineering
              with emerging fields — quantum-inspired research, IoT, and EV technology — so every
              layer of your product is engineered with intent.
            </p>
          </Reveal>
        </StaggerGroup>

        <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {stats.map((s, idx) => (
            <Reveal
              key={s.label}
              delay={idx + 1}
              className="glass-panel flex flex-col items-start justify-center gap-2 rounded-2xl p-8 transition-colors duration-300 hover:bg-secondary/25 h-full"
            >
              <Counter value={s.value} suffix={s.suffix} raw={s.raw} />
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </Reveal>
          ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
