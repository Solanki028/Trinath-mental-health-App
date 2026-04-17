import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "neutral";
};

export function Badge({ children, className, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-[0.14em] uppercase",
        variant === "accent"
          ? "bg-brand/10 text-brand"
          : "bg-secondary/70 text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
