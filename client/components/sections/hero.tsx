'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDownRight, Sparkles } from 'lucide-react'
import { EASE, useIsReducedMotion } from '@/components/motion'
import { CivilizationOrb } from '@/components/hero/civilization-orb'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const reduced = useIsReducedMotion()

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Subtle parallax
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  const pillars = [
    { num: '01', title: 'Digital Products', desc: 'Platforms & Web Ecosystems' },
    { num: '02', title: 'AI & Systems', desc: 'Applied Intelligence & Automation' },
    { num: '03', title: 'Education Division', desc: 'EDWTH Academy & Talent Immersion' },
    { num: '04', title: 'Communications', desc: 'Team Gambit & Strategic Growth' },
  ]

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-10 bg-[#F7F7F2] border-b border-[rgba(17,21,20,0.06)] overflow-hidden"
    >
      {/* Soft Ambient Background Color Blooms */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#35D07F]/15 via-[#073B32]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-[#48DDEB]/15 via-[#4C6FFF]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Positioning */}
          <motion.div
            style={reduced ? undefined : { y: textY }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Editorial Category Pill */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(17,21,20,0.1)] bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#073B32] shadow-sm mb-6 sm:mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-[#35D07F]" />
              <span className="font-mono text-[11px] tracking-wider uppercase">
                SOFTWARE · AI · CLOUD ENGINEERING
              </span>
            </motion.div>

            {/* Oversized Headline */}
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#111514] leading-[0.98]"
            >
              BUILDING THE <br />
              <span className="bg-gradient-to-r from-[#073B32] via-[#0B5D4F] to-[#35D07F] bg-clip-text text-transparent">
                DIGITAL FUTURE.
              </span>
            </motion.h1>

            {/* Supporting Proposition Statement */}
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="mt-6 sm:mt-8 max-w-xl text-base sm:text-xl leading-relaxed text-[#525C58] font-sans"
            >
              Custom software, intelligent systems, and engineering talent built for ambitious companies and forward-looking teams.
            </motion.p>

            {/* High-Contrast Action Cluster */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#073B32] px-7 py-4 text-sm font-bold text-[#F7F7F2] shadow-md transition-all duration-200 hover:bg-[#0B5D4F] hover:shadow-lg active:scale-[0.98]"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(17,21,20,0.15)] bg-white px-7 py-4 text-sm font-bold text-[#111514] shadow-sm transition-all duration-200 hover:border-[#073B32] hover:bg-[#E9EBE7]"
              >
                <span>OUR WORK</span>
                <ArrowDownRight className="h-4 w-4 text-[#525C58]" />
              </a>
            </motion.div>

            {/* Ecosystem Badges Row */}
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 pt-6 border-t border-[rgba(17,21,20,0.08)] flex flex-wrap items-center gap-3 text-xs text-[#525C58]"
            >
              <span className="font-semibold text-[#111514]">DIVISIONS:</span>
              <span className="rounded-full bg-white px-3 py-1 border border-[rgba(17,21,20,0.08)] font-mono text-[11px] text-[#073B32]">
                EDWTH Academy
              </span>
              <span className="rounded-full bg-white px-3 py-1 border border-[rgba(17,21,20,0.08)] font-mono text-[11px] text-[#0B5D4F]">
                Team Gambit
              </span>
              <span className="rounded-full bg-white px-3 py-1 border border-[rgba(17,21,20,0.08)] font-mono text-[11px] text-[#525C58]">
                Enterprise Engineering
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Strategic Abstract 3D Digital Civilization Focal Point */}
          <motion.div
            style={reduced ? undefined : { y: visualY }}
            initial={reduced ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <CivilizationOrb />
          </motion.div>
        </div>
      </div>

      {/* Full-Width Capability Monograph Index */}
      <div className="mt-14 w-full border-t border-[rgba(17,21,20,0.08)] bg-white/70 backdrop-blur-sm z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[rgba(17,21,20,0.08)]">
          {pillars.map((item) => (
            <div key={item.num} className="flex flex-col pt-3 md:pt-0 md:px-5 first:pl-0">
              <span className="font-mono text-xs text-[#0B5D4F] font-bold mb-1">
                [{item.num}]
              </span>
              <span className="text-sm font-bold text-[#111514]">
                {item.title}
              </span>
              <span className="text-xs text-[#525C58] mt-0.5">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
