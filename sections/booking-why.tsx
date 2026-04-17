"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

const reasons = [
  {
    icon: "🛡️",
    title: "Talk freely, without judgment",
    desc: "Everything you say stays between you and your therapist. Full confidentiality, always."
  },
  {
    icon: "🧠",
    title: "Get guidance from a trained expert",
    desc: "Not a chatbot. Not generic advice. A qualified mental health professional who listens."
  },
  {
    icon: "🌱",
    title: "Understand patterns you can't see alone",
    desc: "A good therapist reflects things back to you that you've never been able to see yourself."
  },
  {
    icon: "🔑",
    title: "Build tools that actually stay with you",
    desc: "You won't just talk — you'll learn practical techniques that work outside the session too."
  }
];

export function BookingWhy() {
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
            Why book a session
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-xl text-3xl font-bold leading-tight sm:text-4xl"
            style={text.forest}
          >
            This is what a session actually gives you
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-lg text-base text-muted-foreground"
          >
            Not inspiration. Not advice from a stranger on the internet. A real conversation with someone trained to hold it.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              className="flex gap-5 rounded-[20px] border border-line/50 bg-white p-6 shadow-soft"
              style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease" }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: "#e8f0e8" }}
              >
                {reason.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-snug" style={text.forest}>
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["100% confidential", "No long-term commitment", "Cancel or reschedule anytime", "Free 15-min intro call"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-base" style={text.gold}>✓</span>
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
