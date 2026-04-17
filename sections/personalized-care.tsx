"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { Reveal } from "@/components/reveal";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { bg, text, border } from "@/lib/theme";

const features = [
  { icon: "🌿", text: "Imagery-led storytelling that feels human, not clinical." },
  { icon: "🔒", text: "Completely private — your journey stays yours." },
  { icon: "⚡", text: "Book in minutes, start whenever you're ready." }
];

export function PersonalizedCare() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={bg.dark}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* ── Left: image with stat overlay ── */}
          <Reveal variant={slideInLeft}>
            <div
              className="relative overflow-hidden rounded-[32px]"
              style={{ aspectRatio: "4/5", maxHeight: 520 }}
            >
              <Image
                src={photoLibrary.cozyCare}
                alt="A calm, personal moment of self-care and planning"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-4xl font-bold text-white">92%</p>
                <p className="mt-1 text-sm text-white/70">of users report feeling more supported after their first session</p>
              </div>
            </div>
          </Reveal>

          {/* ── Right: copy ── */}
          <Reveal variant={slideInRight} className="space-y-8">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[0.26em]" style={text.gold}>
                Personalized care
              </span>
              <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Built around you —
                <br />
                <span className="italic" style={text.gold}>not a generic plan.</span>
              </h2>
              <p className="mt-4 text-base text-white/60">
                One calm flow from your first question to your first session. No pressure, no complexity — just care that fits your life.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-start gap-4 rounded-2xl p-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", ...border.whiteSubtle, border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span className="mt-0.5 text-xl">{f.icon}</span>
                  <p className="text-sm leading-relaxed text-white/75">{f.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/book-session"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={bg.gold}
            >
              Start your journey →
            </Link>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
