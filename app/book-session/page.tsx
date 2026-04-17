import { BookingHero } from "@/sections/booking-hero";
import { BookingWhy } from "@/sections/booking-why";
import { BookingFlow } from "@/components/booking-flow";

export const metadata = {
  title: "Book a Session — Trinath Counselling",
  description: "Talk to a trained Indian mental health professional. Confidential, warm, and available online or in-person."
};

export default function BookSessionPage() {
  return (
    <>
      <BookingHero />
      <BookingWhy />

      {/* Booking flow — anchored */}
      <section id="booking" className="scroll-mt-20 py-20 sm:py-24" style={{ backgroundColor: "#fdf7ee" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="block text-xs font-bold uppercase tracking-[0.28em]" style={{ color: "#d4943a" }}>
              Book your session
            </span>
            <h2 className="mt-3 text-3xl font-bold" style={{ color: "#1c2e22" }}>
              Four simple steps — takes 3 minutes
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
              Choose your session type, pick a therapist, select a time. That's it.
            </p>
          </div>
        </div>
        <BookingFlow />
      </section>

      {/* Reassurance footer strip */}
      <section className="py-14" style={{ backgroundColor: "#1c2e22" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { icon: "🔒", title: "Completely private", desc: "No data is shared. Ever." },
              { icon: "🎓", title: "Certified professionals", desc: "NIMHANS, AIIMS, Tata Institute trained." },
              { icon: "💛", title: "No pressure to continue", desc: "One session at a time. No subscriptions." }
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
