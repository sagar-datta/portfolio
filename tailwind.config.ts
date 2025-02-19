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
        dark: "#141413",
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#F0EEE6",
          dark: "#141413",
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
          DEFAULT: "#F0EEE6",
          dark: "#141413",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
