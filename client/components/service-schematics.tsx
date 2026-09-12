'use client'

import { motion } from 'framer-motion'
import { useIsReducedMotion } from '@/components/motion'

interface PracticeMotifProps {
  id: string
}

export function PracticeVisualMotif({ id }: PracticeMotifProps) {
  const reduced = useIsReducedMotion()

  switch (id) {
    case 'software-engineering':
      return (
        <div className="relative w-full h-40 md:h-44 border border-border bg-zinc-950/70 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-2 text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ENGINEERING_PRACTICE // 01
            </span>
            <span className="text-zinc-500 uppercase">MODULAR_SYSTEMS</span>
          </div>

          {/* Abstract Modular Architecture Visual */}
          <div className="my-auto flex items-center justify-center">
            <svg className="h-24 w-full max-w-sm text-zinc-600" viewBox="0 0 320 80">
              {/* Connected Structural Blocks */}
              <rect x="20" y="20" width="60" height="40" rx="2" fill="rgba(255,255,255,0.02)" stroke="currentColor" strokeWidth="1" />
              <line x1="80" y1="40" x2="130" y2="40" stroke="#10B981" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="130" y="15" width="70" height="50" rx="2" fill="rgba(16,185,129,0.06)" stroke="#10B981" strokeWidth="1.2" />
              <line x1="200" y1="40" x2="240" y2="40" stroke="#10B981" strokeWidth="1.2" strokeDasharray="3 3" />
              <rect x="240" y="20" width="60" height="40" rx="2" fill="rgba(255,255,255,0.02)" stroke="currentColor" strokeWidth="1" />

              {/* Node Labels */}
              <text x="50" y="44" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">CORE</text>
              <text x="165" y="44" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace" fontWeight="bold">RUNTIME</text>
              <text x="270" y="44" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace">DATA</text>
            </svg>
          </div>

          <div className="flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
            <span>METHODOLOGY: FIRST-PRINCIPLES</span>
            <span className="text-zinc-300">DETERMINISTIC TYPE-SAFETY</span>
          </div>
        </div>
      )

    case 'ai-intelligent-systems':
      return (
        <div className="relative w-full h-40 md:h-44 border border-border bg-zinc-950/70 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-2 text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ENGINEERING_PRACTICE // 02
            </span>
            <span className="text-zinc-500 uppercase">INTELLIGENT_PIPELINES</span>
          </div>

          {/* Abstract Synthesis Matrix */}
          <div className="my-auto flex items-center justify-center">
            <svg className="h-24 w-full max-w-sm text-zinc-600" viewBox="0 0 320 80">
              {/* Multi-node Synthesis Lattices */}
              <circle cx="40" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="40" cy="55" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
              <line x1="48" y1="25" x2="130" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
              <line x1="48" y1="55" x2="130" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

              {/* Central Transformer Node */}
              <polygon points="135,20 185,20 200,40 185,60 135,60 120,40" fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="1.2" />
              <text x="160" y="43" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace" fontWeight="bold">SYNTHESIS</text>

              <line x1="200" y1="40" x2="260" y2="40" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="270" cy="40" r="10" fill="none" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="270" cy="40" r="3" fill="#10B981" />
            </svg>
          </div>

          <div className="flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
            <span>PIPELINE: RETRIEVAL & CONTEXT</span>
            <span className="text-zinc-300">ACTIONABLE DECISION ENGINES</span>
          </div>
        </div>
      )

    case 'digital-products':
      return (
        <div className="relative w-full h-40 md:h-44 border border-border bg-zinc-950/70 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-2 text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ENGINEERING_PRACTICE // 03
            </span>
            <span className="text-zinc-500 uppercase">PRODUCT_EXPERIENCE</span>
          </div>

          {/* Layered Viewport & Token Stack Visual */}
          <div className="my-auto flex items-center justify-center">
            <svg className="h-24 w-full max-w-sm text-zinc-600" viewBox="0 0 320 80">
              {/* Viewport Frame */}
              <rect x="40" y="15" width="130" height="50" rx="3" fill="rgba(255,255,255,0.02)" stroke="currentColor" strokeWidth="1" />
              <line x1="40" y1="26" x2="170" y2="26" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
              <circle cx="50" cy="20" r="2" fill="#71717A" />
              <circle cx="57" cy="20" r="2" fill="#71717A" />
              <circle cx="64" cy="20" r="2" fill="#71717A" />

              {/* Overlapping Token Layer */}
              <rect x="150" y="25" width="120" height="40" rx="2" fill="rgba(16,185,129,0.06)" stroke="#10B981" strokeWidth="1.2" />
              <text x="210" y="49" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace" fontWeight="bold">DESIGN SYSTEM</text>
            </svg>
          </div>

          <div className="flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
            <span>FOCUS: CLARITY & ERGONOMICS</span>
            <span className="text-zinc-300">ACCESSIBLE COMPONENT ARCHITECTURE</span>
          </div>
        </div>
      )

    case 'cloud-infrastructure':
      return (
        <div className="relative w-full h-40 md:h-44 border border-border bg-zinc-950/70 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-2 text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ENGINEERING_PRACTICE // 04
            </span>
            <span className="text-zinc-500 uppercase">DISTRIBUTED_FOUNDATIONS</span>
          </div>

          {/* Abstract Cloud Network Topology */}
          <div className="my-auto flex items-center justify-center">
            <svg className="h-24 w-full max-w-sm text-zinc-600" viewBox="0 0 320 80">
              {/* Outer Perimeter */}
              <polygon points="160,10 240,40 160,70 80,40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" strokeDasharray="4 4" />
              {/* Inner Resilient Core */}
              <polygon points="160,22 210,40 160,58 110,40" fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="160" cy="40" r="4" fill="#10B981" />
              <circle cx="110" cy="40" r="3" fill="#71717A" />
              <circle cx="210" cy="40" r="3" fill="#71717A" />
              <text x="160" y="52" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace">CLUSTER</text>
            </svg>
          </div>

          <div className="flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
            <span>RESILIENCE: MULTI-REGION READINESS</span>
            <span className="text-zinc-300">INFRASTRUCTURE AS CODE</span>
          </div>
        </div>
      )

    default:
      return (
        <div className="relative w-full h-40 md:h-44 border border-border bg-zinc-950/70 p-4 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between border-b border-border/80 pb-2 text-[10px] font-mono text-zinc-400">
            <span className="flex items-center gap-2 text-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ENGINEERING_PRACTICE // 05
            </span>
            <span className="text-zinc-500 uppercase">STRATEGIC_ADVISORY</span>
          </div>

          {/* Abstract Modernization Matrix */}
          <div className="my-auto flex items-center justify-center">
            <svg className="h-24 w-full max-w-sm text-zinc-600" viewBox="0 0 320 80">
              <rect x="30" y="25" width="70" height="30" rx="2" fill="rgba(255,255,255,0.02)" stroke="currentColor" strokeWidth="1" />
              <line x1="100" y1="40" x2="140" y2="40" stroke="#10B981" strokeWidth="1.2" markerEnd="url(#arrow)" />
              <rect x="140" y="20" width="80" height="40" rx="2" fill="rgba(16,185,129,0.06)" stroke="#10B981" strokeWidth="1.2" />
              <line x1="220" y1="40" x2="250" y2="40" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="260" cy="40" r="8" fill="none" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="260" cy="40" r="3" fill="#10B981" />

              <text x="65" y="44" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">AUDIT</text>
              <text x="180" y="44" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">ROADMAP</text>
            </svg>
          </div>

          <div className="flex items-center justify-between border-t border-border/80 pt-2 text-[10px] font-mono text-zinc-500">
            <span>ENGAGEMENT: EMBEDDED TECHNICAL LEADERSHIP</span>
            <span className="text-zinc-300">ENTERPRISE LONGEVITY</span>
          </div>
        </div>
      )
  }
}
