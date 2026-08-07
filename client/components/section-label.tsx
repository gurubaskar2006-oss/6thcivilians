'use client'

import { Reveal } from '@/components/motion'

/** Small HUD-style eyebrow with reticle marks + index. */
export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-quantum">
          <span className="h-px w-6 bg-quantum/60" />
          <span className="font-display text-xs tracking-brand uppercase">{index}</span>
        </span>
        <span className="text-xs tracking-brand text-muted-foreground uppercase">{label}</span>
      </div>
    </Reveal>
  )
}
