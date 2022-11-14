const theme_default_light = require("./config/themes/default/index.light.css");
const theme_default_dark = require("./config/themes/default/index.dark.css");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["src/**/*.{vue,ts,tsx}", "index.html"],
    theme: {
      extend: {
        colors: {
          default: {
            light: {
              ...theme_default_light,
            },
            dark: {
              ...theme_default_dark,
            },
          },
        },
      },
    },
    plugins: [],
    options: {
      safeList: ["bg-default-light-primary", "bg-default-dark-primary"],
    },
  },
};
