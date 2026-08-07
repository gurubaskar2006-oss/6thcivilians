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
      alt="6th Civilians Logo"
      className={cn('h-10 w-10 object-contain rounded-full shadow-lg ring-1 ring-white/10', className)}
    />
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-4', className)}>
      <LogoMark className="h-12 w-12 shrink-0" />
      <span className="application-header-title mt-1 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
        6th Civilians
      </span>
    </span>
  )
}
