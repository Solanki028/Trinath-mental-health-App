"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { therapists } from "@/data/therapists";
import { StaggerWrapper } from "@/components/animations/stagger-wrapper";
import { scaleIn } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={bg.light}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="block text-xs font-bold uppercase tracking-[0.26em]"
              style={text.gold}
            >
              Our experts
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Care from qualified,
              <br />
              <span className="italic" style={text.forest}>human therapists.</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2 }}>
            <Link
              href="/book-session"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={bg.dark}
            >
              Meet all therapists →
            </Link>
          </motion.div>
        </div>

        {/* ── Therapist portrait grid ── */}
        <StaggerWrapper className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {therapists.map((therapist) => (
            <motion.div key={therapist.id} variants={scaleIn}>
              <div className="group relative overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/90 px-3 py-1 backdrop-blur-sm">
                    <span className="text-[10px] font-semibold" style={text.forest}>{therapist.availability}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em]" style={text.gold}>{therapist.specialty}</p>
                  <h3 className="mt-1.5 text-base font-semibold text-foreground">{therapist.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-muted-foreground">{therapist.qualification}</p>
                  <p className="mt-1 text-xs text-muted-foreground/70">{therapist.experience}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {therapist.focus.map((f) => (
                      <span key={f} className="rounded-full bg-secondary/80 px-2.5 py-1 text-[11px] text-muted-foreground">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
