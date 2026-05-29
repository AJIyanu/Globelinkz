import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from GlobeLinkz
        brand: {
          green: "#7DC12A",
          "green-light": "#9AD93A",
          navy: "#0A1E42",
          blue: "#1457A0",
          dark: "#040810",
          "dark-2": "#070D1C",
          card: "#0A1525",
          white: "#FFFFFF",
          "white-off": "#C8DCEF",
          gray: "#6E88A2",
          red: "#E84040",
        },
      },
      fontFamily: {
        heading: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        body: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "clamp-xl": "clamp(56px, 6vw, 88px)",
        "clamp-lg": "clamp(42px, 5.5vw, 72px)",
        "clamp-md": "clamp(46px, 7vw, 100px)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(125, 193, 42, 0.7)" },
          "70%": { boxShadow: "0 0 0 8px rgba(125, 193, 42, 0)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-left": {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "reveal-right": {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse 2s infinite",
        ticker: "ticker 26s linear infinite",
        reveal: "reveal 0.75s ease forwards",
        "reveal-left": "reveal-left 0.75s ease forwards",
        "reveal-right": "reveal-right 0.75s ease forwards",
      },
      backdropBlur: {
        md: "18px",
        lg: "14px",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(180deg, #7DC12A, #4a9010)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
