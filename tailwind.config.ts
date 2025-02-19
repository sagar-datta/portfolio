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
          DEFAULT: "#171717",
          dark: "#ededed",
        },
      },
      borderColor: {
        primary: {
          DEFAULT: "#F0EEE6",
          dark: "#ededed",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
