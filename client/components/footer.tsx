'use client'

import { ArrowUpRight } from 'lucide-react'
import { brand, capabilityGroups } from '@/data/content'
import { LogoMark } from '@/components/logo'
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '@/components/social-icons'

export function Footer() {
  const year = new Date().getFullYear()

  const companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Selected Work', href: '#projects' },
    { label: 'Company Leadership', href: '#company' },
    { label: 'Inquiries', href: '#contact' },
  ]

  return (
    <footer className="relative border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-9 w-9 shrink-0" />
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-lg font-bold tracking-tight text-foreground">
                    6th Civilians
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-500 font-mono">
                    Corporation
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted-foreground">
                <span className="block text-foreground font-semibold text-sm mb-1">
                  {brand.tagline}
                </span>
                6th Civilians Corporation is a premier technology corporation delivering custom enterprise software, applied AI architectures, scalable cloud infrastructure, and engineering consulting.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
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
                  className="flex h-8 w-8 items-center justify-center border border-border text-zinc-400 transition-colors hover:border-zinc-400 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company nav (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              DIRECTORY
            </h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              PRACTICES
            </h4>
            <ul className="mt-4 space-y-2">
              {capabilityGroups.map((group) => (
                <li key={group.id}>
                  <a
                    href="#services"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {group.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem & Divisions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              ECOSYSTEM
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={brand.academy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col text-xs transition-colors hover:text-foreground"
                >
                  <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                    <span>{brand.academy.name}</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-0.5 font-mono">
                    {brand.academy.division}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={brand.gambit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col text-xs transition-colors hover:text-foreground"
                >
                  <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                    <span>{brand.gambit.name}</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                  </span>
                  <span className="text-[10px] text-zinc-500 mt-0.5 font-mono">
                    {brand.gambit.division}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs font-mono text-zinc-500">
            © {year} {brand.name}. ALL RIGHTS RESERVED.
          </p>

          <a
            href="#top"
            className="flex items-center gap-1.5 border border-border px-3 py-1 text-xs font-mono text-zinc-400 transition-colors hover:border-zinc-400 hover:text-white"
          >
            <span>BACK_TO_TOP</span>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
