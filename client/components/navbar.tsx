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
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500', scrolled ? 'py-3' : 'py-5')}>
        <a href="#top" aria-label="6th Civilians Corporation home" className="focus:outline-none focus:ring-2 focus:ring-emerald-400/50 rounded-lg p-1">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground focus:outline-none focus:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={brand.academy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.35)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>Ewdth Academy</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <MagneticButton href="#contact">Work With Us</MagneticButton>
        </div>

        <button
          className="text-foreground p-2 rounded-lg border border-border/50 lg:hidden focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-border bg-background/98 backdrop-blur-2xl lg:hidden shadow-2xl">
          <ul className="flex flex-col gap-2 px-6 py-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-border/50">
              <a
                href={brand.academy.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-400"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Ewdth Academy ↗
                </span>
                <span className="text-[11px] text-muted-foreground font-normal lowercase">education division</span>
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
              >
                Work With Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
