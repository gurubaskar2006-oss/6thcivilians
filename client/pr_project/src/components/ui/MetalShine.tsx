import { cn } from "@/lib/cn";

/**
 * Metallic text. Runs a single shimmer pass as its containing reveal block
 * scrolls into view, then rests. The shimmer is pure CSS keyed off the
 * `.pre`/`.is-in` reveal classes (see globals.css) — no observer of its own,
 * and the resting state is fully visible.
 */
export default function MetalShine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-metal-shine", className)}>{children}</span>;
}
