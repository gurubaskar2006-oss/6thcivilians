'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Globe, BrainCircuit, GraduationCap, Megaphone, Server, CheckCircle2 } from 'lucide-react'
import { EASE, useIsReducedMotion } from '@/components/motion'

interface CapabilityModule {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  accentColor: string
  lightBg: string
  icon: any
  subItems: string[]
  ctaLabel?: string
  ctaHref?: string
}

export function CapabilitiesGrid() {
  const [activeId, setActiveId] = useState<string>('digital-products')
  const reduced = useIsReducedMotion()

  const modules: CapabilityModule[] = [
    {
      id: 'digital-products',
      number: '01',
      title: 'Digital Products',
      subtitle: 'Platforms, web apps & user experiences',
      description:
        'High-performance web apps, SaaS platforms, and digital interfaces engineered for responsiveness, accessibility, and speed.',
      accentColor: '#48DDEB',
      lightBg: 'rgba(72, 221, 235, 0.08)',
      icon: Globe,
      subItems: ['Web Applications', 'SaaS Architecture', 'UI/UX Design & Dev', 'Mobile Experiences'],
    },
    {
      id: 'ai-intelligent-systems',
      number: '02',
      title: 'AI & Automation',
      subtitle: 'Machine learning & intelligent workflows',
      description:
        'Practical machine learning models, custom AI assistants, and process automation designed to solve real business bottlenecks.',
      accentColor: '#7C5CFF',
      lightBg: 'rgba(124, 92, 255, 0.08)',
      icon: BrainCircuit,
      subItems: ['Machine Learning', 'LLM & AI Workflows', 'Task Automation', 'Data Processing'],
    },
    {
      id: 'education-talent',
      number: '03',
      title: 'Education & Talent',
      subtitle: 'Hands-on training by EDWTH Academy',
      description:
        'Project-based training and developer mentorship bridging the gap between student learning and industry-standard engineering.',
      accentColor: '#35D07F',
      lightBg: 'rgba(53, 208, 127, 0.08)',
      icon: GraduationCap,
      subItems: ['Practical Bootcamps', 'Real Project Experience', 'Career Mentorship', 'Skill Verification'],
      ctaLabel: 'Visit EDWTH Academy',
      ctaHref: '/academy',
    },
    {
      id: 'digital-growth',
      number: '04',
      title: 'Public Relations & Outreach',
      subtitle: 'Strategic communications by Team Gambit',
      description:
        'External communications, partnership outreach, brand storytelling, and media relations managed by Team Gambit.',
      accentColor: '#FF795B',
      lightBg: 'rgba(255, 121, 91, 0.08)',
      icon: Megaphone,
      subItems: ['Strategic PR', 'Brand Positioning', 'Institutional Relations', 'Community Outreach'],
      ctaLabel: 'Meet Team Gambit',
      ctaHref: 'https://pr.6thcivilians.com',
    },
    {
      id: 'technology-services',
      number: '05',
      title: 'Cloud & Infrastructure',
      subtitle: 'Custom backend & cloud deployment',
      description:
        'Custom backend development, cloud deployments on AWS and Google Cloud, API integrations, and DevOps pipelines.',
      accentColor: '#4C6FFF',
      lightBg: 'rgba(76, 111, 255, 0.08)',
      icon: Server,
      subItems: ['Custom Backend Systems', 'Cloud Infrastructure', 'CI/CD & DevOps', 'Architecture Review'],
    },
  ]

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#F7F7F2] border-b border-[rgba(17,21,20,0.06)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-[rgba(17,21,20,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#073B32]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111514] leading-[1.08]">
              Technology solutions built for real-world impact.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#525C58]">
              From custom software and practical AI to talent training and strategic outreach, we provide the technical expertise your business needs.
            </p>
          </div>
        </div>

        {/* Large Editorial Interactive Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {modules.map((m, idx) => {
            const Icon = m.icon
            const isWide = idx === 0 || idx === 1 // First two modules take 6 cols each
            const colSpan = isWide ? 'lg:col-span-6' : 'lg:col-span-4'

            return (
              <motion.div
                key={m.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                onMouseEnter={() => setActiveId(m.id)}
                className={`group relative rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${colSpan}`}
                style={{
                  borderTopColor: m.accentColor,
                  borderTopWidth: '3px',
                }}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center mb-8">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: m.lightBg }}
                    >
                      <Icon className="h-6 w-6" style={{ color: m.accentColor }} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111514] mb-2 group-hover:text-[#073B32] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B5D4F] mb-4">
                    {m.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#525C58] mb-8">
                    {m.description}
                  </p>

                  {/* Sub-items Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {m.subItems.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F7F2] px-3 py-1 text-xs font-medium text-[#111514] border border-[rgba(17,21,20,0.06)]"
                      >
                        <CheckCircle2 className="h-3 w-3" style={{ color: m.accentColor }} />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-[rgba(17,21,20,0.06)] flex items-center justify-between">
                  {m.ctaHref ? (
                    <a
                      href={m.ctaHref}
                      target={m.ctaHref.startsWith('http') ? '_blank' : '_self'}
                      rel={m.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#073B32] transition-colors hover:text-[#0B5D4F]"
                    >
                      <span>{m.ctaLabel}</span>
                      {m.ctaHref.startsWith('http') ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowRight className="h-3.5 w-3.5" />
                      )}
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#525C58] group-hover:text-[#073B32] transition-colors"
                    >
                      <span>CONSULT ON {m.title.toUpperCase()}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}

                  <span className="font-mono text-[11px] text-[#525C58]">
                    VERIFIED PRACTICE
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
