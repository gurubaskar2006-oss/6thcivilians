'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { corporatePillars } from '@/data/content'
import { ShieldCheck, Cpu, Cloud, Handshake } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

function ScrollManifesto() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useIsReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 40%'],
  })

  const manifestoText =
    'Technology built around real business needs. We reject ephemeral hype cycles and superficial prototypes. 6th Civilians Corporation engineers mission-critical software systems designed for multi-year operational longevity, verified security, and deterministic enterprise scale.'

  const words = manifestoText.split(' ')

  return (
    <div ref={containerRef} className="max-w-3xl">
      <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold block mb-4">
        CORPORATE MANIFESTO & ETHOS
      </span>

      <p className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.14]">
        {words.map((word, index) => {
          const start = index / words.length
          const end = start + 1 / words.length

          const isEmphasis =
            word.includes('real') ||
            word.includes('business') ||
            word.includes('needs.') ||
            word.includes('deterministic') ||
            word.includes('longevity,')

          return (
            <Word
              key={index}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
              isEmphasis={isEmphasis}
              reduced={reduced}
            />
          )
        })}
      </p>
    </div>
  )
}

function Word({
  word,
  range,
  progress,
  isEmphasis,
  reduced,
}: {
  word: string
  range: [number, number]
  progress: any
  isEmphasis: boolean
  reduced: boolean
}) {
  const opacity = useTransform(progress, range, [0.25, 1])

  if (reduced) {
    return (
      <span
        className={`inline-block mr-[0.25em] ${
          isEmphasis ? 'text-emerald-400' : 'text-foreground'
        }`}
      >
        {word}
      </span>
    )
  }

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] transition-colors ${
        isEmphasis ? 'text-zinc-100 font-extrabold' : 'text-zinc-400'
      }`}
    >
      {word}
    </motion.span>
  )
}

export function CorporateIntro() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useIsReducedMotion()
  const pillarIcons = [ShieldCheck, Cpu, Cloud, Handshake]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-28 border-b border-border bg-background overflow-hidden"
    >
      {/* Background Architectural Watermark Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-border/20 pointer-events-none hidden lg:block" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Asymmetric Editorial Header with Scroll Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-16 border-b border-border">
          {/* Left: Scroll-illuminated Manifesto (8 cols) */}
          <div className="lg:col-span-8">
            <ScrollManifesto />
          </div>

          {/* Right: Supporting Corporate Context (4 cols) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8"
          >
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-2">
              EXECUTIVE PRINCIPLE
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every system delivered by 6th Civilians Corporation is backed by measurable SLA commitments, comprehensive architectural documentation, and disciplined code standards that endure organizational succession.
            </p>
          </motion.div>
        </div>

        {/* Structured Engineering Standards Matrix (Tabular 4-Column Grid) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-card/40">
          {corporatePillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length]
            return (
              <motion.div
                key={pillar.title}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: EASE }}
                className="group relative flex flex-col justify-between p-8 transition-colors duration-200 hover:bg-secondary/40"
              >
                <div>
                  <div className="flex items-center">
                    <Icon className="h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-6 font-display text-base font-bold text-foreground">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>DISCIPLINE_METRIC</span>
                  <span className="text-emerald-500 font-semibold">100% AUDITED</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
