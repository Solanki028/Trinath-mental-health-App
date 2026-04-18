import { WorkshopHero } from "@/sections/workshop-hero";
import { WorkshopOutcomes } from "@/sections/workshop-outcomes";
import { WorkshopSteps } from "@/sections/workshop-steps";
import { SubpageBranding } from "@/sections/subpage-branding";
import { WorkshopBrowser } from "@/components/workshop-browser";

export const metadata = {
  title: "Workshops — Trinath Counselling",
  description: "Live group workshops for managing stress, anxiety, burnout, and more. Expert-led, warm, and practical."
};

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopHero />
      <WorkshopOutcomes />
      <WorkshopSteps />

      {/* Workshop listing — anchored for hero CTA */}
      <section id="workshops" className="scroll-mt-20 py-20 sm:py-24" style={{ backgroundColor: "#fdf7ee" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="block text-xs font-bold uppercase tracking-[0.28em]" style={{ color: "#d4943a" }}>
              Browse sessions
            </span>
            <h2 className="mt-3 text-3xl font-bold" style={{ color: "#1c2e22" }}>
              Upcoming & past workshops
            </h2>
          </div>
        </div>
        <WorkshopBrowser />
      </section>

      <SubpageBranding />
    </>
  );
}
