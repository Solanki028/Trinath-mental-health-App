"use client";

import Link from "next/link";
import Image from "next/image";

import { BrandLogo } from "@/components/brand-logo";
import { Reveal } from "@/components/reveal";
import { navItems } from "@/data/site";
import { photoLibrary } from "@/data/photos";

export function Footer() {
  return (  
    <footer className="relative overflow-hidden">

      {/* ── Curvy wave top edge ── */}
      <div className="relative z-10 -mb-1">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: 80, display: "block" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#1c2e22"
          />
        </svg>
      </div>

      {/* ── Main footer body ── */}
      <div className="relative bg-[#1c2e22]">

        {/* Background image with dark overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={photoLibrary.outdoorPeace}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ opacity: 0.12 }}
          />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2e22]/60 via-transparent to-[#1c2e22]/80" />
        </div>

        <Reveal>
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-8 lg:px-10">

            {/* ── Top row: brand + tagline + CTA ── */}
            <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-start sm:justify-between">

              {/* Brand */}
              <div className="max-w-xs space-y-4">
                <BrandLogo size="xl" dark />
                <p className="text-sm leading-relaxed text-white/60">
                  Warm, professional mental health care — online and in-person across India.
                </p>
                <p className="text-xs text-white/30">
                  Not a substitute for crisis support.
                </p>
              </div>

              {/* Nav links */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Navigate</p>
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA block */}
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Ready to begin?</p>
                <Link
                  href="/book-session"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
                  style={{ backgroundColor: "#d4943a" }}
                >
                  Book a session →
                </Link>
                <p className="text-xs text-white/35">Free 15-min intro call available</p>
              </div>

            </div>

            {/* ── Bottom: copyright ── */}
            <div className="flex flex-col items-center justify-between gap-3 pt-7 text-center sm:flex-row sm:text-left">
              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Trinath Counselling Services · Hyderabad, India
              </p>
              <p className="text-xs text-white/25">
                Built with care · All rights reserved
              </p>
            </div>

          </div>
        </Reveal>
      </div>

    </footer>
  );
}
