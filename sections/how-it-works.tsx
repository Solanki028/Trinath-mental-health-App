"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { Reveal } from "@/components/reveal";
import { StaggerWrapper } from "@/components/animations/stagger-wrapper";
import { careSteps } from "@/data/site";
import { fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={bg.light}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* ── Left: editorial image + floating quote ── */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px]"
              style={{ aspectRatio: "4/5", maxHeight: 520 }}
            >
              <Image
                src={photoLibrary.therapySession}
                alt="A warm, in-progress therapy session"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 max-w-[260px] rounded-[20px] p-5 backdrop-blur-sm"
                style={{
                  ...bg.dark,
                  opacity: 0.92,
                  border: "1px solid rgba(255,255,255,0.15)"
                }}
              >
                <p className="text-sm italic leading-relaxed text-white/90">
                  &ldquo;The first step doesn't have to be big — it just has to be yours.&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em]" style={text.gold}>
                  Dr. Meera Khanna
                </p>
              </motion.div>
            </div>
          </Reveal>

          {/* ── Right: steps ── */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block text-xs font-bold uppercase tracking-[0.26em]"
              style={text.gold}
            >
              How it works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Four gentle steps
              <br />
              <span className="italic" style={text.forest}>to feeling supported.</span>
            </motion.h2>

            <StaggerWrapper className="mt-10 space-y-0 divide-y divide-line/60" staggerDelay={0.35}>
              {careSteps.map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="group flex gap-6 py-7">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300"
                    style={{ borderColor: "rgba(28,46,34,0.3)", ...text.forest }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}
