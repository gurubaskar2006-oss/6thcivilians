import type { Pillar } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";

export default function PillarCard({ index, title, copy }: Pillar) {
  return (
    <GlassCard className="flex w-[82vw] shrink-0 flex-col justify-between gap-24 p-8 md:h-[26rem] md:w-[460px] md:p-10 lg:w-[520px]">
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium tracking-[0.3em] text-muted">
          {index}
        </span>
        <span
          aria-hidden
          className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-display text-4xl font-medium tracking-tight text-metal md:text-5xl">
          {title}
        </h3>
        <p className="max-w-sm text-balance leading-[1.8] text-secondary">
          {copy}
        </p>
      </div>
    </GlassCard>
  );
}
