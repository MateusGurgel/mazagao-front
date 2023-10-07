import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#111111",
        brand: "#43BB21",
        background: "1D1D1D",
        menu: "2C2C2C",
        painel: "3E3E3E",
      },
      spacing: {
        85: "85px",
      },
    },
  },
  plugins: [],
};
export default config;
