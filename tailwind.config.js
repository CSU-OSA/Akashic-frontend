const theme = require("./config/themes/index.css");

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
