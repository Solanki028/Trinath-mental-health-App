import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  textClassName?: string;
};

export function BrandLogo({
  className,
  href = "/",
  size = "md",
  textClassName
}: BrandLogoProps) {
  const imageSize = size === "sm" ? 46 : size === "lg" ? 72 : 58;

  return (
    <Link href={href} className={cn("flex items-center gap-3", className)}>
      <div className="overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-soft">
        <Image
          src="/images/app-logo.jpg"
          alt="Trinath Counselling Services logo"
          width={imageSize}
          height={imageSize}
          className="h-auto w-auto object-contain"
        />
      </div>
      <div className={cn("min-w-0", textClassName)}>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
          Trinath Counselling
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Services</p>
      </div>
    </Link>
  );
}
