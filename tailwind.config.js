const theme = require("./config/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...theme,
      },
    },
  },
  plugins: [],
};
