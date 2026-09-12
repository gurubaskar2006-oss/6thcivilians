'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Cpu, Building2, Rocket, ArrowRight } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

interface NodeItem {
  id: string
  step: string
  label: string
  title: string
  description: string
  accentColor: string
  icon: any
}

export function EcosystemFlow() {
  const reduced = useIsReducedMotion()
  const [activeStep, setActiveStep] = useState<number>(0)

  const nodes: NodeItem[] = [
    {
      id: 'students',
      step: '01',
      label: 'TALENT DISCOVERY',
      title: 'Aspiring Engineers',
      description:
        'Finding motivated students and builders with strong problem-solving potential.',
      accentColor: '#35D07F',
      icon: Users,
    },
    {
      id: 'education',
      step: '02',
      label: 'EDWTH ACADEMY',
      title: 'Practical Immersion',
      description:
        'Hands-on training in production workflows, clean architecture, and modern full-stack development.',
      accentColor: '#48DDEB',
      icon: GraduationCap,
    },
    {
      id: 'technology',
      step: '03',
      label: 'CORE ENGINEERING',
      title: 'Software & AI Systems',
      description:
        'Building reliable web apps, automated data pipelines, and scalable cloud solutions for clients.',
      accentColor: '#4C6FFF',
      icon: Cpu,
    },
    {
      id: 'organizations',
      step: '04',
      label: 'PARTNERSHIPS',
      title: 'Client Organizations',
      description:
        'Working closely with startups, enterprises, and institutions to solve tough technical challenges.',
      accentColor: '#7C5CFF',
      icon: Building2,
    },
    {
      id: 'opportunities',
      step: '05',
      label: 'CAREER PATHWAYS',
      title: 'Real-World Outcomes',
      description:
        'Connecting trained graduates with engineering squads and accelerating business growth.',
      accentColor: '#F4D35E',
      icon: Rocket,
    },
  ]

  return (
    <section
      id="ecosystem"
      className="relative w-full py-24 sm:py-32 bg-[#0A1210] text-[#F7F7F2] border-b border-[rgba(255,255,255,0.06)] overflow-hidden"
    >
      {/* Background Soft Glow Auras */}
      <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-[#073B32]/40 via-[#35D07F]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tl from-[#7C5CFF]/20 via-[#48DDEB]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-[rgba(255,255,255,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#35D07F]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#35D07F]">
                OUR ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Connecting talent, engineering, and real-world impact.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#8E929E]">
              A collaborative cycle where emerging developers learn through live projects, engineer production systems, and deliver real value to companies.
            </p>
          </div>
        </div>

        {/* Interactive Constellation / Connected Flow */}
        <div className="mt-16 sm:mt-20">
          {/* Visual Step Pipeline (Horizontal on desktop, vertical on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#35D07F] via-[#4C6FFF] to-[#F4D35E] opacity-30 z-0" />

            {nodes.map((node, idx) => {
              const Icon = node.icon
              const isSelected = activeStep === idx

              return (
                <motion.div
                  key={node.id}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer z-10 ${
                    isSelected
                      ? 'bg-[#111514] border-[rgba(255,255,255,0.25)] shadow-2xl scale-[1.02]'
                      : 'bg-[#111514]/60 border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[#111514]'
                  }`}
                  style={{
                    borderTopColor: node.accentColor,
                    borderTopWidth: isSelected ? '3px' : '1px',
                  }}
                >
                  <div>
                    {/* Icon Node */}
                    <div className="flex items-center mb-8">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${node.accentColor}20`,
                          color: node.accentColor,
                        }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider block mb-2" style={{ color: node.accentColor }}>
                      {node.label}
                    </span>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                      {node.title}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#8E929E]">
                      {node.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>STAGE {node.step}</span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`}
                      style={{ color: node.accentColor }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Narrative Banner inside Dark Section */}
        <div className="mt-16 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-white/[0.02] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#35D07F] font-bold block mb-1">
              EDUCATIONAL & CORPORATE ALIGNMENT
            </span>
            <h4 className="font-display text-xl font-bold text-white">
              Cultivating talent that builds production systems, not toy projects.
            </h4>
            <p className="text-xs sm:text-sm text-[#8E929E] mt-2">
              Through EDWTH Academy and direct enterprise engagements, students gain immersion in real customer architectures, code reviews, and cloud deployments.
            </p>
          </div>

          <Link
            href="/academy"
            className="inline-flex items-center gap-2 rounded-full bg-[#35D07F] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#073B32] transition-colors hover:bg-white shrink-0"
          >
            <span>EXPLORE EDWTH ACADEMY</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
