'use client'

import { useEffect, useRef, useState } from 'react'
import { useIsReducedMotion } from '@/components/motion'

export function CivilizationOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useIsReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let isVisible = true
    let width = 0
    let height = 0
    let time = 0

    // Smooth mouse target and current coordinates
    let targetTiltX = 0
    let targetTiltY = 0
    let currentTiltX = 0
    let currentTiltY = 0

    const handleResize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const handleMouseMove = (e: MouseEvent) => {
      if (reduced) return
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      targetTiltX = Math.max(-1, Math.min(1, x))
      targetTiltY = Math.max(-1, Math.min(1, y))
      setMousePos({ x: targetTiltX, y: targetTiltY })
    }

    const handleMouseLeave = () => {
      targetTiltX = 0
      targetTiltY = 0
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Visibility Observer to completely pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(container)

    // Multi-Ring & Node Architecture definition
    const rings = [
      { radius: 140, speed: 0.008, tilt: 0.35, nodes: 12, color: 'rgba(7, 59, 50, 0.7)' },
      { radius: 110, speed: -0.012, tilt: 0.65, nodes: 9, color: 'rgba(11, 93, 79, 0.75)' },
      { radius: 80, speed: 0.016, tilt: -0.45, nodes: 7, color: 'rgba(53, 208, 127, 0.85)' },
      { radius: 55, speed: -0.02, tilt: 0.25, nodes: 5, color: 'rgba(72, 221, 235, 0.9)' },
      { radius: 35, speed: 0.025, tilt: 0.85, nodes: 4, color: 'rgba(76, 111, 255, 0.85)' },
    ]

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      time += reduced ? 0 : 0.016
      currentTiltX += (targetTiltX - currentTiltX) * 0.08
      currentTiltY += (targetTiltY - currentTiltY) * 0.08

      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2

      // Central ambient glow
      const coreGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 180)
      coreGrad.addColorStop(0, 'rgba(53, 208, 127, 0.32)')
      coreGrad.addColorStop(0.35, 'rgba(72, 221, 235, 0.16)')
      coreGrad.addColorStop(0.7, 'rgba(11, 93, 79, 0.06)')
      coreGrad.addColorStop(1, 'rgba(247, 247, 242, 0)')

      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(cx, cy, 180, 0, Math.PI * 2)
      ctx.fill()

      // Calculate 3D perspective rotation matrix
      const rotY = time * 0.4 + currentTiltX * 0.6
      const rotX = Math.sin(time * 0.3) * 0.2 + currentTiltY * 0.5

      // Render Interconnected Concentric Civilization Rings
      rings.forEach((ring, ringIdx) => {
        const ringAngle = time * ring.speed
        const points: { x: number; y: number; z: number }[] = []
        const totalPoints = 48

        for (let i = 0; i <= totalPoints; i++) {
          const theta = (i / totalPoints) * Math.PI * 2 + ringAngle
          // Base 3D circle points
          let px = Math.cos(theta) * ring.radius
          let py = Math.sin(theta) * ring.radius * Math.cos(ring.tilt)
          let pz = Math.sin(theta) * ring.radius * Math.sin(ring.tilt)

          // Apply 3D rotation Y
          const cosY = Math.cos(rotY + ringIdx * 0.25)
          const sinY = Math.sin(rotY + ringIdx * 0.25)
          const x1 = px * cosY - pz * sinY
          const z1 = px * sinY + pz * cosY

          // Apply 3D rotation X
          const cosX = Math.cos(rotX)
          const sinX = Math.sin(rotX)
          const y2 = py * cosX - z1 * sinX
          const z2 = py * sinX + z1 * cosX

          // Perspective projection
          const perspective = 400 / (400 + z2)
          points.push({
            x: cx + x1 * perspective,
            y: cy + y2 * perspective,
            z: z2,
          })
        }

        // Draw ring orbit line
        ctx.beginPath()
        points.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        })
        ctx.closePath()

        ctx.strokeStyle = ring.color
        ctx.lineWidth = ringIdx === 2 ? 1.6 : 1.1
        ctx.stroke()

        // Draw active Civilization nodes on this ring
        for (let n = 0; n < ring.nodes; n++) {
          const nodeIdx = Math.floor((n / ring.nodes) * totalPoints)
          const p = points[nodeIdx]
          if (!p) continue

          const nodeAlpha = Math.max(0.3, Math.min(1, (p.z + 150) / 300))
          const nodeRadius = 3.5 + (p.z / 180) * 1.5

          // Outer halo
          ctx.beginPath()
          ctx.arc(p.x, p.y, nodeRadius * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = ringIdx % 2 === 0
            ? `rgba(53, 208, 127, ${nodeAlpha * 0.3})`
            : `rgba(72, 221, 235, ${nodeAlpha * 0.3})`
          ctx.fill()

          // Inner solid node
          ctx.beginPath()
          ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2)
          ctx.fillStyle = ringIdx === 0
            ? `rgba(7, 59, 50, ${nodeAlpha})`
            : ringIdx === 1
            ? `rgba(11, 93, 79, ${nodeAlpha})`
            : ringIdx === 2
            ? `rgba(53, 208, 127, ${nodeAlpha})`
            : `rgba(76, 111, 255, ${nodeAlpha})`
          ctx.fill()
        }
      })

      // Central Quantum Core Node (Representative of 6C Nucleus)
      const corePulse = Math.sin(time * 2) * 2 + 10
      const coreGradCenter = ctx.createRadialGradient(cx, cy, 2, cx, cy, corePulse * 1.8)
      coreGradCenter.addColorStop(0, '#FFFFFF')
      coreGradCenter.addColorStop(0.3, '#35D07F')
      coreGradCenter.addColorStop(0.7, '#0B5D4F')
      coreGradCenter.addColorStop(1, 'rgba(7, 59, 50, 0)')

      ctx.beginPath()
      ctx.arc(cx, cy, corePulse * 1.8, 0, Math.PI * 2)
      ctx.fillStyle = coreGradCenter
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, 6, 0, Math.PI * 2)
      ctx.fillStyle = '#073B32'
      ctx.fill()

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [reduced])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none"
      aria-label="Interactive 6th Civilians Digital Civilization Sphere"
      role="img"
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#073B32]/10 via-[#35D07F]/15 to-[#48DDEB]/15 blur-3xl pointer-events-none" />

      {/* Primary Procedural Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Floating Modern Editorial Badges */}
      <div className="absolute top-4 left-4 z-20 rounded-full border border-[rgba(17,21,20,0.08)] bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono font-semibold text-[#073B32] shadow-sm flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#35D07F] animate-pulse" />
        <span>DIGITAL CIVILIZATION</span>
      </div>

      <div className="absolute bottom-4 right-4 z-20 rounded-full border border-[rgba(17,21,20,0.08)] bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono font-semibold text-[#525C58] shadow-sm">
        <span>6C CORE ECOSYSTEM</span>
      </div>
    </div>
  )
}
