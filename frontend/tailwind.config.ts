import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cbe: {
          blue: "#0067b1",
          blueHover: "#005a9b",
          green: "#00a651",
          greenHover: "#008d44",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
