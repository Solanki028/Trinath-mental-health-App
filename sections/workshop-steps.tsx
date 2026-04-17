"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

const steps = [
  {
    number: "01",
    title: "Browse upcoming workshops",
    desc: "See what's next — choose the topic that feels closest to what you're carrying right now."
  },
  {
    number: "02",
    title: "Join the live session",
    desc: "No need to have it together. Show up exactly as you are — our expert facilitators hold the space."
  },
  {
    number: "03",
    title: "Learn alongside others",
    desc: "You're not alone in this room. Hearing others often unlocks something in yourself."
  },
  {
    number: "04",
    title: "Apply what fits your life",
    desc: "Walk away with 2–3 real techniques. Not a homework list — just what actually helps."
  }
];

export function WorkshopSteps() {
  return (
    <section className="py-20 sm:py-24" style={{ backgroundColor: "#f3f7f4" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          className="mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="block text-xs font-bold uppercase tracking-[0.28em]"
            style={text.gold}
          >
            How it works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
            style={text.forest}
          >
            Four simple steps to showing up
          </motion.h2>
        </motion.div>

        {/* ── Step row ── */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-line/40 lg:block" />

          <motion.div
            className="grid gap-8 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {steps.map((step) => (
              <motion.div key={step.number} variants={fadeUp} className="relative">
                {/* Step circle */}
                <div
                  className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 text-sm font-bold"
                  style={{ borderColor: "#1c2e22", color: "#1c2e22", backgroundColor: "#f3f7f4" }}
                >
                  {step.number}
                </div>
                <h3 className="text-base font-semibold leading-snug" style={text.forest}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
