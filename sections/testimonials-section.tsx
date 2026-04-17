import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <SectionShell
      eyebrow="Testimonials"
      title="Shorter, lighter social proof."
      description="Supportive quotes without taking over the screen."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}>
            <Card className="h-full p-6 sm:p-7">
              <div className="mb-5 h-10 w-10 rounded-full bg-brand/12" />
              <p className="text-lg leading-8 text-foreground">"{item.quote}"</p>
              <div className="mt-8">
                <p className="text-base text-foreground">{item.name}</p>
                <p className="mt-1 text-sm">{item.role}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
