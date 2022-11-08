const theme = require('./config/theme.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{vue,ts,tsx}"],
  theme: {
    extend: {
      colors: theme.colors
    },
  },
  plugins: [],
};
