'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useIsReducedMotion } from '@/components/motion'

export function HeroSignatureVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useIsReducedMotion()
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reduced) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // Calculate normalized -1 to 1 coordinates relative to center
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setCoords({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      })
    }

    const handleMouseLeave = () => {
      setCoords({ x: 0, y: 0 })
    }

    const elem = containerRef.current
    if (elem) {
      elem.addEventListener('mousemove', handleMouseMove)
      elem.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (elem) {
        elem.removeEventListener('mousemove', handleMouseMove)
        elem.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [reduced])

  // Calculated tilt angles
  const rotateX = reduced ? 0 : coords.y * -14
  const rotateY = reduced ? 0 : coords.x * 16

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-square max-h-[460px] border border-border bg-card/60 p-6 flex flex-col justify-between overflow-hidden cursor-crosshair select-none"
      style={{ perspective: 1000 }}
    >
      {/* Background Architectural Grid Marks */}
      <div className="absolute inset-0 arch-grid opacity-30 pointer-events-none" />

      {/* Top Registration Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/80 pb-3 text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-zinc-200 tracking-wider">GEOMETRIC_ARCHITECTURE</span>
        </div>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">PROP_MATRIX // 01</span>
      </div>

      {/* 3D Kinetic Geometric Visual Stage */}
      <motion.div
        className="relative my-auto flex items-center justify-center h-full w-full"
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Layer 1: Outer Ambient Ring (Deepest Z) */}
        <div
          className="absolute h-56 w-56 sm:h-64 sm:w-64 rounded-full border border-dashed border-zinc-800 pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* Layer 2: Concentric Octagon Frame */}
        <svg
          className="absolute h-64 w-64 sm:h-72 sm:w-72 text-zinc-700/60 pointer-events-none"
          viewBox="0 0 200 200"
          style={{ transform: 'translateZ(-20px)' }}
        >
          <polygon
            points="60,20 140,20 180,60 180,140 140,180 60,180 20,140 20,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Layer 3: Rotated Precision Diamond */}
        <motion.div
          className="absolute h-40 w-40 sm:h-48 sm:w-48 border border-zinc-600/80 pointer-events-none"
          style={{ transform: 'translateZ(10px) rotate(45deg)' }}
          animate={reduced ? undefined : { rotate: [45, 225, 405] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />

        {/* Layer 4: Floating Isometric Cube Lines */}
        <svg
          className="relative h-44 w-44 sm:h-52 sm:w-52 text-emerald-500/80 pointer-events-none"
          viewBox="0 0 200 200"
          style={{ transform: 'translateZ(35px)' }}
        >
          {/* Top Isometric Plane */}
          <polygon
            points="100,35 155,67 100,99 45,67"
            fill="rgba(16, 185, 129, 0.04)"
            stroke="rgba(16, 185, 129, 0.7)"
            strokeWidth="1.2"
          />
          {/* Left Isometric Plane */}
          <polygon
            points="45,67 100,99 100,165 45,133"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1"
          />
          {/* Right Isometric Plane */}
          <polygon
            points="100,99 155,67 155,133 100,165"
            fill="rgba(16, 185, 129, 0.08)"
            stroke="rgba(16, 185, 129, 0.4)"
            strokeWidth="1"
          />

          {/* Core Geometric Crosshairs */}
          <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

          {/* Focal Central Point */}
          <circle cx="100" cy="99" r="4" fill="#10B981" />
          <circle cx="100" cy="99" r="8" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.6" />
        </svg>

        {/* Dynamic Coordinate Telemetry following cursor */}
        <div
          className="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-500 pointer-events-none"
          style={{ transform: 'translateZ(50px)' }}
        >
          <span>AXIS: [{coords.x.toFixed(2)}, {coords.y.toFixed(2)}]</span>
        </div>
      </motion.div>

      {/* Bottom Architectural Spec Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-border/80 pt-3 text-[10px] font-mono text-zinc-400">
        <span className="text-zinc-500">6TH CIVILIANS CORPORATION</span>
        <span className="text-emerald-400 font-semibold tracking-wider">FOUNDATION ARCHITECTURE</span>
      </div>

      {/* Subtle Corner Crosses */}
      <div className="absolute top-2 left-2 text-[10px] font-mono text-zinc-600 pointer-events-none">+</div>
      <div className="absolute top-2 right-2 text-[10px] font-mono text-zinc-600 pointer-events-none">+</div>
      <div className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-600 pointer-events-none">+</div>
      <div className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-600 pointer-events-none">+</div>
    </div>
  )
}
