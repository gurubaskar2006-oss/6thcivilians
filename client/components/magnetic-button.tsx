'use client'

/** 
 * Note: Hardcoded hex/rgba values for colors like cyan (#00D4FF) and gold (#C9A24B) 
 * in this component MUST stay in sync with --primary and --accent-secondary 
 * in globals.css, respectively, to ensure button glows match the site's palette.
 */

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useIsReducedMotion } from '@/components/motion'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
  'aria-label'?: string
}

/** A button/link with a subtle magnetic pull toward the cursor + glow. */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  ...rest
}: Props) {
  const reduced = useIsReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 200, damping: 15 })
  const y = useSpring(my, { stiffness: 200, damping: 15 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    mx.set(relX * 0.35)
    my.set(relY * 0.35)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform'
  const styles =
    variant === 'primary'
      ? 'bg-quantum text-primary-foreground shadow-[0_0_20px_-6px_rgba(0,212,255,0.2)] hover:shadow-[0_0_35px_-4px_rgba(0,212,255,0.35)]'
      : 'border border-[#C9A24B]/40 text-[#C9A24B] hover:border-[#C9A24B] hover:bg-[#C9A24B]/5 hover:text-[#C9A24B]'

  const full = className?.includes('w-full')
  const wrapperClass = cn('inline-flex', full && 'w-full')

  const content = (
    <motion.span
      ref={ref as never}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={reduced || variant !== 'primary' ? undefined : { boxShadow: ['0 0 20px -6px rgba(0,212,255,0.2)', '0 0 35px -4px rgba(0,212,255,0.35)'] }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      className={cn(base, styles, className)}
      {...rest}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={wrapperClass}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={wrapperClass}>
      {content}
    </button>
  )
}
