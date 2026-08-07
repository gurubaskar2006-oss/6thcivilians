'use client'

import { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, MotionValue } from 'framer-motion'

interface ScrollSequenceProps {
  progress: MotionValue<number>
  frameCount?: number
  framePath?: string
}

export function ScrollSequence({ progress, frameCount = 1080, framePath = '/frames_new' }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [initialLoaded, setInitialLoaded] = useState(false)
  
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const targetFrameRef = useRef(0)
  const currentFrameRef = useRef(0)
  const lastDrawnFrameRef = useRef(-1)
  const rAfRef = useRef<number>()

  useEffect(() => {
    let isCancelled = false
    imagesRef.current = new Array(frameCount).fill(null)
    
    // Load first frame immediately to remove loading screen
    const img = new Image()
    img.src = `${framePath}/frame_0001.webp`
    img.onload = () => {
      if (!isCancelled) {
        imagesRef.current[0] = img
        setInitialLoaded(true)
      }
    }

    return () => {
      isCancelled = true
    }
  }, [frameCount, framePath])

  // Sliding window frame loader
  const loadFrame = (frame: number) => {
    if (frame < 1 || frame > frameCount) return
    const index = frame - 1
    if (imagesRef.current[index]) return // already loaded or loading

    // Place a placeholder so we don't request again
    const img = new Image()
    imagesRef.current[index] = img
    
    img.decoding = 'async'
    img.src = `${framePath}/frame_${frame.toString().padStart(4, '0')}.webp`
    img.onload = async () => {
      try {
        await img.decode()
      } catch {}
    }
  }

  // Update target frame from framer-motion progress and trigger window loading
  useMotionValueEvent(progress, 'change', (latest) => {
    let frameIndex = Math.floor(latest * (frameCount - 1))
    if (frameIndex < 0) frameIndex = 0
    if (frameIndex >= frameCount) frameIndex = frameCount - 1
    targetFrameRef.current = frameIndex

    // Load window around current frame
    const center = frameIndex + 1
    for (let i = center - 5; i <= center + 15; i++) {
      loadFrame(i)
    }
  })

  // Render Loop via rAF
  useEffect(() => {
    const render = () => {
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.15
      const frameToDraw = Math.round(currentFrameRef.current)

      if (canvasRef.current && initialLoaded && lastDrawnFrameRef.current !== frameToDraw) {
        const ctx = canvasRef.current.getContext('2d', { alpha: false })
        if (ctx) {
          const images = imagesRef.current
          let img = images[frameToDraw]
          
          // Fallback to nearest loaded frame if current isn't ready
          if (!img || !img.complete) {
            for (let offset = 1; offset < 20; offset++) {
              const prev = images[frameToDraw - offset]
              if (prev && prev.complete) { img = prev; break }
              const next = images[frameToDraw + offset]
              if (next && next.complete) { img = next; break }
            }
          }
          
          if (img && img.complete) {
            const canvas = canvasRef.current
            ctx.imageSmoothingEnabled = true
            ctx.imageSmoothingQuality = 'high'

            const imgRatio = img.width / img.height
            const canvasRatio = canvas.width / canvas.height
            let drawWidth = canvas.width
            let drawHeight = canvas.height
            let offsetX = 0
            let offsetY = 0

            if (canvasRatio > imgRatio) {
              drawHeight = canvas.width / imgRatio
              offsetY = (canvas.height - drawHeight) / 2
            } else {
              drawWidth = canvas.height * imgRatio
              offsetX = (canvas.width - drawWidth) / 2
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
            lastDrawnFrameRef.current = frameToDraw
          }
        }
      }
      rAfRef.current = requestAnimationFrame(render)
    }

    rAfRef.current = requestAnimationFrame(render)
    return () => {
      if (rAfRef.current) cancelAnimationFrame(rAfRef.current)
    }
  }, [initialLoaded, frameCount])

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
        canvasRef.current.width = window.innerWidth * dpr
        canvasRef.current.height = window.innerHeight * dpr
        lastDrawnFrameRef.current = -1
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 h-screen w-full overflow-hidden bg-background pointer-events-none -z-10">
      <canvas ref={canvasRef} className="w-full h-full object-cover scale-[1.15] origin-top-left" />
      <div className="absolute inset-0 bg-black/65" />
      
      {!initialLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
          <div className="animate-pulse text-quantum font-display tracking-widest text-sm">INITIALIZING QUANTUM LINK...</div>
        </div>
      )}
      
    </div>
  )
}
