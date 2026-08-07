'use client'

import { createContext, useContext } from 'react'
import { MotionValue } from 'framer-motion'

export const SectionProgressContext = createContext<MotionValue<number> | null>(null)

export function useSectionProgress() {
  const context = useContext(SectionProgressContext)
  if (!context) {
    throw new Error('useSectionProgress must be used within a SectionLayer')
  }
  return context
}
