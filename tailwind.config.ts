import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        headerBg: '#e4e9e9',
        text: 'rgb(32, 82, 149)',
        cardBg: '#f0f8ff',
        buttonTextDecoration: 'rgb(0, 135, 202)',
        background: '#e7ebf0'
      },
    },
  },
  plugins: [],
};
export default config;
