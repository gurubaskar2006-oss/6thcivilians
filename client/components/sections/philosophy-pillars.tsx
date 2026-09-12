'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Heart, Cpu, GraduationCap, Network, CheckCircle2 } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

export function PhilosophyPillars() {
  const reduced = useIsReducedMotion()

  const principles = [
    {
      num: '01',
      title: 'Human Intent',
      tagline: 'Technology serves people.',
      description:
        'We build software to solve real operational challenges—prioritizing usability, clarity, and genuine organizational value.',
      color: '#073B32',
    },
    {
      num: '02',
      title: 'Disciplined Code',
      tagline: 'Quality over shortcuts.',
      description:
        'Clean code, strong type systems, and thoughtful architecture ensure the software we ship remains maintainable, secure, and fast.',
      color: '#0B5D4F',
    },
    {
      num: '03',
      title: 'Practical Education',
      tagline: 'Learning by building.',
      description:
        'Through EDWTH Academy, we bridge the gap between academic theory and industry engineering through immersive, project-based training.',
      color: '#35D07F',
    },
    {
      num: '04',
      title: 'Collaboration',
      tagline: 'Shared vision, shared growth.',
      description:
        'We connect learners, seasoned developers, startups, and organizations to foster meaningful partnerships and community innovation.',
      color: '#4C6FFF',
    },
    {
      num: '05',
      title: 'Execution',
      tagline: 'Shipping what matters.',
      description:
        'We focus on tangible outcomes rather than speculative buzz. Every release is tested, measured, and built to perform in production.',
      color: '#7C5CFF',
    },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#E9EBE7] border-b border-[rgba(17,21,20,0.06)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-[rgba(17,21,20,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#073B32]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
                OUR VALUES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111514] leading-[1.08]">
              How we think, build, and deliver.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#525C58]">
              The core principles that guide our technical decisions, client collaborations, and talent mentorship.
            </p>
          </div>
        </div>

        {/* 5 Principles Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
              className="group rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                borderTopColor: p.color,
                borderTopWidth: '3px',
              }}
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#0B5D4F] block mb-4">
                  [{p.num}]
                </span>

                <h3 className="font-display text-xl font-bold text-[#111514] mb-1 group-hover:text-[#073B32] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-[#0B5D4F] mb-4">
                  {p.tagline}
                </p>

                <p className="text-xs sm:text-sm leading-relaxed text-[#525C58]">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(17,21,20,0.06)] flex items-center justify-between text-[11px] font-mono text-[#525C58]">
                <span>CORE VALUE</span>
                <span className="font-semibold text-[#073B32]">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
