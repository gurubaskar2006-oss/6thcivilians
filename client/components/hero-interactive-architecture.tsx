'use client'

import { useEffect, useRef } from 'react'
import { useIsReducedMotion } from '@/components/motion'

interface Node {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
  layer: number
  alpha: number
  connections: number[]
}

export function HeroInteractiveArchitecture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useIsReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1))
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1))

    let mouseX = width / 2
    let mouseY = height / 2
    let targetMouseX = width / 2
    let targetMouseY = height / 2

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1)
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMouseX = (e.clientX - rect.left) * (window.devicePixelRatio || 1)
      targetMouseY = (e.clientY - rect.top) * (window.devicePixelRatio || 1)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Generate technical nodes
    const nodeCount = 36
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      const bx = (0.15 + Math.random() * 0.7) * width
      const by = (0.15 + Math.random() * 0.7) * height
      nodes.push({
        x: bx,
        y: by,
        baseX: bx,
        baseY: by,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 2 + Math.random() * 2,
        layer: 0.5 + Math.random() * 0.5,
        alpha: 0.25 + Math.random() * 0.45,
        connections: [],
      })
    }

    // Connect close neighbors
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX
        const dy = nodes[i].baseY - nodes[j].baseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < width * 0.22 && nodes[i].connections.length < 3) {
          nodes[i].connections.push(j)
        }
      }
    }

    let t = 0

    const render = () => {
      t += 0.015

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04
      mouseY += (targetMouseY - mouseY) * 0.04

      const offsetX = (mouseX - width / 2) * 0.03
      const offsetY = (mouseY - height / 2) * 0.03

      ctx.clearRect(0, 0, width, height)

      // 1. Draw subtle coordinate grid markers
      ctx.save()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1

      const gridSpacing = 80 * (window.devicePixelRatio || 1)
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = gridSpacing; y < height; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.restore()

      // 2. Draw connections between nodes
      ctx.save()
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        const n1x = n1.x + offsetX * n1.layer
        const n1y = n1.y + offsetY * n1.layer

        for (const targetIdx of n1.connections) {
          const n2 = nodes[targetIdx]
          const n2x = n2.x + offsetX * n2.layer
          const n2y = n2.y + offsetY * n2.layer

          const grad = ctx.createLinearGradient(n1x, n1y, n2x, n2y)
          grad.addColorStop(0, `rgba(16, 185, 129, ${n1.alpha * 0.35})`)
          grad.addColorStop(1, `rgba(6, 182, 212, ${n2.alpha * 0.2})`)

          ctx.strokeStyle = grad
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(n1x, n1y)
          ctx.lineTo(n2x, n2y)
          ctx.stroke()
        }
      }
      ctx.restore()

      // 3. Draw nodes and data pulses
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]

        // Small continuous organic drift
        n.x += n.vx
        n.y += n.vy

        if (n.x < n.baseX - 40 || n.x > n.baseX + 40) n.vx *= -1
        if (n.y < n.baseY - 40 || n.y > n.baseY + 40) n.vy *= -1

        const nx = n.x + offsetX * n.layer
        const ny = n.y + offsetY * n.layer

        // Node dot
        ctx.beginPath()
        ctx.arc(nx, ny, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(52, 211, 153, ${n.alpha})`
        ctx.fill()

        // Subtle outer pulse ring on some nodes
        if (i % 4 === 0) {
          const pulseRadius = n.radius + Math.sin(t + i) * 6 + 6
          ctx.beginPath()
          ctx.arc(nx, ny, Math.max(pulseRadius, 1), 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(16, 185, 129, ${(0.3 + Math.sin(t + i) * 0.2) * 0.4})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [reduced])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-60 mix-blend-screen" />
      {/* Soft dark radial mask to focus attention on typography */}
      <div className="absolute inset-0 bg-radial from-transparent via-background/60 to-background" />
    </div>
  )
}
