const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ["active", "hover"],
    },
  },
  plugins: [],
};
