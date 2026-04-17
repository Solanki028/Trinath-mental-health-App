import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/70 bg-white/78 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <BrandLogo size="lg" textClassName="max-w-xs" />
            <h2 className="mt-5 max-w-xl text-3xl leading-tight sm:text-4xl">
              Calm digital care with a warmer visual language.
            </h2>
            <p className="mt-3 max-w-lg text-base">
              Therapy, psychiatry, workshops, and booking flows designed as a clean static frontend.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-secondary/80 px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book-session">Start your journey</Button>
              <span className="text-sm text-muted-foreground">
                Static frontend / Mock content only
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
