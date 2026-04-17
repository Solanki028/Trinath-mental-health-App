"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { photoLibrary } from "@/data/photos";
import { StaggerWrapper } from "@/components/animations/stagger-wrapper";
import { scaleIn } from "@/lib/animations";
import { bg, text, overlays } from "@/lib/theme";

const features = [
  { href: "/book-session", image: photoLibrary.therapyConsultation, label: "Therapy",   description: "Private support that feels warm and human" },
  { href: "/workshops",    image: photoLibrary.workshopGroup,        label: "Workshops", description: "Small-group growth in intimate spaces" },
  { href: "/blogs",        image: photoLibrary.journalingCozy,       label: "Journal",   description: "Read, reflect, and learn at your own pace" }
];

const stats = [
  { value: "18k+",  label: "Guided care journeys" },
  { value: "92%",   label: "Report lasting improvement" },
  { value: "4.9★",  label: "Average rating" },
  { value: "7 min", label: "Avg. time to book" }
];

export function HomeVisualGallery() {
  return (
    <>
      {/* ── Stats Strip ── */}
      <div className="py-5" style={bg.darkMid}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col items-center gap-1 py-2 text-center"
              >
                <span className="text-2xl font-bold sm:text-3xl" style={text.gold}>{stat.value}</span>
                <span className="text-xs text-white/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Editorial image grid ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerWrapper className="grid gap-4 sm:grid-cols-3">
            {features.map((item) => (
              <motion.div key={item.label} variants={scaleIn}>
                <Link href={item.href} className="group block overflow-hidden rounded-[28px]">
                  <div className="relative aspect-[4/5] overflow-hidden" style={bg.dark}>
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{ opacity: 0.75 }}
                    />
                    <div className="absolute inset-0" style={{ background: overlays.cardBottomFade }} />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="text-xs font-bold uppercase tracking-[0.22em]" style={text.gold}>{item.label}</span>
                      <h3 className="mt-1 text-xl font-semibold text-white">{item.description}</h3>
                      <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerWrapper>
        </div>
      </section>
    </>
  );
}
