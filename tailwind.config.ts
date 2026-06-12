import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070c",
          900: "#0b0b12",
          850: "#101019",
          800: "#15151f",
          750: "#1b1b27",
          700: "#23232f",
        },
        brand: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
          glow: "#c084fc",
        },
        accent: {
          DEFAULT: "#d946ef",
          light: "#e879f9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.18) 0%, rgba(217,70,239,0.06) 45%, rgba(7,7,12,0) 80%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139,92,246,0.25), 0 20px 60px -15px rgba(139,92,246,0.35)",
        card: "0 12px 40px -12px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
