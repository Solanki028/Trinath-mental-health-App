import { WorkshopHero } from "@/sections/workshop-hero";
import { WorkshopOutcomes } from "@/sections/workshop-outcomes";
import { WorkshopSteps } from "@/sections/workshop-steps";
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

      {/* Final CTA */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#1c2e22" }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em]" style={{ color: "#d4943a" }}>
            Ready to begin?
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Start working on yourself today.
            <br />
            <span className="italic" style={{ color: "#d4943a" }}>The timing is never perfect.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
            The people who benefit most from our workshops are the ones who almost didn't come. Don't wait for the right mood.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#workshops"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{ backgroundColor: "#d4943a" }}
            >
              Join a workshop →
            </a>
            <a
              href="/book-session"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-bold text-white transition-all hover:border-white/60"
            >
              Book 1-on-1 session
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
