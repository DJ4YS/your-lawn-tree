import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  "#f0faf0",
          100: "#d9f2d9",
          200: "#b2e5b2",
          300: "#7dcf7d",
          400: "#4db84d",
          500: "#2e9e2e",
          600: "#237f23",
          700: "#1c641c",
          800: "#174f17",
          900: "#123f12",
          950: "#0a240a",
        },
        lawn: {
          light: "#6BBF6B",
          DEFAULT: "#2E7D32",
          dark: "#1B5E20",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
