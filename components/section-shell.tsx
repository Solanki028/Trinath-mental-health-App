import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  title?: string;
};

export function SectionShell({
  children,
  className,
  description,
  eyebrow,
  title
}: SectionShellProps) {
  return (
    <section className={cn("section-padding", className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="max-w-2xl space-y-4">
            {eyebrow ? (
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[3rem]">{title}</h2>
            ) : null}
            {description ? <p className="text-base sm:text-lg">{description}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
