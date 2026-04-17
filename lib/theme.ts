/**
 * lib/theme.ts — Single source of truth for all design tokens.
 *
 * HOW TO USE:
 *   import { colors, bg, text, border } from "@/lib/theme";
 *   <section style={bg.dark}> ... </section>
 *   <span style={text.gold}>Label</span>
 *
 * HOW TO CHANGE A COLOR:
 *   Update the value here once → every file that imports from here updates automatically.
 */

// ────────────────────────────────────────────
// Core Color Palette
// ────────────────────────────────────────────
export const colors = {
  /** Deep forest green — primary dark section backgrounds */
  forest: "#1c2e22",
  /** Mid forest — stats strip, secondary dark backgrounds */
  forestMid: "#253c2b",
  /** Warm earth brown — CTA section background */
  earth: "#52321a",
  /** Cream off-white — light section backgrounds */
  cream: "#fdf7ee",
  /** Warm gold — all accent labels, CTA buttons, italic highlights */
  gold: "#d4943a",
  /** Pure white */
  white: "#ffffff",
} as const;

// ────────────────────────────────────────────
// Background Style Objects
// ────────────────────────────────────────────
export const bg = {
  /** Deep dark forest green */
  dark:    { backgroundColor: colors.forest } as React.CSSProperties,
  /** Slightly lighter forest green */
  darkMid: { backgroundColor: colors.forestMid } as React.CSSProperties,
  /** Warm earth brown */
  warm:    { backgroundColor: colors.earth } as React.CSSProperties,
  /** Cream off-white */
  light:   { backgroundColor: colors.cream } as React.CSSProperties,
  /** Gold accent */
  gold:    { backgroundColor: colors.gold } as React.CSSProperties,
} as const;

// ────────────────────────────────────────────
// Text Style Objects
// ────────────────────────────────────────────
export const text = {
  gold:   { color: colors.gold } as React.CSSProperties,
  forest: { color: colors.forest } as React.CSSProperties,
  white:  { color: colors.white } as React.CSSProperties,
} as const;

// ────────────────────────────────────────────
// Border Style Objects
// ────────────────────────────────────────────
export const border = {
  gold:        { borderColor: colors.gold } as React.CSSProperties,
  forest:      { borderColor: colors.forest } as React.CSSProperties,
  goldSubtle:  { borderColor: `${colors.gold}66` } as React.CSSProperties,  // 40% opacity
  whiteSubtle: { borderColor: "rgba(255,255,255,0.15)" } as React.CSSProperties,
} as const;

// ────────────────────────────────────────────
// Overlay Gradients (for image sections)
// ────────────────────────────────────────────
export const overlays = {
  /** Soft bottom-up dark fade for hero — image stays visible, text is readable */
  heroVertical:     "linear-gradient(to bottom, rgba(28,46,34,0.55) 0%, rgba(28,46,34,0.35) 45%, rgba(28,46,34,0.85) 100%)",
  /** Left horizontal fade for side text panels */
  heroHorizontal:   "linear-gradient(to right, rgba(28,46,34,0.75) 0%, rgba(28,46,34,0.2) 60%, transparent 100%)",
  /** For earth/CTA sections */
  ctaHorizontal:    "linear-gradient(to right, rgba(82,50,26,0.92) 0%, rgba(82,50,26,0.65) 60%, transparent 100%)",
  /** Standard card image bottom fade */
  cardBottomFade:   "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
  /** Testimonial featured quote overlay — lighter to let image breathe */
  featureBottomFade:"linear-gradient(to top, rgba(28,46,34,0.9) 0%, transparent 100%)",
} as const;

// ────────────────────────────────────────────
// Image Opacity Values
// ────────────────────────────────────────────
export const imageOpacity = {
  /** Hero — image should be clearly visible */
  hero: 0.60,
  /** CTA section — image subtle, text is dominant */
  cta: 0.35,
  /** Service/feature cards */
  card: 0.75,
} as const;
