import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { photoLibrary } from "@/data/photos";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { trustStats } from "@/data/site";

export function TrustSection() {
  return (
    <SectionShell
      eyebrow="Why it feels trusted"
      title="A stronger visual identity with less clutter."
      description="The homepage now leads with imagery first and supporting copy second."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Reveal>
          <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur-xl">
            <Image
              src={photoLibrary.therapyCouch}
              alt="Therapy session"
              width={1280}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full rounded-[26px] object-cover"
            />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {trustStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <Card className="h-full p-6" interactive={false}>
                <p className="text-3xl text-brand sm:text-4xl">{stat.value}</p>
                <p className="mt-3 text-sm">{stat.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
