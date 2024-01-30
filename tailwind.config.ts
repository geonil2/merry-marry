import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f4f6fa",
          100: "#e8edf5",
          200: "#c6d1e5",
          300: "#a4b6d5",
          400: "#5f7fb6",
          500: "#1b4897",
          600: "#184188",
          700: "#143671",
          800: "#102b5b",
          900: "#0d234a"
        },
      }
    },
  },
  plugins: [],
};
export default config;
