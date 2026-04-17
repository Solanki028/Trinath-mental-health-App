"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { Button, buttonStyles } from "@/components/ui/button";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function isActivePath(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/78 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-5">
        <div onClick={() => setIsOpen(false)}>
          <BrandLogo size="sm" textClassName="hidden sm:block" />
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "bg-brand/10 text-brand" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book-session" size="sm">
            Book a session
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
          className={cn(
            buttonStyles({ size: "sm", variant: "secondary" }),
            "h-10 w-10 px-0 lg:hidden"
          )}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/70 bg-white/88 p-4 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = isActivePath(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm",
                    active ? "bg-brand/10 text-brand" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
              })}
            </nav>
            <Button href="/book-session" fullWidth className="mt-4">
              Start your care plan
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
