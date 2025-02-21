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
        accent: {
          red: "#E54D2E",
        },
        button: {
          light: "#DBD4CB",
          dark: "#3F3E3C",
        },
        border: {
          light: "#222221",
          dark: "#F0EEE6",
        },
      },
      opacity: {
        35: "0.35",
        40: "0.40",
        60: "0.60",
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#F0EEE6",
          dark: "#222221",
        },
        glass: {
          button: "rgb(219 212 203 / 0.9)", // button-light with opacity
          "button-dark": "rgb(63 62 60 / 0.9)", // button-dark with opacity
          blur: "rgb(240 238 230 / 0.9)", // primary with opacity
          "blur-dark": "rgb(34 34 33 / 0.9)", // primary-dark with opacity
        },
      },
      backdropBlur: {
        glass: "12px",
      },
      textColor: {
        primary: {
          DEFAULT: "#141413",
          dark: "#F0EEE6",
        },
        muted: {
          light: "rgb(34 34 33 / 0.6)", // dark at 60% opacity
          dark: "rgb(240 238 230 / 0.6)", // light at 60% opacity
        },
        dimmed: {
          light: "rgb(34 34 33 / 0.35)", // dark at 35% opacity
          dark: "rgb(240 238 230 / 0.35)", // light at 35% opacity
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
        "bubble-x": "clamp(0.25rem,2cqi,0.75rem)",
        "bubble-y": "clamp(0.1rem,1cqi,0.375rem)",
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
      transitionDuration: {
        150: "150ms",
        200: "200ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      gap: {
        "xs-dynamic": "clamp(0.25rem,1cqi,0.375rem)",
        "sm-fixed": "0.375rem",
      },
    },
  },
  plugins: [typography, aspectRatio, containerQueries],
} satisfies Config;
