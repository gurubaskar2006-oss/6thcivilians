'use client'

import { useEffect, useState, useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from 'framer-motion'
import type { ReactNode } from 'react'

export const EASE = [0.16, 1, 0.3, 1] as const
export const EASE_FAST = [0.25, 1, 0.5, 1] as const

export function useIsReducedMotion() {
  const reduced = useReducedMotion()
  return !!reduced
}

export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

/** Directional clip-path reveal for editorial headers */
export function ClipReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  const reduced = useIsReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay, duration, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/** Hairline border tracing that draws on view */
export function LineDraw({
  className,
  direction = 'horizontal',
  delay = 0,
}: {
  className?: string
  direction?: 'horizontal' | 'vertical'
  delay?: number
}) {
  const reduced = useIsReducedMotion()

  if (reduced) {
    return (
      <div
        className={`${className || ''} ${
          direction === 'horizontal' ? 'h-px w-full' : 'w-px h-full'
        } bg-border`}
      />
    )
  }

  return (
    <motion.div
      className={`${className || ''} bg-border`}
      initial={direction === 'horizontal' ? { scaleX: 0, transformOrigin: 'left' } : { scaleY: 0, transformOrigin: 'top' }}
      whileInView={direction === 'horizontal' ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.9, ease: EASE }}
      style={direction === 'horizontal' ? { height: '1px', width: '100%' } : { width: '1px', height: '100%' }}
    />
  )
}

/** Standard Reveal with reduced motion fallback */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: any
  style?: React.CSSProperties
}) {
  const reduced = useIsReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  if (reduced) {
    const Tag = as
    return <Tag className={className} style={style}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      style={style}
    >
      {children}
    </MotionTag>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return <div className={className}>{children}</div>
}

/** Tactile cursor tilt interaction */
export function useTiltInteraction() {
  const reduced = useIsReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 200, damping: 22 })
  const sry = useSpring(ry, { stiffness: 200, damping: 22 })
  const rotateX = useTransform(srx, [-0.5, 0.5], ['4deg', '-4deg'])
  const rotateY = useTransform(sry, [-0.5, 0.5], ['-4deg', '4deg'])

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rx.set((e.clientY - rect.top) / rect.height - 0.5)
    ry.set((e.clientX - rect.left) / rect.width - 0.5)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return {
    ref,
    onMove,
    reset,
    style: { rotateX, rotateY, transformStyle: 'preserve-3d' as const },
  }
}
