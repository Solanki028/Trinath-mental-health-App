"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { photoLibrary } from "@/data/photos";
import { supportPillars } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-hero-glow blur-3xl" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-24 -z-10 h-40 w-40 rounded-full bg-brand/12 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[12%] top-32 -z-10 h-56 w-56 rounded-full bg-secondary/80 blur-3xl"
        animate={{ y: [0, 14, 0], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
        <Reveal className="space-y-7">
          <div className="inline-flex rounded-full border border-brand/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-brand shadow-soft backdrop-blur-xl">
            Trinath Counselling Services
          </div>
          <div className="max-w-2xl space-y-5">
            <h1 className="text-balance text-5xl leading-[1.04] sm:text-6xl lg:text-[5.15rem]">
              Better mental health starts with a calmer first step.
            </h1>
            <p className="max-w-xl text-base sm:text-lg">
              Visual, simple, and warm. A mental health platform shaped around trust, clarity, and ease.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/book-session" size="lg">
              Book Session
            </Button>
            <Button href="/blogs" size="lg" variant="secondary">
              Explore Journal
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {supportPillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-muted-foreground shadow-soft backdrop-blur-xl"
              >
                {pillar}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto max-w-[36rem]">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="paper-panel ambient-ring relative overflow-hidden p-4 sm:p-5"
            >
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-soft">
                  <Image
                    src={photoLibrary.therapyConsultation}
                    alt="Therapy consultation"
                    width={1000}
                    height={600}
                    sizes="(min-width: 1024px) 40rem, 100vw"
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-soft">
                    <Image
                      src={photoLibrary.journalingCozy}
                      alt="Journaling and self-care"
                      width={1000}
                      height={700}
                      sizes="(min-width: 1024px) 20rem, 100vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-soft">
                    <Image
                      src={photoLibrary.workshopGroup}
                      alt="Workshop group session"
                      width={1000}
                      height={700}
                      sizes="(min-width: 1024px) 20rem, 100vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-10 hidden w-52 rounded-[28px] border border-white/70 bg-white/82 p-4 shadow-soft backdrop-blur-xl sm:block"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Visual trust</p>
              <p className="mt-3 text-sm text-foreground">
                Warm palette, softer motion, and simpler paths.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-10 hidden w-52 rounded-[28px] border border-white/70 bg-white/82 p-4 shadow-soft backdrop-blur-xl sm:block"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Designed flow</p>
              <p className="mt-3 text-xl text-foreground">Read. Explore. Book.</p>
              <p className="mt-1 text-sm">Every route stays clear and visually calm.</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
