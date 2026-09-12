'use client'

import { cn } from '@/lib/utils'

/**
 * 6th Civilians Corporation official logo mark.
 * Preserves the authentic 6C circular emblem with green nucleus and wings.
 */
export function LogoMark({ className }: { className?: string; animated?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="6th Civilians Corporation Logo"
      className={cn(
        'h-9 w-9 object-contain rounded-full shadow-sm ring-1 ring-black/10 dark:ring-white/10 transition-transform duration-300 hover:scale-105 shrink-0',
        className,
      )}
    />
  )
}

export function Wordmark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('flex items-center gap-3 select-none', className)}>
      <LogoMark className="h-9 w-9" />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            'font-display text-sm sm:text-base font-extrabold uppercase tracking-tight transition-colors',
            light ? 'text-white' : 'text-[#111514]',
          )}
        >
          6TH CIVILIANS
        </span>
        <span
          className={cn(
            'text-[8px] sm:text-[9.5px] font-bold uppercase tracking-[0.2em] mt-0.5 transition-colors',
            light ? 'text-[#35D07F]' : 'text-[#0B5D4F]',
          )}
        >
          CORPORATION
        </span>
      </span>
    </span>
  )
}

export function HeaderWordmark({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5 sm:gap-3 select-none', className)}>
      <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
      <span className="flex flex-col justify-center leading-none">
        <span className="font-display text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#111514]">
          6TH CIVILIANS
        </span>
        <span className="text-[8px] sm:text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#0B5D4F] mt-0.5">
          CORPORATION
        </span>
      </span>
    </span>
  )
}
