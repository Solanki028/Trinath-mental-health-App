import { FinalCta } from "@/sections/final-cta";
import { HomeHero } from "@/sections/home-hero";
import { HeroStatsCard } from "@/sections/hero-stats-card";
import { HowItWorks } from "@/sections/how-it-works";
import { OfflineSection } from "@/sections/offline-section";
import { PersonalizedCare } from "@/sections/personalized-care";
import { ServicesSection } from "@/sections/services-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { HomeVisualGallery } from "@/sections/home-visual-gallery";
import { TrustSection } from "@/sections/trust-section";

export default function HomePage() {
  return (
    <>
      
      <div className="relative">
        <HomeHero />
        {/* Absolute at hero bottom → translate-y-1/2 pushes it 50% into gallery */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-8">
          <HeroStatsCard />
        </div>
      </div>

      {/* pt-32 = clears the ~128px bottom half of the floating card */}
      <div className="pt-32 sm:pt-36">
        <HomeVisualGallery />
      </div>

      <TrustSection />
      <ServicesSection />
      <HowItWorks />
      <PersonalizedCare />
      <TestimonialsSection />
      <OfflineSection />
      <FinalCta />
    </>
  );
}
