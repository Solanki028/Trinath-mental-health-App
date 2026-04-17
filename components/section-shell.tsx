"use client";

import { motion } from "framer-motion";

import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "tinted" | "warm" | "deep";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  title?: string;
  variant?: SectionVariant;
};

export function SectionShell({
  children,
  className,
  description,
  eyebrow,
  title,
  variant = "default"
}: SectionShellProps) {
  return (
    <section
      className={cn(
        "section-padding",
        variant === "tinted" && "section-tinted",
        variant === "warm" && "section-warm",
        variant === "deep" && "section-deep",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl space-y-4">
            {eyebrow ? (
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="block text-xs font-semibold uppercase tracking-[0.26em] text-brand/70"
              >
                {eyebrow}
              </motion.span>
            ) : null}
            {title ? (
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="text-3xl leading-tight sm:text-4xl lg:text-[3rem]"
              >
                {title}
              </motion.h2>
            ) : null}
            {description ? (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="text-base sm:text-lg"
              >
                {description}
              </motion.p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

