'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useMotionValue, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { ScrollSequence } from './scroll-sequence'

interface ScrollOrchestratorProps {
  hero: ReactNode
  about: ReactNode
  services: ReactNode
  process: ReactNode
  team: ReactNode
  contact: ReactNode
  footer: ReactNode
}

const ACTIVE_FRAME_COUNT = 1020

type FrameSegment = {
  id: string
  from: number
  to: number
  pStart: number
  pEnd: number
}

/**
 * Scroll-animation frame ranges assigned to each section. The services section
 * is split across its four clusters so the background reaches frame 500 when
 * the software block is in view, 561 for cloud & AI, 699 for hardware & IoT,
 * 795 for support & growth. Team and contact split the remaining frames.
 */
const FRAME_SEGMENTS = [
  { id: 'hero-panel', from: 1, to: 340 },
  { id: 'about-panel', from: 341, to: 460 },
  { id: 'process-panel', from: 461, to: 541 },
  { id: 'services-software', from: 542, to: 643 },
  { id: 'services-cloud', from: 644, to: 752 },
  { id: 'services-hardware', from: 753, to: 874 },
  { id: 'services-growth', from: 875, to: 900 },
  { id: 'team-panel', from: 901, to: 960 },
  { id: 'contact-panel', from: 961, to: 1020 },
]

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export function ScrollOrchestrator({
  hero,
  about,
  services,
  process,
  team,
  contact,
  footer
}: ScrollOrchestratorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const segmentsRef = useRef<FrameSegment[]>([])
  const [measured, setMeasured] = useState(0)

  // Measured section positions mapped to the page's scrollable distance.
  const measure = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    const total = Math.max(container.scrollHeight - window.innerHeight, 1)
    const containerRect = container.getBoundingClientRect()

    const segments: FrameSegment[] = []
    for (const seg of FRAME_SEGMENTS) {
      const el = container.querySelector<HTMLElement>(`#${seg.id}`)
      if (!el) continue
      const top = el.getBoundingClientRect().top - containerRect.top
      const bottom = top + el.offsetHeight
      segments.push({ ...seg, pStart: top / total, pEnd: bottom / total })
    }
    segmentsRef.current = segments
    setMeasured((v) => v + 1)
  }, [])

  useEffect(() => {
    measure()
    const raf = requestAnimationFrame(measure)
    const retry = setTimeout(measure, 500)
    window.addEventListener('resize', measure)
    window.addEventListener('load', measure)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(retry)
      window.removeEventListener('resize', measure)
      window.removeEventListener('load', measure)
    }
  }, [measure])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 55,
    mass: 1
  })

  // Bump forces the transform to recompute after re-measuring sections.
  const measureTick = useMotionValue(0)

  const frameProgress = useTransform(
    [smoothProgress, measureTick] as MotionValue<number>[],
    ([progress]) => {
      const segments = segmentsRef.current
      if (!segments.length) return clamp(progress as number, 0, 1)

      let active = segments[0]
      for (const seg of segments) {
        if ((progress as number) >= seg.pStart) active = seg
        else break
      }

      const span = active.pEnd - active.pStart
      const t = span > 0 ? clamp(((progress as number) - active.pStart) / span, 0, 1) : 0
      const frame = clamp(active.from + t * (active.to - active.from), 1, ACTIVE_FRAME_COUNT)
      return (frame - 1) / (ACTIVE_FRAME_COUNT - 1)
    }
  )

  // Re-measure after images settle; also nudge the transform so it re-maps.
  useEffect(() => {
    if (measured > 0) measureTick.set(measureTick.get() + 1)
  }, [measured, measureTick])

  return (
    <div ref={containerRef} className="relative w-full">
      <ScrollSequence progress={frameProgress} frameCount={ACTIVE_FRAME_COUNT} framePath="/frames2" />

      {/* Sections in normal vertical flow */}
      <div className="relative z-10 flex flex-col w-full">
        {hero}
        {about}
        {process}
        {services}
        {team}
        {contact}
        {footer}
      </div>
    </div>
  )
}
