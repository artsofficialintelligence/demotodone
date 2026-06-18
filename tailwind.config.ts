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
        // Stripe-inspired palette
        canvas: "#ffffff",
        "canvas-soft": "#f6f9fc",
        "canvas-cream": "#f5e9d4",
        hairline: "#e3e8ee",
        "hairline-input": "#a8c3de",
        ink: {
          // Text hierarchy — deep navy
          950: "#ffffff",
          900: "#f6f9fc",
          850: "#ffffff",
          800: "#f6f9fc",
          750: "#e3e8ee",
          700: "#e3e8ee",
          DEFAULT: "#0d253d",
          charcoal: "#273951",
          mute: "#64748d",
        },
        brand: {
          DEFAULT: "#533afd",   // Stripe indigo
          light: "#665efd",
          dark: "#1c1e54",      // brand-dark-900
          glow: "rgba(83,58,253,0.15)",
        },
        accent: {
          DEFAULT: "#533afd",
          light: "#665efd",
        },
        primary: {
          DEFAULT: "#533afd",
          deep: "#4434d4",
          press: "#2e2b8c",
          soft: "#665efd",
          subdued: "#b9b9f9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        campaign: ["var(--font-campaign)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #533afd 0%, #4434d4 100%)",
        "hero-mesh": "radial-gradient(ellipse 80% 60% at 50% -10%, #f5e9d4 0%, #e8e4ff 30%, #c8d8ff 55%, #ffffff 80%)",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% -10%, #f5e9d4 0%, #e8e4ff 30%, #c8d8ff 55%, #ffffff 80%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(83,58,253,0.18)",
        card: "0 2px 8px rgba(13,37,61,0.06), 0 0 0 1px #e3e8ee",
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
