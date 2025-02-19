import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
          dark: "#3B3B39",
        },
      },
      dropShadow: {
        primary: "0 10px 15px rgba(20, 20, 19, 0.2)",
        "primary-dark": "0 10px 15px rgba(0, 0, 0, 0.5)",
        "primary-lg": "0 15px 30px rgba(20, 20, 19, 0.25)",
        "primary-lg-dark": "0 15px 30px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
