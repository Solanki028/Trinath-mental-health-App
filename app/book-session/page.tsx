import Image from "next/image";

import { BookingFlow } from "@/components/booking-flow";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { photoLibrary } from "@/data/photos";

export default function BookSessionPage() {
  return (
    <>
      <PageHero
        label="Book session"
        title="A simpler booking flow with less copy and clearer choices."
        description="Choose the support type, expert, and time in a calmer visual flow."
      >
        <Card className="overflow-hidden p-3" interactive={false}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src={photoLibrary.planningLaptop}
              alt="Booking setup"
              fill
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="object-cover"
            />
          </div>
        </Card>
      </PageHero>
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <Card className="overflow-hidden p-3" interactive={false}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
              <Image
                src={photoLibrary.therapyConsultation}
                alt="Visual booking flow"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </Card>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="overflow-hidden p-3" interactive={false}>
              <div className="relative aspect-square overflow-hidden rounded-[24px]">
                <Image
                  src={photoLibrary.portraitWomanOne}
                  alt="Therapist profile"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden p-3" interactive={false}>
              <div className="relative aspect-square overflow-hidden rounded-[24px]">
                <Image
                  src={photoLibrary.portraitManOne}
                  alt="Psychiatrist profile"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <BookingFlow />
    </>
  );
}
