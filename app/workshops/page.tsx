import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { WorkshopBrowser } from "@/components/workshop-browser";
import { Card } from "@/components/ui/card";
import { photoLibrary } from "@/data/photos";

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        label="Workshops"
        title="Warm, image-led workshop cards for upcoming and past sessions."
        description="Filters, visuals, and simple details keep the page easy to scan."
      >
        <Card className="overflow-hidden p-3" interactive={false}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
            <Image
              src={photoLibrary.workshopGroup}
              alt="Workshop discussion"
              fill
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="object-cover"
            />
          </div>
        </Card>
      </PageHero>
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card className="overflow-hidden p-3" interactive={false}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
              <Image
                src={photoLibrary.workshopGroup}
                alt="Workshop community"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h2 className="max-w-lg text-3xl text-white sm:text-4xl">
                  Group care that still feels personal.
                </h2>
              </div>
            </div>
          </Card>
          <div className="grid gap-6">
            <Card className="overflow-hidden p-3" interactive={false}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                <Image
                  src={photoLibrary.therapyConsultation}
                  alt="Therapy and workshop environment"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden p-3" interactive={false}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                <Image
                  src={photoLibrary.journalingCozy}
                  alt="Workshop reflection and signup"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <WorkshopBrowser />
    </>
  );
}
