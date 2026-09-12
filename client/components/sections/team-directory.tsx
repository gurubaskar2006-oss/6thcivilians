'use client'

import { motion } from 'framer-motion'
import { founders, brand, type Founder } from '@/data/content'
import { LinkedInIcon } from '@/components/social-icons'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useIsReducedMotion, EASE } from '@/components/motion'

function EditorialTeamCard({ member, index }: { member: Founder; index: number }) {
  const paddedIndex = String(index + 1).padStart(2, '0')

  return (
    <div className="group relative h-full rounded-2xl border border-[rgba(17,21,20,0.08)] bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0B5D4F] hover:shadow-lg hover:-translate-y-1">
      <div>
        {/* Editorial Index */}
        <div className="flex items-center justify-between border-b border-[rgba(17,21,20,0.06)] pb-4 mb-6">
          <span className="font-mono text-sm font-bold text-[#0B5D4F] tracking-wider">
            {paddedIndex}
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#525C58]">
            {member.role}
          </span>
        </div>

        {/* Name & Official Role */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111514] tracking-tight group-hover:text-[#073B32] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-[#0B5D4F] mt-1">
          {member.title}
        </p>

        {/* Short verified description */}
        {member.bio && (
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#525C58]">
            {member.bio}
          </p>
        )}
      </div>

      {/* Verified LinkedIn Profile Link */}
      {member.linkedin ? (
        <div className="mt-8 pt-5 border-t border-[rgba(17,21,20,0.06)] flex items-center justify-between">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#073B32] hover:text-[#0B5D4F] transition-colors group/link"
            aria-label={`${member.name} on LinkedIn`}
          >
            <LinkedInIcon className="h-3.5 w-3.5 text-[#073B32]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      ) : null}
    </div>
  )
}

export function TeamDirectory() {
  const reduced = useIsReducedMotion()

  return (
    <section
      id="team"
      className="relative w-full py-24 sm:py-32 bg-[#F7F7F2] border-b border-[rgba(17,21,20,0.06)] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-[rgba(17,21,20,0.08)]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#073B32]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#073B32]">
                LEADERSHIP & TEAM
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111514] leading-[1.08]">
              The people behind 6th Civilians.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#525C58]">
              Meet our core team spanning engineering, architecture, product strategy, quality assurance, and community outreach.
            </p>
          </div>
        </div>

        {/* Editorial Team Roster Grid (3x3 Layout for 9 Members) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {founders.map((member, idx) => (
            <motion.div
              key={member.name}
              className="h-full"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE }}
            >
              <EditorialTeamCard member={member} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Dedicated "TEAM GAMBIT" Separate Destination Banner */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-14 sm:mt-20 rounded-3xl border border-[rgba(17,21,20,0.08)] bg-gradient-to-r from-[#073B32] via-[#0B5D4F] to-[#073B32] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#35D07F]/20 blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-semibold text-[#35D07F] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F] animate-pulse" />
              <span>PUBLIC RELATIONS & OUTREACH</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
              Team Gambit
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
              Managing external relations, institutional partnerships, and communications across the ecosystem. Explore Team Gambit&apos;s initiatives on their dedicated portal.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="/pr-team"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#073B32] shadow-md transition-all duration-300 hover:bg-[#35D07F] hover:text-[#073B32] active:scale-[0.98] group"
            >
              <span>MEET TEAM GAMBIT</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

