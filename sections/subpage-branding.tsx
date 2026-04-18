"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

import { photoLibrary } from "@/data/photos";
import { fadeUp } from "@/lib/animations";

export function SubpageBranding() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* ── Background decoration ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line/40 to-transparent" />

      <Link href="/book-session" className="group block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-white/80 bg-white/95 p-8 shadow-soft transition-[box-shadow,border-color] duration-500 hover:shadow-lift hover:border-brand/20 sm:p-12 lg:p-16"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        >
          {/* Subtle noise/texture overlay - hidden on mobile to boost performance */}
          <div className="frosted-noise opacity-30" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Heart size={16} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand">
                  Safe passage to healing
                </span>
              </div>

              <motion.h2
                variants={fadeUp}
                className="text-balance text-4xl font-bold leading-[1.1] text-forest sm:text-5xl lg:text-6xl"
              >
                A space where you <br />
                <span className="italic text-brand">are truly heard.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-md text-lg leading-relaxed text-muted-foreground"
              >
                Moving from learning to lasting change requires a space that is yours alone. Our 1-on-1 therapy offers the depth and safety to explore what truly matters.
              </motion.p>

              <div className="flex items-center gap-4 pt-4">
                <div className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-sm font-bold text-white transition-all group-hover:bg-brand group-hover:shadow-lg">
                  Book personal session
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-forest transition-all group-hover:scale-110">
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative aspect-[16/10] lg:aspect-square">
              <div className="absolute inset-0 rounded-[32px] bg-sand/50 p-3">
                <div className="relative h-full w-full overflow-hidden rounded-[24px]" style={{ transform: "translateZ(0)" }}>
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1664302434020-9bc8ce28f13a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Peaceful golden hour reflecting hope"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Soft vignetting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
