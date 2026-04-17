import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  textClassName?: string;
  /** Show on dark backgrounds (inverts text color) */
  dark?: boolean;
};

const imageSizes = { sm: 30, md: 38, lg: 48 } as const;

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
      <div className="overflow-hidden rounded-full border border-white/20 shadow-sm" style={{ width: px, height: px, flexShrink: 0 }}>
        <Image
          src="/images/app-logo.jpg"
          alt="Trinath logo"
          width={px}
          height={px}
          className="h-full w-full object-cover"
        />
      </div>
      {/* ── Brand name ── */}
      <span
        className={cn(
          "text-sm font-semibold tracking-wide",
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
