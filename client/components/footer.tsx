'use client'

import { brand, nav, serviceClusters } from '@/data/content'
import { LogoMark } from '@/components/logo'
import { LinkedInIcon, XIcon, InstagramIcon, FacebookIcon } from '@/components/social-icons'

export function Footer() {
  const year = new Date().getFullYear()
  const condensed = serviceClusters.map((c) => ({ title: c.category }))

  return (
    <footer className="relative mt-24 border-t border-border bg-gradient-to-b from-transparent to-background/95 backdrop-blur-md">
      {/* Top subtle glow divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-quantum/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid gap-16 md:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* brand block */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="glass-panel flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-border">
                  <LogoMark className="h-7 w-7" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight text-foreground uppercase">
                  6<span className="text-quantum font-light">th</span> Civilians
                </span>
              </div>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground font-medium">
                <span className="block">{brand.tagline}.</span>
                <span className="block mt-2">Engineering end-to-end technology for the next reality.</span>
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: LinkedInIcon, href: brand.social.linkedin, label: 'LinkedIn' },
                { icon: InstagramIcon, href: brand.social.instagram, label: 'Instagram' },
                { icon: FacebookIcon, href: brand.social.facebook, label: 'Facebook' },
                { icon: XIcon, href: brand.social.twitter, label: 'X' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-quantum hover:bg-quantum/10 hover:text-quantum hover:shadow-[0_0_15px_-3px_rgba(0,212,255,0.4)]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-brand text-foreground uppercase">Navigate</h4>
            <ul className="mt-6 space-y-3.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="group relative inline-flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-quantum">
                    <span className="relative z-10">{n.label}</span>
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-quantum/70 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-brand text-foreground uppercase">Capabilities</h4>
            <ul className="mt-6 space-y-3.5">
              {condensed.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="group relative inline-flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-quantum">
                    <span className="relative z-10">{s.title}</span>
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-quantum/70 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-brand text-foreground uppercase">Connect</h4>
            <ul className="mt-6 space-y-3.5 text-sm font-medium text-muted-foreground">
              <li>
                <a href={`mailto:${brand.email}`} className="group relative inline-flex items-center transition-colors duration-300 hover:text-quantum">
                  <span className="relative z-10">{brand.email}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-quantum/70 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row">
          <p className="text-sm font-medium text-muted-foreground">
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs font-semibold tracking-brand text-muted-foreground uppercase">{brand.tagline}</p>
            <a 
              href="#top"
              className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-all hover:border-quantum hover:bg-quantum/10 hover:text-quantum"
            >
              Back to top
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
