"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

const trustPills = ["100% confidential", "No commitment", "Indian-certified experts", "First session refundable"];

export function BookingHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 sm:pt-32" style={bg.light}>

      {/* Ambient blobs */}
      <motion.div
        className="pointer-events-none absolute right-[-8%] top-20 h-[380px] w-[380px] rounded-full opacity-25 blur-[90px]"
        style={{ backgroundColor: "#a8cba8" }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-[-6%] top-36 h-[280px] w-[280px] rounded-full opacity-15 blur-[80px]"
        style={{ backgroundColor: "#d4943a" }}
        animate={{ scale: [1, 1.05, 1], y: [0, -14, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2">

          {/* ── Left: trust-focused copy ── */}
          <motion.div
            className="pb-16 sm:pb-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="block text-xs font-bold uppercase tracking-[0.28em]"
              style={text.gold}
            >
              Book a session
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={text.forest}
            >
              Talk to someone
              <br />
              <em className="not-italic" style={{ color: "#d4943a" }}>who understands.</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              This isn't a form. It's a first step. In a few minutes, you'll have a session scheduled with a therapist who's actually a right fit for you.
            </motion.p>

            {/* Trust pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-line/60 bg-white px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft"
                >
                  ✓ {pill}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={bg.dark}
              >
                Choose your session →
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: calm image ── */}
          <motion.div
            className="relative h-[480px] overflow-hidden rounded-t-[40px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={photoLibrary.therapistHands}
              alt="A therapist gently holding a patient's hands in a warm, caring session"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf7ee]/40 via-transparent to-transparent" />

            {/* Floating trust badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-6 right-6 rounded-2xl p-5 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(28,46,34,0.88)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="text-sm italic text-white/90">
                "I was terrified before my first session. Fifteen minutes in, I felt safer than I had in months."
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em]" style={text.gold}>
                Priya, 28 — Bangalore
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
