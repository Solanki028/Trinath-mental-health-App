import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { careSteps } from "@/data/site";

export function HowItWorks() {
  return (
    <SectionShell
      eyebrow="How it works"
      title="Four simple steps."
      description="Short, visual, and easy to follow."
    >
      <div className="grid gap-5 lg:grid-cols-4">
        {careSteps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.08}>
            <Card className="h-full p-6 sm:p-7">
              <span className="text-sm uppercase tracking-[0.24em] text-brand">{item.step}</span>
              <h3 className="mt-4 text-2xl">{item.title}</h3>
              <p className="mt-3 text-base">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
