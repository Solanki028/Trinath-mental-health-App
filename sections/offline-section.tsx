"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import { photoLibrary } from "@/data/photos";
import { Reveal } from "@/components/reveal";
import { StaggerWrapper } from "@/components/animations/stagger-wrapper";
import { fadeUp } from "@/lib/animations";
import { bg, text } from "@/lib/theme";

const features = [
  { icon: "📍", title: "Walk-in welcome",     desc: "Drop in or book a slot — our doors are always open for you." },
  { icon: "🏡", title: "Calm, private space", desc: "A warm, confidential room designed for real conversation." },
  { icon: "👥", title: "Group sessions",       desc: "Weekly workshops and peer support circles in person." },
  { icon: "☕", title: "No rush, ever",        desc: "Your session runs on your pace — not a clock." }
];

export function OfflineSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax on the image — moves slower than scroll
  const rawY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y = useSpring(rawY, { stiffness: 55, damping: 22 });

  return (
    <section className="overflow-hidden py-20 sm:py-24 lg:py-28" style={bg.light}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Eyebrow + heading ── */}
        <div className="mb-14 text-center">
          <Reveal>
            <span
              className="block text-xs font-bold uppercase tracking-[0.28em]"
              style={text.gold}
            >
              Also available offline
            </span>
          </Reveal>
          <Reveal delay={0.09}>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              style={text.forest}
            >
              Come as you are —
              <br />
              <em className="font-semibold not-italic" style={{ color: "#b07d3a" }}>
                we're here in person too.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              Our centre in Hyderabad offers face-to-face therapy, group workshops, and drop-in sessions — for when you want a real room and real presence.
            </p>
          </Reveal>
        </div>

        {/* ── Large single image with parallax ── */}
        <Reveal delay={0.1}>
          <div
            ref={imageRef}
            className="relative mx-auto mb-14 overflow-hidden rounded-[32px] shadow-[0_24px_72px_rgba(0,0,0,0.18)]"
            style={{ height: 480 }}
          >
            {/* Parallax image layer */}
            <motion.div
              className="absolute inset-0"
              style={{ y, scale: 1.14 }}
            >
              <Image
                src={photoLibrary.officeLobby}
                alt="Our calm, welcoming in-person centre in Hyderabad"
                fill
                sizes="(min-width: 1280px) 1200px, 95vw"
                className="object-cover object-center"
                priority={false}
              />
            </motion.div>

            {/* Gradient overlay — dark at bottom for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Badge + text pinned to bottom */}
            <motion.div
              className="absolute inset-x-0 bottom-0 p-8 sm:p-10"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                📍 Hyderabad, India
              </span>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Real rooms.{" "}
                <span style={{ color: "#e4b46a" }}>Real care.</span>
              </h3>
              <div className="mt-4">
                <Link
                  href="/book-session"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                  style={bg.gold}
                >
                  Book an in-person session →
                </Link>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* ── Feature cards ── */}
        <StaggerWrapper className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <motion.div key={f.title} variants={fadeUp}>
              <div className="flex flex-col rounded-[20px] border border-line/40 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="mb-3 text-3xl">{f.icon}</span>
                <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerWrapper>

      </div>
    </section>
  );
}
