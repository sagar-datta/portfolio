import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        light: "#F0EEE6",
        dark: "#222221",
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#F0EEE6",
          dark: "#222221",
        },
      },
      textColor: {
        primary: {
          DEFAULT: "#141413",
          dark: "#F0EEE6",
        },
      },
      borderColor: {
        primary: {
          DEFAULT: "#FFFFFF",
          dark: "#161615",
        },
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h2: ["2.25rem", { lineHeight: "1.3" }],
        h3: ["1.875rem", { lineHeight: "1.4" }],
        h4: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "4xs": "0.125rem",
        "3xs": "0.25rem",
        "2xs": "0.375rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [typography, aspectRatio, containerQueries],
} satisfies Config;
