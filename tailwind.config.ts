import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ross: "var(--ross)",
      },
      screens: {
        xl: { max: "1279px" },
        ml: { max: "1060px" },
        lg: { max: "960px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        xs: { max: "450px" },
        ms: { max: "400px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
