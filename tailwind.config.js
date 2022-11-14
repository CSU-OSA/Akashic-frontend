const theme_default_light = require("./config/themes/default/index.light.css");
const theme_default_dark = require("./config/themes/default/index.dark.css");
const theme_model = require("./config/themes/_model.css");

function generateSafeList(themeName) {
  const keys = [...new Set(Object.keys({ ...theme_model }))];
  return keys
    .map((key) =>
      [`${themeName}-light-${key}`, `${themeName}-dark-${key}`].map((basic) => [
        basic,
        `accent-${basic}`,
        `bg-${basic}`,
        `border-${basic}`,
        `border-x-${basic}`,
        `border-y-${basic}`,
        `border-t-${basic}`,
        `border-b-${basic}`,
        `border-l-${basic}`,
        `border-r-${basic}`,
        `caret-${basic}`,
        `decoration-${basic}`,
        `divide-${basic}`,
        `fill-${basic}`,
        `outline-${basic}`,
        `placeholder-${basic}`,
        `ring-${basic}`,
        `shadow-${basic}`,
        `text-${basic}`,
        `to-${basic}`,
        `via-${basic}`,
      ])
    )
    .flat(2);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
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
  purge: {
    content: ["src/**/*.{vue,ts,tsx}", "index.html"],
    safelist: generateSafeList("default"),
  },
};
