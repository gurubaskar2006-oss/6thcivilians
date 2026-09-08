'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brand, nav } from '@/data/content'
import { Wordmark } from '@/components/logo'
import { MagneticButton } from '@/components/magnetic-button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/50 bg-background/90 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.7)] backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent',
      )}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
    >
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500', scrolled ? 'py-2' : 'py-4')}>
        <a href="#top" aria-label="6th Civilians Corporation home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-quantum transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={brand.academy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-quantum/30 bg-quantum/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-quantum transition-all duration-300 hover:border-quantum hover:bg-quantum/20 hover:shadow-[0_0_15px_-3px_rgba(0,212,255,0.35)] hover:scale-105"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-quantum opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-quantum" />
            </span>
            <span>Ewdth Academy</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <MagneticButton href="#contact-panel">Start a Project</MagneticButton>
        </div>

        <button
          className="text-metal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={brand.academy.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl border border-quantum/30 bg-quantum/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-quantum"
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-quantum" />
                  Ewdth Academy
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact-panel"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-quantum px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                Start a Project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
