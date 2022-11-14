const theme_default_light = require("./config/themes/default/index.light.css");
const theme_default_dark = require("./config/themes/default/index.dark.css");

function generateSafeList(themeName) {
  const keys = [
    ...new Set(Object.keys({ ...theme_default_dark, ...theme_default_dark })),
  ];
  return keys
    .map((key) =>
      [`${themeName}-light-${key}`, `${themeName}-dark-${key}`].map((basic) => [
        basic,
        `bg-${basic}`,
        `text-${basic}`,
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
