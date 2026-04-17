"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { bg, text, overlays, imageOpacity } from "@/lib/theme";

const trustBadges = ["No commitment", "Cancel anytime", "Private & secure", "Same-week availability"];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={bg.warm}>
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src={photoLibrary.readingCorner}
          alt="Calm reflective moment"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: imageOpacity.cta }}
        />
        <div className="absolute inset-0" style={{ background: overlays.ctaHorizontal }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-7"
          >
            <motion.span variants={fadeUp} className="block text-xs font-bold uppercase tracking-[0.26em]" style={text.gold}>
              Start your journey
            </motion.span>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] } } }}
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Take the first step
              <br />
              <span className="italic" style={text.gold}>toward feeling better.</span>
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.22 } } }}
              className="text-base text-white/65"
            >
              No waiting rooms. No awkward introductions. Just a calm space where care starts on your terms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.38 } } }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/book-session"
                className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                style={bg.gold}
              >
                Book a session
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                Read the journal
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.55 } } }}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-xs text-white/45">
                  <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "rgba(212,148,58,0.7)" }} />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
