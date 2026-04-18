"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wind, Sparkles, Users, Repeat } from "lucide-react";

import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

const outcomes = [
  {
    icon: Wind,
    title: "Manage stress before it manages you",
    desc: "Learn practical grounding tools you can use in the middle of a hard day — not just in therapy."
  },
  {
    icon: Sparkles,
    title: "Understand your emotional patterns",
    desc: "Notice why you react the way you do and start gently shifting those patterns."
  },
  {
    icon: Users,
    title: "Feel less alone in what you're carrying",
    desc: "Our workshops are group spaces — hearing others often heals things solo sessions can't."
  },
  {
    icon: Repeat,
    title: "Build habits that actually hold",
    desc: "Small, consistent practices that work with your real life — not an ideal version of it."
  }
];

export function WorkshopOutcomes() {
  return (
    <section className="py-20 sm:py-24" style={bg.light}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
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
            What you'll get
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl"
            style={text.forest}
          >
            Real shifts — not just information
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-lg text-base text-muted-foreground"
          >
            Every Trinath workshop is built around what you actually leave with — not what sounds good on a flier.
          </motion.p>
        </motion.div>

        {/* ── Outcome cards ── */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={outcome.title}
                variants={fadeUp}
                className="flex flex-col rounded-[20px] border border-line/50 bg-white p-6 shadow-soft"
                style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#e8f0e8" }}
                >
                  <Icon size={24} className="text-[#1c2e22]" />
                </div>
                <h3 className="text-sm font-semibold leading-snug" style={text.forest}>
                  {outcome.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {outcome.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
