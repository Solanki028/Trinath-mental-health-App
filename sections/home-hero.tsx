"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text, overlays, imageOpacity } from "@/lib/theme";

const HEADLINE_TOP = "Find your path";
const HEADLINE_BTM = "to mental wellness.";

export function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden" style={bg.dark}>
      {/* ── Full-bleed background image — properly visible ── */}
      <div className="absolute inset-0">
        <Image
          src={photoLibrary.therapyConsultation}
          alt="A warm, supportive therapy session"
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: imageOpacity.hero }}
          priority
        />
        {/* Soft gradient — lets the image breathe while keeping text readable */}
        <div className="absolute inset-0" style={{ background: overlays.heroVertical }} />
        <div className="absolute inset-0" style={{ background: overlays.heroHorizontal }} />
      </div>

      {/* ── Ambient glow blob ── */}
      <motion.div
        aria-hidden="true"
        className="absolute right-[15%] top-[20%] h-72 w-72 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(212, 148, 58, 0.12)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Content ── */}
      <div
        className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
        style={{ minHeight: "inherit" }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse-soft" />
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-white/80">
              Trinath Counselling Services
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } }
            }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.02] tracking-tight text-white"
          >
            {[...HEADLINE_TOP.split(" "), "\n", ...HEADLINE_BTM.split(" ")].map((word, i) =>
              word === "\n" ? (
                <br key={i} />
              ) : (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
                    visible: {
                      opacity: 1, y: 0, filter: "blur(0px)",
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  className="mr-[0.22em] inline-block"
                >
                  {word === "wellness." ? (
                    <span className="italic" style={text.gold}>{word}</span>
                  ) : word}
                </motion.span>
              )
            )}
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="max-w-lg text-lg leading-relaxed text-white/75"
          >
            Warm, qualified support for anxiety, burnout, relationships, and life's hardest moments — whenever you're ready.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/book-session"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={bg.gold}
            >
              Book a session
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/workshops"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Explore workshops
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Stat pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[
            { value: "18k+", label: "Care journeys" },
            { value: "92%",  label: "Feel more supported" },
            { value: "4.9★", label: "Satisfaction" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md"
            >
              <span className="text-lg font-bold" style={text.gold}>{stat.value}</span>
              <span className="text-xs text-white/60">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-6 right-8 hidden flex-col items-center gap-1.5 lg:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="h-6 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
