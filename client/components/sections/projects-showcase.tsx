'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

export function ProjectsShowcase() {
  const reduced = useIsReducedMotion()

  return (
    <section
      id="work"
      className="relative w-full py-24 sm:py-32 bg-[#E9EBE7] border-b border-[rgba(17,21,20,0.06)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-[rgba(17,21,20,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#073B32]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
                FEATURED WORK
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111514] leading-[1.08]">
              Real systems engineered for production scale.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#525C58]">
              A look at recent software platforms, data pipelines, and cloud architectures built by our engineering team.
            </p>
          </div>
        </div>

        {/* 3 Genuine Project Cards Showcase */}
        <div className="mt-12 sm:mt-16 space-y-6">
          {/* Featured Lead Project (Full-width 12-column card) */}
          {projects[0] && (
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
              className="group rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-8 sm:p-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#073B32] via-[#0B5D4F] to-[#35D07F]" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#0B5D4F] uppercase tracking-wider">
                      CASE STUDY · {projects[0].category}
                    </span>
                    <span className="rounded-full bg-[#F7F7F2] px-3 py-0.5 font-mono text-[10px] text-[#525C58] border border-[rgba(17,21,20,0.06)]">
                      PRODUCTION
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#111514] group-hover:text-[#073B32] transition-colors">
                    {projects[0].title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#525C58]">
                    {projects[0].description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2.5">
                    {projects[0].highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111514]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#35D07F] mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F7F7F2] px-3.5 py-1 text-xs font-mono text-[#525C58] border border-[rgba(17,21,20,0.06)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col justify-between items-start lg:items-end gap-6 pt-4 lg:pt-0">
                  <span className="font-mono text-xs text-[#525C58]">
                    {projects[0].clientOrDomain}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#073B32] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#0B5D4F]"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary 2 Projects (Equal 6-column split) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {projects.slice(1).map((p, idx) => (
              <motion.div
                key={p.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: EASE }}
                className="group rounded-3xl border border-[rgba(17,21,20,0.08)] bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background:
                      idx === 0
                        ? 'linear-gradient(to right, #4C6FFF, #7C5CFF)'
                        : 'linear-gradient(to right, #0B5D4F, #48DDEB)',
                  }}
                />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(17,21,20,0.06)] mb-6">
                    <span className="font-mono text-xs font-bold text-[#0B5D4F] uppercase tracking-wider">
                      PROJECT · {p.category}
                    </span>
                    <span className="rounded-full bg-[#F7F7F2] px-2.5 py-0.5 font-mono text-[10px] text-[#525C58] border border-[rgba(17,21,20,0.06)]">
                      COMPLETED
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111514] group-hover:text-[#073B32] transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#525C58]">
                    {p.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {p.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs text-[#111514]">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#0B5D4F] mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#F7F7F2] px-3 py-1 text-xs font-mono text-[#525C58] border border-[rgba(17,21,20,0.06)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(17,21,20,0.06)] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#525C58]">
                    {p.clientOrDomain}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#073B32] hover:text-[#0B5D4F]"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
