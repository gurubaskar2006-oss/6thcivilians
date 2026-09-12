'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, MotionValue } from 'framer-motion'

interface ScrollSequenceProps {
  progress: MotionValue<number>
  frameCount?: number
  framePath?: string
}

const MAX_CONCURRENT_REQUESTS = 5

export function ScrollSequence({ progress, frameCount = 1080, framePath = '/frames_new' }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [initialLoaded, setInitialLoaded] = useState(false)
  
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const requestedSetRef = useRef<Set<number>>(new Set())
  const activeRequestsCountRef = useRef<number>(0)
  const queueRef = useRef<number[]>([])

  const targetFrameRef = useRef(0)
  const lastTargetFrameRef = useRef(0)
  const scrollDirectionRef = useRef<number>(1) // 1 = forward, -1 = backward
  const lastDrawnFrameRef = useRef(-1)
  const rAfRef = useRef<number>(0)

  // Worker to process pending queue items up to concurrency limit
  const pumpQueue = useCallback(() => {
    while (activeRequestsCountRef.current < MAX_CONCURRENT_REQUESTS && queueRef.current.length > 0) {
      const frameIndex = queueRef.current.shift()
      if (frameIndex === undefined) break

      // Skip if already successfully loaded
      if (imagesRef.current[frameIndex]?.complete) {
        continue
      }

      activeRequestsCountRef.current++
      const frameNumber = frameIndex + 1

      const img = new Image()
      img.decoding = 'async'
      img.src = `${framePath}/frame_${frameNumber.toString().padStart(4, '0')}.webp`

      const handleDone = async () => {
        try {
          await img.decode()
        } catch {
          // Ignore decoding cancellation errors
        }
        imagesRef.current[frameIndex] = img
        activeRequestsCountRef.current--
        pumpQueue()
      }

      img.onload = handleDone
      img.onerror = () => {
        activeRequestsCountRef.current--
        pumpQueue()
      }
    }
  }, [framePath])

  // Priority-based queue updater
  const requestFrames = useCallback((centerIndex: number, direction: number) => {
    // Priority 0: Active current frame
    // Priority 1: Next 6 frames in scroll direction
    // Priority 2: 3 frames in opposite direction
    // Priority 3: Extended lookahead (frames 7 to 18 in scroll direction)
    const candidates: number[] = []

    // Priority 0
    candidates.push(centerIndex)

    // Priority 1
    for (let i = 1; i <= 6; i++) {
      candidates.push(centerIndex + i * direction)
    }

    // Priority 2
    for (let i = 1; i <= 3; i++) {
      candidates.push(centerIndex - i * direction)
    }

    // Priority 3
    for (let i = 7; i <= 18; i++) {
      candidates.push(centerIndex + i * direction)
    }

    // Filter valid, unrequested, incomplete frames
    const newItems: number[] = []
    for (const idx of candidates) {
      if (idx >= 0 && idx < frameCount) {
        if (!imagesRef.current[idx]?.complete && !requestedSetRef.current.has(idx)) {
          requestedSetRef.current.add(idx)
          newItems.push(idx)
        }
      }
    }

    if (newItems.length > 0) {
      // Retain only nearby queued items (drop stale items outside active window)
      const minKeep = centerIndex - 12
      const maxKeep = centerIndex + 24
      const filteredQueue = queueRef.current.filter((idx) => {
        const keep = idx >= minKeep && idx <= maxKeep
        if (!keep) {
          requestedSetRef.current.delete(idx)
        }
        return keep
      })

      // Put new high-priority items at front
      queueRef.current = [...newItems, ...filteredQueue]
      pumpQueue()
    }
  }, [frameCount, pumpQueue])

  useEffect(() => {
    let isCancelled = false
    imagesRef.current = new Array(frameCount).fill(null)
    requestedSetRef.current.clear()
    queueRef.current = []
    activeRequestsCountRef.current = 0
    
    // Load first frame immediately to remove loading screen
    const img = new Image()
    img.src = `${framePath}/frame_0001.webp`
    img.onload = () => {
      if (!isCancelled) {
        imagesRef.current[0] = img
        requestedSetRef.current.add(0)
        setInitialLoaded(true)
        // Pre-warm initial forward frames on mount
        requestFrames(0, 1)
      }
    }

    return () => {
      isCancelled = true
    }
  }, [frameCount, framePath, requestFrames])

  // Update target frame from framer-motion progress and trigger direction-aware prioritized loading
  useMotionValueEvent(progress, 'change', (latest) => {
    let frameIndex = Math.floor(latest * (frameCount - 1))
    if (frameIndex < 0) frameIndex = 0
    if (frameIndex >= frameCount) frameIndex = frameCount - 1

    const direction = frameIndex >= lastTargetFrameRef.current ? 1 : -1
    scrollDirectionRef.current = direction
    lastTargetFrameRef.current = frameIndex
    targetFrameRef.current = frameIndex

    requestFrames(frameIndex, direction)
  })



  // Render Loop via rAF
  useEffect(() => {
    const render = () => {
      // Use targetFrameRef directly. Framer motion already applies a spring physics smoothing.
      // Applying another lerp here causes double-smoothing ("lag/rubber-banding").
      const frameToDraw = targetFrameRef.current

      if (canvasRef.current && initialLoaded && lastDrawnFrameRef.current !== frameToDraw) {
        const ctx = canvasRef.current.getContext('2d', { alpha: false })
        if (ctx) {
          const images = imagesRef.current
          let img = images[frameToDraw]
          
          // Fallback to nearest loaded frame if current isn't ready
          if (!img || !img.complete) {
            const dir = scrollDirectionRef.current
            for (let offset = 1; offset < 50; offset++) {
              // Prioritize the frame just behind scroll trajectory for smooth visual continuity
              const backward = images[frameToDraw - offset * dir]
              if (backward && backward.complete) { img = backward; break }
              const forward = images[frameToDraw + offset * dir]
              if (forward && forward.complete) { img = forward; break }
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
