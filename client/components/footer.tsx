'use client'

import { ArrowUpRight } from 'lucide-react'
import { brand, capabilityGroups } from '@/data/content'
import { LogoMark } from '@/components/logo'
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '@/components/social-icons'

export function Footer() {
  const year = new Date().getFullYear()

  const companyLinks = [
    { label: 'Corporate Profile', href: '#about' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Solutions & Verticals', href: '#solutions' },
    { label: 'Selected Work', href: '#projects' },
    { label: 'Vision & Leadership', href: '#company' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-border/60 bg-zinc-950 text-foreground">
      {/* Top subtle glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.1fr]">
          {/* Brand block */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-10 w-10 shrink-0" />
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-lg font-bold tracking-tight text-foreground">
                    6th Civilians
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-400">
                    Corporation
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted-foreground">
                <span className="block text-foreground font-semibold text-sm mb-1.5">
                  {brand.tagline}
                </span>
                6th Civilians Corporation is a premier technology corporation delivering custom enterprise software, applied AI architectures, scalable cloud infrastructure, and engineering consulting.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: LinkedInIcon, href: brand.social.linkedin, label: 'LinkedIn' },
                { icon: InstagramIcon, href: brand.social.instagram, label: 'Instagram' },
                { icon: FacebookIcon, href: brand.social.facebook, label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company nav */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-foreground uppercase">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-foreground uppercase">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {capabilityGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href="#services"
                    className="text-xs text-muted-foreground transition-colors hover:text-emerald-400"
                  >
                    {group.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem & Divisions */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-foreground uppercase">
              Ecosystem
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={brand.academy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col text-xs transition-colors hover:text-emerald-400"
                >
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground group-hover:text-emerald-400">
                    <span>{brand.academy.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">
                    {brand.academy.division}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={brand.gambit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col text-xs transition-colors hover:text-emerald-400"
                >
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground group-hover:text-emerald-400">
                    <span>{brand.gambit.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">
                    {brand.gambit.division}
                  </span>
                </a>
              </li>
              <li className="pt-3 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 block mb-1">
                  Legal
                </span>
                <div className="flex gap-3 text-xs text-muted-foreground">
                  <a href="#about" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                  <span>·</span>
                  <a href="#about" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {brand.name}. All rights reserved.
          </p>

          <a
            href="#top"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <span>Back to top</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
