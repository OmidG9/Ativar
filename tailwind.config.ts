import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#176B9B",
          accent: "#12AFC1",
          light: "#F5FAFC",
          accentLight: "#E7F8F8",
          blueLight: "#DCEFF7",
        },
        text: {
          primary: "#243746",
          secondary: "#607482",
        },
        border: {
          DEFAULT: "#E1EAF0",
        },
        surface: {
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "Tahoma", "Arial", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(36, 55, 70, 0.02), 0 1px 3px rgba(23, 107, 155, 0.02)",
        card: "0 10px 40px -20px rgba(23, 107, 155, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
