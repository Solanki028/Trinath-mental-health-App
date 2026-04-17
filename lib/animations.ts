import type { Variants } from "framer-motion";

// ─── Timing ────────────────────────────────────────────────────

export const ease = {
  smooth: [0.22, 1, 0.36, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
  in: [0.7, 0, 1, 0.8] as const
};

// ─── Fade Up ────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: ease.smooth }
  }
};

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: ease.smooth }
  }
};

// ─── Fade In ────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// ─── Scale In ────────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: ease.smooth }
  }
};

// ─── Slide In ────────────────────────────────────────────────────

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.smooth }
  }
};

// ─── Stagger Container ────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.02
    }
  }
};

// ─── Word / Character Stagger ─────────────────────────────────────

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: ease.smooth }
  }
};

// ─── Viewport Defaults ────────────────────────────────────────────

export const viewportOnce = { once: true, amount: 0.15 } as const;
export const viewportEager = { once: true, amount: 0.08 } as const;
