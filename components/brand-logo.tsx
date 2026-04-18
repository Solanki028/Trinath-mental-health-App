import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg" | "xl";
  textClassName?: string;
  /** Show on dark backgrounds (inverts text color) */
  dark?: boolean;
};

const imageSizes = { sm: 36, md: 46, lg: 58, xl: 72 } as const;

export function BrandLogo({
  className,
  href = "/",
  size = "md",
  textClassName,
  dark = false
}: BrandLogoProps) {
  const px = imageSizes[size];

  return (
    <Link href={href} className={cn("flex items-center gap-2", className)}>
      {/* ── Circular logo mark ── */}
      <div className="overflow-hidden rounded-full flex-shrink-0 bg-white" style={{ width: px, height: px }}>
        <Image
          src="/images/app-logo.jpg"
          alt="Trinath logo"
          width={px}
          height={px}
          className="h-full w-full object-contain p-1"
        />
      </div>
      {/* ── Brand name ── */}
      <span
        className={cn(
          size === "xl" ? "text-base font-bold tracking-wide" : "text-sm font-semibold tracking-wide",
          dark ? "text-white" : "text-foreground",
          textClassName
        )}
      >
        Trinath
        <span className={cn("ml-1 font-normal", dark ? "text-white/60" : "text-muted-foreground")}>
          Counselling
        </span>
      </span>
    </Link>
  );
}
