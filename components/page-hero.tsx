"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeUp } from "@/lib/animations";

type PageHeroProps = {
  children?: React.ReactNode;
  description: string;
  label: string;
  title: string;
};

export function PageHero({ children, description, label, title }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-hero-glow blur-3xl opacity-80" />
      <div className="absolute right-[8%] top-24 -z-10 h-44 w-44 rounded-full bg-brand/8 blur-3xl" />
      <motion.div
        className="absolute left-[6%] top-36 -z-10 h-32 w-32 rounded-full bg-sage/30 blur-3xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="paper-panel ambient-ring p-8 sm:p-10 lg:p-12"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="accent">{label}</Badge>
          </motion.div>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1, y: 0,
                transition: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="mt-5 max-w-3xl text-balance text-4xl leading-tight sm:text-5xl lg:text-[4rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1, y: 0,
                transition: { duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="mt-5 max-w-2xl text-base sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
        {children ? <div className="space-y-4">{children}</div> : null}
      </div>
    </section>
  );
}

