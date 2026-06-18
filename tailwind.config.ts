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
        // Nike-inspired palette
        canvas: "#ffffff",
        "soft-cloud": "#f5f5f5",
        hairline: "#cacacb",
        ink: {
          // Remapped to light surfaces so existing class names still resolve
          950: "#ffffff",   // body bg (was near-black)
          900: "#f5f5f5",   // alt section bg (was dark card)
          850: "#ffffff",   // card bg
          800: "#f5f5f5",
          750: "#e5e5e5",
          700: "#cacacb",   // hairline
          DEFAULT: "#111111",
          charcoal: "#39393b",
          mute: "#707072",
        },
        brand: {
          DEFAULT: "#111111",  // Nike black as primary
          light: "#39393b",    // charcoal
          dark: "#111111",
          glow: "transparent",
        },
        accent: {
          DEFAULT: "#111111",
          light: "#39393b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        campaign: ["var(--font-campaign)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #111111 0%, #39393b 100%)",
        "hero-glow": "none",
      },
      boxShadow: {
        glow: "none",
        card: "none",
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
