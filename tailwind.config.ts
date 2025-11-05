import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./error.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#070707",
        accent: "#f1df13",
      },
      fontFamily: {
        sans: ['"Montserrat"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
