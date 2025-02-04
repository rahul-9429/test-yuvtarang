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
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "primary-light": "var(--primary-light)",
        "primary": "var(--primary)",
        "border": "var(--border)",
        "footer": "var(--footer)",
      },
      screens: {
        "2xl": { max: "1600px" },
        xl: { max: "1279px" },
        xl1: { max: "1115px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "479px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
