'use client'

import { cn } from '@/lib/utils'

/**
 * 6th Civilians logo mark.
 * A metallic "6" opening into a "C" ring, a glowing green quantum atom at the
 * center (nucleus + electron orbits), crosshair reticle lines, and a horizontal
 * waveform running through it. Swap this for a final SVG/PNG asset when ready:
 *   -> replace the <svg> contents below, or render an <img src="/images/logo.svg" />
 */
export function LogoMark({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="6th Civilians Corporation Logo"
      className={cn('h-10 w-10 object-contain rounded-full shadow-lg ring-1 ring-white/10', className)}
    />
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
          6th Civilians
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-400">
          Corporation
        </span>
      </span>
    </span>
  )
}
