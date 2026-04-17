"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: Variants;
};

export function Reveal({ children, className, delay = 0, y = 28, variant }: RevealProps) {
  const resolvedVariant: Variants = variant ?? {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // If using default variant but with delay, inject it
  if (!variant && delay && resolvedVariant.visible) {
    (resolvedVariant.visible as { transition: { delay: number } }).transition.delay = delay;
  }

  return (
    <motion.div
      variants={resolvedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

