"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  function isActivePath(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
        <motion.div
          animate={scrolled
            ? { boxShadow: "0 4px 32px rgba(0,0,0,0.10)" }
            : { boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }
          }
          transition={{ duration: 0.3 }}
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/8 bg-white/95 px-4 py-2.5 backdrop-blur-xl sm:px-6"
        >
          {/* Logo */}
          <div onClick={() => setIsOpen(false)}>
            <BrandLogo size="md" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActivePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-foreground/8 text-foreground"
                      : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/book-session"
              className="rounded-full bg-[#1c2e22] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#253c2b] hover:shadow-md"
            >
              Book a session
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/8 text-sm font-medium text-foreground transition lg:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </motion.div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-0 mt-2 overflow-hidden rounded-[22px] border border-black/6 bg-white/97 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-0.5 p-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                      isActivePath(item.href)
                        ? "bg-[#1c2e22]/8 text-[#1c2e22] font-semibold"
                        : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/book-session"
                  onClick={() => setIsOpen(false)}
                  className="mt-1 rounded-xl bg-[#1c2e22] px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Book a session
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer — prevents content from sitting behind the fixed navbar */}
      <div className="h-[64px]" />
    </>
  );
}
