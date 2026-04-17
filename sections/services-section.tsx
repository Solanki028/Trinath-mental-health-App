import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <SectionShell
      eyebrow="Services"
      title="Core care paths, shown visually."
      description="Less explanation. More clarity."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <Card className="h-full p-6 sm:p-7">
              <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white/90">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={650}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-2xl">{service.title}</h3>
              <p className="mt-3 text-base">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
