import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  metal?: boolean;
};

export default function GlassCard({
  metal = false,
  className,
  children,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(metal ? "glass-metal" : "glass-card", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
