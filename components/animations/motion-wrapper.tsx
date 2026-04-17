"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: Variants;
};

export function MotionWrapper({
  children,
  className,
  delay = 0,
  duration,
  variant = fadeUp
}: MotionWrapperProps) {
  // Allow delay/duration overrides via custom transition
  const customVariant: Variants = delay || duration
    ? {
        hidden: variant.hidden,
        visible: {
          ...(variant.visible as object),
          transition: {
            ...((variant.visible as { transition?: object })?.transition ?? {}),
            ...(delay ? { delay } : {}),
            ...(duration ? { duration } : {})
          }
        }
      }
    : variant;

  return (
    <motion.div
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
