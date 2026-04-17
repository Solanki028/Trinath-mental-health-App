"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { bg, text } from "@/lib/theme";
import { conditions } from "@/data/conditions";

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={bg.light}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-14 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl" style={text.forest}>
              Mental health concerns we care for
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Trinath offers support for a wide range of concerns. Explore some of the most common ones below to see how we can help.
            </p>
          </Reveal>
        </div>

        {/* ── Conditions grid — single reveal, no per-card stagger ── */}
        <Reveal delay={0.05}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((condition) => (
              <Link
                key={condition.title}
                href={condition.href}
                className="group flex h-full flex-col rounded-[20px] border border-line/50 bg-white p-6 shadow-soft will-change-transform"
                style={{ transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Icon container */}
                <div
                  className="mb-5 overflow-hidden rounded-2xl"
                  style={{ width: 80, height: 80, flexShrink: 0, backgroundColor: condition.iconBg }}
                >
                  {condition.icon.startsWith("/") ? (
                    <Image
                      src={condition.icon}
                      alt={condition.title}
                      width={80}
                      height={80}
                      className={`h-full w-full ${(condition.iconFit ?? "contain") === "contain" ? "object-contain p-3" : "object-cover"}`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl">
                      {condition.icon}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold leading-snug" style={text.forest}>
                  {condition.title}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {condition.description}
                </p>

                {/* Arrow CTA */}
                <div
                  className="mt-5 flex items-center gap-1.5 text-sm font-semibold"
                  style={{ ...text.gold, transition: "gap 0.2s ease" }}
                >
                  <span>Learn more</span>
                  <span className="text-base leading-none">→</span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* ── Bottom CTA ── */}
        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <Link
              href="/book-session"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={bg.dark}
            >
              Find the right support for you →
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
