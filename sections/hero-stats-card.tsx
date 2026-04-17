"use client";

import { motion } from "framer-motion";
import { text } from "@/lib/theme";

const stats = [
  {
    value: "18k+",
    highlight: "Guided care journeys",
    desc: "started by people who took that first, brave step toward support."
  },
  {
    value: "92%",
    highlight: "Report lasting improvement",
    desc: "in sleep, focus, and emotional steadiness within 3–4 sessions."
  },
  {
    value: "4.9★",
    highlight: "Average satisfaction rating",
    desc: "from clients who would recommend their Trinath therapist to a friend."
  }
];

/** Renders just the card content — positioning is handled by the parent in page.tsx */
export function HeroStatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-5xl rounded-[28px] bg-white px-6 py-8 shadow-[0_24px_64px_rgba(0,0,0,0.18)] sm:px-10 sm:py-10"
    >
      <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.value} className="py-5 sm:px-8 sm:py-0 first:sm:pl-0 last:sm:pr-0">
            <p className="text-3xl font-extrabold sm:text-4xl" style={text.gold}>
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold" style={text.forest}>
              {stat.highlight}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
