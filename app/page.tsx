import { FinalCta } from "@/sections/final-cta";
import { HomeHero } from "@/sections/home-hero";
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
      <HomeHero />
      <HomeVisualGallery />
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
