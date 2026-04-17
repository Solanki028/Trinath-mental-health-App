import type { Config } from "tailwindcss";
import { colors as themeColors } from "./lib/theme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        card: "hsl(var(--card))",
        line: "hsl(var(--line))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        brand: "hsl(var(--brand))",
        "brand-foreground": "hsl(var(--brand-foreground))",
        secondary: "hsl(var(--secondary))",
        sand: "#f4ede4",
        sage: "#d8e3d0",
        moss: "#5a7162",
        clay: "#c2ac97",
        warm: "#fdf6ee",
        /* Editorial dark palette — sourced from lib/theme.ts */
        forest:       themeColors.forest,
        "forest-mid": themeColors.forestMid,
        earth:        themeColors.earth,
        cream:        themeColors.cream,
        gold:         themeColors.gold,
      },
      boxShadow: {
        soft: "0 20px 45px rgba(92, 81, 68, 0.08)",
        lift: "0 28px 60px rgba(92, 81, 68, 0.16)",
        glow: "0 0 0 3px rgba(169, 44, 42, 0.09), 0 28px 60px rgba(92, 81, 68, 0.14)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(176, 44, 44, 0.18), transparent 36%), radial-gradient(circle at top right, rgba(235, 223, 203, 0.95), transparent 40%), linear-gradient(140deg, rgba(255,255,255,0.95), rgba(248,242,234,0.88))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" }
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px) scale(1)" },
          "50%": { transform: "translateX(12px) scale(1.04)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        drift: "drift 24s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
