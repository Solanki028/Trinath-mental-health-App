import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { photoLibrary } from "@/data/photos";

const visuals = [
  {
    title: "Therapy",
    subtitle: "Private support that feels warm and clear",
    image: photoLibrary.therapyConsultation,
    className: "lg:col-span-2"
  },
  {
    title: "Workshops",
    subtitle: "Shared growth in calmer group spaces",
    image: photoLibrary.workshopGroup,
    className: ""
  },
  {
    title: "Book Session",
    subtitle: "Simple choices, less friction",
    image: photoLibrary.planningLaptop,
    className: ""
  }
];

export function HomeVisualGallery() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {visuals.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className={item.className}>
            <div className="group relative overflow-hidden rounded-[34px] border border-white/80 bg-white/80 p-3 shadow-soft backdrop-blur-xl">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[28px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/80">{item.title}</p>
                  <h3 className="mt-2 text-2xl text-white">{item.subtitle}</h3>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
