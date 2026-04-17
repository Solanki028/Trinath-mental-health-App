import Image from "next/image";

import { Button } from "@/components/ui/button";
import { photoLibrary } from "@/data/photos";

export function FinalCta() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[38px] border border-white/70 bg-white/75 px-6 py-10 shadow-soft backdrop-blur-xl sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Start your journey
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-[3.2rem]">
              Choose a path and start with less friction.
            </h2>
            <p className="mt-4 max-w-xl text-base">
              Explore, read, join, or book. The UI stays calm across every page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/book-session" size="lg">
                Start with a session
              </Button>
              <Button href="/blogs" variant="secondary" size="lg">
                Read the journal
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-soft">
            <Image
              src={photoLibrary.readingCorner}
              alt="Calm reflective moment"
              width={900}
              height={760}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/80">Calm first</p>
              <p className="mt-2 max-w-xs text-2xl text-white">Support that feels quieter from the start.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
