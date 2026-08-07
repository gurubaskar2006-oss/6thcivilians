import { cn } from "@/lib/cn";

type OutlineButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

export default function OutlineButton({
  href,
  className,
  children,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: OutlineButtonProps) {
  const cls = cn(
    "lift group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-chip border border-white/15 px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition-colors duration-300 hover:border-white/40 hover:text-white",
    className,
  );

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
        <span className="btn-wipe" aria-hidden />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className="btn-wipe" aria-hidden />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
