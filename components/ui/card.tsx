"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        interactive
          ? {
              y: -8,
              boxShadow: "0 28px 60px rgba(92, 81, 68, 0.14)"
            }
          : undefined
      }
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn("surface-card frosted-noise relative overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}
