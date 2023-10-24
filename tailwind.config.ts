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
      lineHeight: {
        "0": "0",
      },
      minHeight: {
        "min-content": "calc(100vh - 85px)",
      },
      minWidth: {
        "min-panel": "115px",
      },
      dropShadow: {
        text: "8px 5px 0px #266613",
      },
      colors: {
        background: "#1D1D1D",
        header: "#111111",
        painel: "#3E3E3E",
        brand: "#43BB21",
        warning: "#FF0000",
        menu: "#2C2C2C",
      },
      spacing: {
        85: "85px",
      },
    },
  },
  plugins: [],
};
export default config;
