"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

export function WorkshopHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 sm:pt-32" style={bg.light}>

      {/* Ambient background blobs */}
      <motion.div
        className="pointer-events-none absolute left-[-10%] top-16 h-[420px] w-[420px] rounded-full opacity-30 blur-[100px]"
        style={{ backgroundColor: "#a8cba8" }}
        animate={{ scale: [1, 1.08, 1], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-8%] top-24 h-[320px] w-[320px] rounded-full opacity-20 blur-[90px]"
        style={{ backgroundColor: "#d4943a" }}
        animate={{ scale: [1, 1.06, 1], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2">

          {/* ── Left: emotional copy ── */}
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
              Workshops
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={text.forest}
            >
              On hard days,
              <br />
              <em className="not-italic" style={{ color: "#d4943a" }}>showing up is enough.</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Our live group workshops are warm, guided spaces where you learn practical tools — and realise you're not navigating this alone.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#workshops"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={bg.dark}
              >
                See upcoming workshops →
              </Link>
              <Link
                href="/book-session"
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Prefer 1-on-1? Book a session
              </Link>
            </motion.div>

            {/* Social proof pill */}
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line/60 bg-white px-4 py-2 text-sm shadow-soft"
            >
              <span className="flex -space-x-1.5">
                {["🟢", "🟢", "🟢"].map((_, i) => (
                  <span key={i} className="h-5 w-5 rounded-full border-2 border-white bg-green-400 text-[8px] leading-none" />
                ))}
              </span>
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">340+</span> people joined this month
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: curved image ── */}
          <motion.div
            className="relative h-[480px] overflow-hidden rounded-t-[40px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={photoLibrary.workshopHero}
              alt="Workshop group session"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf7ee]/40 via-transparent to-transparent" />

            {/* Floating quote card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-6 right-6 rounded-2xl p-5 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(28,46,34,0.88)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="text-sm italic text-white/90">
                "I didn't think a group session could feel that personal. I've never felt more understood."
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em]" style={text.gold}>
                Workshop participant, April 2026
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
