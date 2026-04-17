"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function buttonStyles({
  className,
  fullWidth,
  size = "md",
  variant = "primary"
}: {
  className?: string;
  fullWidth?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-3 text-sm sm:px-6",
    size === "lg" && "px-6 py-3.5 text-base sm:px-7",
    variant === "primary" &&
      "bg-brand text-brand-foreground shadow-soft hover:bg-brand/92",
    variant === "secondary" &&
      "border border-brand/15 bg-white/80 text-foreground hover:bg-white",
    variant === "ghost" && "text-foreground/80 hover:text-foreground",
    fullWidth && "w-full",
    className
  );
}

export function Button({
  children,
  className,
  fullWidth,
  href,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = buttonStyles({ className, fullWidth, size, variant });

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.99 }}
        className={fullWidth ? "flex w-full" : "inline-flex"}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: props.disabled ? 1 : 1.02, y: props.disabled ? 0 : -1 }}
      whileTap={{ scale: props.disabled ? 1 : 0.99 }}
      className={fullWidth ? "flex w-full" : "inline-flex"}
    >
      <button className={classes} {...props}>
        {children}
      </button>
    </motion.div>
  );
}
