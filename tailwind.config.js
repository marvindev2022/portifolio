/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        hd: "90.01rem",
      },
      colors: {
        dark: "#09090b",
        light: "#fafafa",
        surface: "#111113",
        card: "#18181b",
        border: "#27272a",
        accent: "#3b82f6",
        "accent-light": "#60a5fa",
        muted: "#a1a1aa",
        "muted-dark": "#52525b",
        live: "#22c55e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        card: "0 0 0 1px #27272a",
        glow: "0 0 24px rgba(59,130,246,0.12)",
      },
    },
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.tsx"],
  plugins: [],
};
