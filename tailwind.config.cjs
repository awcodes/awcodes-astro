const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "font-display": ["Fira Sans", ...fontFamily.sans],
      },
      colors: {
        white: {
          50: "#fffefe",
          100: "#fffefd",
          200: "#fefcfa",
          300: "#fdfaf7",
          400: "#fcf7f0",
          500: "#fbf3ea",
          600: "#e2dbd3",
          700: "#bcb6b0",
          800: "#97928c",
          900: "#7b7773",
        },
        gray: {
          50: "#f3f4f5",
          100: "#e7eaeb",
          200: "#c4cacc",
          300: "#a0a9ad",
          400: "#596970",
          500: "#122932",
          600: "#10252d",
          700: "#0e1f26",
          800: "#0b191e",
          900: "#091419",
        },
        primary: {
          50: "#fbf5f6",
          100: "#f8ebec",
          200: "#eccdd0",
          300: "#e1afb3",
          400: "#cb737a",
          500: "#b43741",
          600: "#a2323b",
          700: "#872931",
          800: "#6c2127",
          900: "#581b20",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
