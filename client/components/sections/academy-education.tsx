'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { brand } from '@/data/content'
import { ArrowUpRight, ArrowRight, GraduationCap, Code2, ShieldCheck, Award, Users, Compass, BookOpen } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

export function AcademyEducation() {
  const reduced = useIsReducedMotion()

  const offerings = [
    {
      icon: Code2,
      title: 'Technical Immersion',
      desc: 'Hands-on training in modern TypeScript, reactive frameworks, concurrent backend services, and cloud engineering.',
      accent: '#35D07F',
    },
    {
      icon: ShieldCheck,
      title: 'Live Production Projects',
      desc: 'Students participate in real engineering tasks, architectural reviews, and continuous deployment workflows.',
      accent: '#48DDEB',
    },
    {
      icon: BookOpen,
      title: 'Engineering Workshops',
      desc: 'Targeted technical masterclasses on applied AI, REST/GraphQL APIs, distributed databases, and DevOps.',
      accent: '#4C6FFF',
    },
    {
      icon: Award,
      title: 'Rigorous Assessments',
      desc: 'Objective skill verification, algorithmic code challenges, and code quality evaluations.',
      accent: '#7C5CFF',
    },
    {
      icon: Users,
      title: 'Industry Mentorship',
      desc: 'Direct interaction with practicing technical leads, fractional architects, and senior developers.',
      accent: '#FF795B',
    },
    {
      icon: Compass,
      title: 'Student Opportunities',
      desc: 'Direct placement into dedicated engineering squads, client engagements, and high-velocity career pathways.',
      accent: '#F4D35E',
    },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F7F7F2] border-b border-[rgba(17,21,20,0.06)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-[rgba(17,21,20,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#073B32]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
                EDWTH ACADEMY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111514] leading-[1.08]">
              Practical engineering education for ambitious builders.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <p className="text-sm sm:text-base leading-relaxed text-[#525C58] mb-4">
              Our dedicated education division prepares students and aspiring developers for industry roles through hands-on, production-grade projects.
            </p>
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 rounded-full bg-[#073B32] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#0B5D4F]"
            >
              <span>VISIT EDWTH ACADEMY</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#35D07F]" />
            </Link>
          </div>
        </div>

        {/* 6-Card Modular Immersion Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
                className="group rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  borderLeftColor: item.accent,
                  borderLeftWidth: '3px',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#525C58]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#111514] mb-2 group-hover:text-[#073B32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#525C58]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[rgba(17,21,20,0.06)] flex items-center justify-between text-[11px] font-mono text-[#525C58]">
                  <span>EDWTH PROGRAM</span>
                  <span className="font-semibold text-[#073B32]">ACTIVE INITIATIVE</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
