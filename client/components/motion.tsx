'use client'

import { useEffect, useState, useRef, createContext, useContext } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

export const EASE = [0.16, 1, 0.3, 1] as const

export function useIsReducedMotion() {
  const reduced = useReducedMotion()
  return !!reduced
}

export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

const StaggerContext = createContext<{ index: number, stagger: number } | null>(null)

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

  const staggerCtx = useContext(StaggerContext)
  const actualDelay = staggerCtx ? staggerCtx.index * staggerCtx.stagger : delay * 0.1

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: actualDelay, duration: 0.9, ease: EASE }}
      style={style}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduced = useIsReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export function useTiltInteraction() {
  const reduced = useIsReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 150, damping: 18 })
  const sry = useSpring(ry, { stiffness: 150, damping: 18 })
  const rotateX = useTransform(srx, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(sry, [-0.5, 0.5], ['-6deg', '6deg'])

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
