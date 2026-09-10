'use client'

import { motion } from 'framer-motion'
import { useIsReducedMotion } from '@/components/motion'

export function SoftwareEngineeringSchematic() {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full h-44 md:h-48 border border-border bg-card p-4 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Top console bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2 text-[10px] text-zinc-400 uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-zinc-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          DISTRIBUTED_CORE_PIPELINE
        </span>
        <span className="text-zinc-500">LATENCY: &lt;14ms · FAULT_TOLERANT</span>
      </div>

      {/* Interactive architecture diagram */}
      <div className="relative z-10 my-auto grid grid-cols-4 gap-2 md:gap-4 items-center">
        {/* Node 1 */}
        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">EDGE / API</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">REST / GraphQL</span>
        </div>

        {/* Vector 1 */}
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-border" />
          {!reduced && (
            <motion.div
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              className="absolute h-1.5 w-1.5 bg-emerald-400"
            />
          )}
        </div>

        {/* Node 2 */}
        <div className="flex flex-col items-center text-center p-2.5 border border-emerald-500/50 bg-emerald-500/10">
          <span className="text-[10px] text-emerald-300 font-semibold">SERVICES</span>
          <span className="text-[9px] text-zinc-300 mt-0.5">Event-Driven Core</span>
        </div>

        {/* Node 3 */}
        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">PERSISTENCE</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">ACID Data Layer</span>
        </div>
      </div>

      {/* Bottom status indicators */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] text-zinc-500">
        <span>SECURITY: TLS 1.3 · ZERO-TRUST</span>
        <span className="text-zinc-400">REPLICATED CLUSTER [3/3 HEALTHY]</span>
      </div>
    </div>
  )
}

export function AISchematic() {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full h-44 md:h-48 border border-border bg-card p-4 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2 text-[10px] text-zinc-400 uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-zinc-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          APPLIED_INTELLIGENCE_LAYER
        </span>
        <span className="text-zinc-500">INFERENCE: FP16 · AGENT_ROUTER</span>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-4 gap-2 md:gap-4 items-center">
        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">DATA EMBED</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Vector Store</span>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-border" />
          {!reduced && (
            <motion.div
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute h-1.5 w-1.5 bg-emerald-400"
            />
          )}
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-emerald-500/50 bg-emerald-500/10">
          <span className="text-[10px] text-emerald-300 font-semibold">LLM ENGINE</span>
          <span className="text-[9px] text-zinc-300 mt-0.5">RAG & Workflows</span>
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">EXECUTION</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Autonomous Ops</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] text-zinc-500">
        <span>EVALUATION: ACCURACY 99.4%</span>
        <span className="text-zinc-400">GUARDRAIL_FILTER: ACTIVE</span>
      </div>
    </div>
  )
}

export function DigitalProductsSchematic() {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full h-44 md:h-48 border border-border bg-card p-4 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2 text-[10px] text-zinc-400 uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-zinc-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          PRODUCT_ENGINEERING_MATRIX
        </span>
        <span className="text-zinc-500">STATE: REACTIVE · MULTI-TENANT</span>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-4 gap-2 md:gap-4 items-center">
        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">DESIGN TOKENS</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Semantic Core</span>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-border" />
          {!reduced && (
            <motion.div
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              className="absolute h-1.5 w-1.5 bg-emerald-400"
            />
          )}
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-emerald-500/50 bg-emerald-500/10">
          <span className="text-[10px] text-emerald-300 font-semibold">SAAS ENGINE</span>
          <span className="text-[9px] text-zinc-300 mt-0.5">Isolated Tenants</span>
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">OMNICHANNEL</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Web & Mobile</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] text-zinc-500">
        <span>ACCESSIBILITY: WCAG 2.1 AA</span>
        <span className="text-zinc-400">RENDER_LATENCY: 60FPS</span>
      </div>
    </div>
  )
}

export function CloudInfrastructureSchematic() {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full h-44 md:h-48 border border-border bg-card p-4 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2 text-[10px] text-zinc-400 uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-zinc-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          MULTI_CLOUD_TOPOLOGY
        </span>
        <span className="text-zinc-500">UPTIME: 99.99% · AUTO_SCALE</span>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-4 gap-2 md:gap-4 items-center">
        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">GLOBAL CDN</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Edge Caching</span>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-border" />
          {!reduced && (
            <motion.div
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              className="absolute h-1.5 w-1.5 bg-emerald-400"
            />
          )}
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-emerald-500/50 bg-emerald-500/10">
          <span className="text-[10px] text-emerald-300 font-semibold">K8S CLUSTER</span>
          <span className="text-[9px] text-zinc-300 mt-0.5">Container Pods</span>
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">OBSERVABILITY</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Metrics & Tracing</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] text-zinc-500">
        <span>CI/CD: GIT_OPS IMMUTABLE</span>
        <span className="text-zinc-400">MULTI_REGION FAILOVER: READY</span>
      </div>
    </div>
  )
}

export function ConsultingSchematic() {
  const reduced = useIsReducedMotion()

  return (
    <div className="relative w-full h-44 md:h-48 border border-border bg-card p-4 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2 text-[10px] text-zinc-400 uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-zinc-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          ENTERPRISE_ADVISORY_RADAR
        </span>
        <span className="text-zinc-500">GOVERNANCE: DISCIPLINED · AUDITED</span>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-4 gap-2 md:gap-4 items-center">
        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">SYSTEM AUDIT</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Code & Topology</span>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="h-px w-full bg-border" />
          {!reduced && (
            <motion.div
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: 'linear' }}
              className="absolute h-1.5 w-1.5 bg-emerald-400"
            />
          )}
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-emerald-500/50 bg-emerald-500/10">
          <span className="text-[10px] text-emerald-300 font-semibold">TARGET BLUEPRINT</span>
          <span className="text-[9px] text-zinc-300 mt-0.5">Scalable Schemas</span>
        </div>

        <div className="flex flex-col items-center text-center p-2.5 border border-border bg-secondary/50">
          <span className="text-[10px] text-zinc-200 font-semibold">ROADMAP</span>
          <span className="text-[9px] text-zinc-400 mt-0.5">Iterative Delivery</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] text-zinc-500">
        <span>SECURITY AUDIT: OWASP TOP 10</span>
        <span className="text-zinc-400">ENTERPRISE RESILIENCE: VERIFIED</span>
      </div>
    </div>
  )
}
