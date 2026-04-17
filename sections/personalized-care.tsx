import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { photoLibrary } from "@/data/photos";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PersonalizedCare() {
  return (
    <SectionShell
      eyebrow="Personalized care"
      title="Visual care paths, not crowded screens."
      description="Booking, support, and workshops sit in one calmer flow."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-center">
        <Reveal>
          <Card className="p-6 sm:p-8" interactive={false}>
            <h3 className="max-w-lg text-3xl leading-tight">Built to feel warm, private, and simple.</h3>
            <p className="mt-4 max-w-xl text-base">
              The interface moves from image-led storytelling into direct action without looking like a dashboard.
            </p>
            <div className="mt-6 space-y-4">
              {[
                "More imagery, less copy-heavy layout.",
                "Logo-based brand colors across the full site.",
                "Softer cards, clearer booking, stronger trust cues."
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                  <p className="text-base">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-session">Book Session</Button>
              <Button href="/workshops" variant="secondary">
                Browse workshops
              </Button>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-xl sm:p-5">
            <Image
              src={photoLibrary.planningLaptop}
              alt="Planning and self-guided support"
              width={960}
              height={760}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full rounded-[28px] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
