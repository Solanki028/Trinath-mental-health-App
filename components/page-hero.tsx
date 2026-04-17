import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  children?: React.ReactNode;
  description: string;
  label: string;
  title: string;
};

export function PageHero({ children, description, label, title }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:pt-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-hero-glow blur-3xl" />
      <div className="absolute right-[8%] top-24 -z-10 h-44 w-44 rounded-full bg-brand/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
        <div className="paper-panel ambient-ring p-8 sm:p-10 lg:p-12">
          <Badge variant="accent">{label}</Badge>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl leading-tight sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg">{description}</p>
        </div>
        {children ? <div className="space-y-4">{children}</div> : null}
      </div>
    </section>
  );
}
