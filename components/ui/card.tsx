"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "elevated" | "flat";

type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  interactive?: boolean;
  variant?: CardVariant;
};

export function Card({
  children,
  className,
  glow = false,
  interactive = true,
  variant = "default"
}: CardProps) {
  return (
    <motion.div
      whileHover={
        interactive
          ? {
              y: -10,
              boxShadow: glow
                ? "0 0 0 3px rgba(169,44,42,0.10), 0 32px 64px rgba(92,81,68,0.16)"
                : "0 32px 64px rgba(92,81,68,0.16)"
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "frosted-noise relative overflow-hidden",
        variant === "default" && "surface-card",
        variant === "elevated" && "surface-card shadow-lift",
        variant === "flat" && "rounded-[28px] border border-white/60 bg-white/60",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

