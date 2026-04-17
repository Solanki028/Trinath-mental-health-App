import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border border-line/70 bg-white/75 px-4 text-sm text-foreground outline-none transition focus:border-brand/45 focus:bg-white placeholder:text-muted-foreground/80",
        className
      )}
      {...props}
    />
  );
}
