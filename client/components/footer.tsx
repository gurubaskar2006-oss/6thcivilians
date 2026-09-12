'use client'

import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { brand, capabilityGroups } from '@/data/content'
import { Wordmark } from '@/components/logo'
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '@/components/social-icons'

export function Footer() {
  const year = new Date().getFullYear()

  const directoryLinks = [
    { label: 'About', href: '#about' },
    { label: 'What We Do', href: '#services' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Leadership', href: '#team' },
    { label: 'Inquiries', href: '#contact' },
  ]

  return (
    <footer className="relative bg-[#073B32] text-[#F7F7F2] border-t border-[rgba(255,255,255,0.08)]">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-[rgba(255,255,255,0.1)]">
          {/* Brand block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Wordmark light />

              <p className="mt-6 max-w-sm text-xs sm:text-sm leading-relaxed text-white/70">
                <span className="block text-white font-bold text-sm mb-1">
                  {brand.tagline}
                </span>
                6th Civilians Corporation engineers custom software, applied AI workflows, cloud infrastructure, and technical talent programs.
              </p>
            </div>

            {/* Verified Social Media Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={brand.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="6th Civilians on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:bg-[#35D07F] hover:text-[#073B32] hover:border-[#35D07F]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="6th Civilians on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:bg-[#35D07F] hover:text-[#073B32] hover:border-[#35D07F]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="6th Civilians on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:bg-[#35D07F] hover:text-[#073B32] hover:border-[#35D07F]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Directory Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              DIRECTORY
            </h4>
            <ul className="mt-4 space-y-2.5">
              {directoryLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-white/70 transition-colors hover:text-[#35D07F]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Practices (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              PRACTICES
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#services" className="text-xs text-white/70 hover:text-[#35D07F] transition-colors">
                  Digital Products & Platforms
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-white/70 hover:text-[#35D07F] transition-colors">
                  AI & Intelligent Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-white/70 hover:text-[#35D07F] transition-colors">
                  Education & Talent Immersion
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-white/70 hover:text-[#35D07F] transition-colors">
                  Strategic Communications & Outreach
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-white/70 hover:text-[#35D07F] transition-colors">
                  Cloud & Infrastructure Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Divisions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              DIVISIONS
            </h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href="/pr-team"
                  className="group flex flex-col text-xs transition-colors hover:text-white"
                >
                  <span className="inline-flex items-center gap-1 font-bold text-white group-hover:text-[#35D07F]">
                    <span>Team Gambit</span>
                    <ArrowRight className="h-3 w-3 text-white/60 group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-[10px] text-white/60 mt-0.5 font-mono">
                    Strategic Outreach
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={brand.academy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col text-xs transition-colors hover:text-white"
                >
                  <span className="inline-flex items-center gap-1 font-bold text-white group-hover:text-[#48DDEB]">
                    <span>EDWTH Academy</span>
                    <ArrowUpRight className="h-3 w-3 text-white/60" />
                  </span>
                  <span className="text-[10px] text-white/60 mt-0.5 font-mono">
                    Education & Talent
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Closing Statement Row */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/60">
            © {year} 6TH CIVILIANS CORPORATION. ALL RIGHTS RESERVED.
          </p>

          <span className="font-mono text-xs font-bold tracking-widest text-[#35D07F] uppercase">
            BUILT FOR WHAT COMES NEXT.
          </span>

          <a
            href="#top"
            className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-mono text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            <span>BACK TO TOP</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
