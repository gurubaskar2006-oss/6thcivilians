'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useIsReducedMotion, EASE } from '@/components/motion'
import { Code2, BrainCircuit, GraduationCap, ShieldCheck } from 'lucide-react'

export function BrandStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useIsReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  })

  const statementLines = [
    { text: "WE DON'T JUST", highlight: false },
    { text: "USE TECHNOLOGY.", highlight: false },
    { text: "WE BUILD WITH IT.", highlight: true },
  ]

  const pillars = [
    {
      icon: Code2,
      num: '01',
      title: 'Disciplined Engineering',
      desc: 'First-principles architecture, clean type safety, and resilient system design.',
    },
    {
      icon: BrainCircuit,
      num: '02',
      title: 'Applied Intelligence',
      desc: 'Practical AI and machine learning tools built to automate real workflows.',
    },
    {
      icon: GraduationCap,
      num: '03',
      title: 'Talent Development',
      desc: 'Hands-on immersion through EDWTH Academy, mentoring the next generation of engineers.',
    },
    {
      icon: ShieldCheck,
      num: '04',
      title: 'Long-Term Reliability',
      desc: 'Software built as enduring business assets, backed by clean code and thorough testing.',
    },
  ]

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-[#E9EBE7] border-b border-[rgba(17,21,20,0.06)] overflow-hidden"
    >
      {/* Background Soft Accent Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-b from-[#35D07F]/10 via-[#0B5D4F]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <span className="h-2 w-2 rounded-full bg-[#073B32]" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
            WHO WE ARE
          </span>
        </div>

        {/* Oversized Editorial Manifesto */}
        <div className="max-w-5xl">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111514] leading-[1.04]">
            {statementLines.map((line, idx) => (
              <div key={line.text} className="block overflow-hidden">
                <motion.span
                  initial={reduced ? false : { y: '100%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.12, ease: EASE }}
                  className={`inline-block ${
                    line.highlight
                      ? 'bg-gradient-to-r from-[#073B32] via-[#0B5D4F] to-[#35D07F] bg-clip-text text-transparent'
                      : 'text-[#111514]'
                  }`}
                >
                  {line.text}
                </motion.span>
              </div>
            ))}
          </h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#525C58]"
          >
            6th Civilians Corporation is a technology company engineering custom software, intelligent AI workflows, and cloud systems, while fostering future-ready technical talent.
          </motion.p>
        </div>

        {/* 4-Pillar Editorial Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                className="group relative rounded-2xl border border-[rgba(17,21,20,0.08)] bg-white p-7 transition-all duration-300 hover:border-[#0B5D4F] hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F7F2] text-[#073B32] transition-colors group-hover:bg-[#073B32] group-hover:text-[#F7F7F2]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0B5D4F]">
                    [{pillar.num}]
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#111514] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#525C58]">
                  {pillar.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
