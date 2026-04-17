/**
 * data/conditions.ts — Mental health conditions config
 *
 * TO UPDATE AN ICON: change the `icon` field for any condition here.
 * TO ADD A CONDITION: add a new object to the array.
 * TO CHANGE COLORS:  update `iconBg` — accepts any CSS color string.
 *
 * The ServicesSection will automatically reflect all changes here.
 */

export type Condition = {
  title: string;
  description: string;
  icon: string;
  /** Background color behind the icon */
  iconBg: string;
  /**
   * How the icon image fits its container:
   * - "contain" → shows full icon with padding (best for transparent PNGs)
   * - "cover"   → fills the container edge-to-edge (best for JPGs with background)
   * Defaults to "contain" if not set.
   */
  iconFit?: "contain" | "cover";
  href: string;
};

export const conditions: Condition[] = [
  {
    title: "Depression",
    description: "Does your life feel impossible and hopeless? You don't have to manage it alone.",
    icon: "/images/depression icon.jpg",
    iconBg: "#dce8e0",
    iconFit: "cover",   // JPG with background — use cover to fill; switch to contain if icon has padding
    href: "/book-session"
  },
  {
    title: "Anxiety",
    description: "Chronic worry and feeling like your thoughts are always one step ahead of you.",
    icon: "/images/anxiety icon.jpg",
    iconBg: "#e8dff0",
    iconFit: "cover",
    href: "/book-session"
  },
  {
    title: "Burnout",
    description: "Exhausted, detached, and running on empty? Burnout is real — you deserve rest.",
    icon: "/images/burnout icon.jpg",
    iconBg: "#fde8d8",
    iconFit: "cover",
    href: "/book-session"
  },
  {
    title: "Alcohol Addiction",
    description: "Is your use of alcohol interfering with your ability to lead a fulfilling life? You can find the right support.",
    icon: "/images/image.png",
    iconBg: "#fde0e0",
    iconFit: "cover",
    href: "/book-session"
  },
  {
    title: "Sleep Disorders",
    description: "Poor sleep affects everything. We support the patterns keeping you awake at night.",
    icon: "/images/sleep disorder icon.png",
    iconBg: "#dde8f5",
    iconFit: "cover",
    href: "/book-session"
  },
  {
    title: "Grief & Loss",
    description: "Losing someone changes you. We walk alongside you as you find your way forward.",
    icon: "/images/grief.png",
    iconBg: "#e8ebe0",
    iconFit: "cover",
    href: "/book-session"
  },
  {
    title: "Stress & Overwhelm",
    description: "When every day feels like too much — we help you breathe again and find footing.",
    icon: "/images/stress icoon.jpg",
    iconBg: "#d8eef5",
    iconFit: "cover",
    href: "/book-session"
  },
  {
    title: "Self-worth & Identity",
    description: "Struggling with who you are? We help you reconnect with your own voice and worth.",
    icon: "/images/self worth icon.png",
    iconBg: "#f5ecd8",
    iconFit: "cover",
    href: "/book-session"
  }
];
