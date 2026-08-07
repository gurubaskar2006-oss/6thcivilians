'use client'

import { Reveal } from '@/components/motion'

export function SectionDivider() {
  return (
    <div className="flex w-full justify-center -my-10 relative z-10 pointer-events-none">
      <Reveal>
        <div className="h-20 w-[2px] bg-border opacity-30" />
      </Reveal>
    </div>
  )
}
