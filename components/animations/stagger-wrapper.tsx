"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type StaggerWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
};

export function StaggerWrapper({ children, className, delay = 0, staggerDelay = 0.12 }: StaggerWrapperProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
