/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./docs/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        abrilFatface: ["Abril Fatface", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Add your custom colors here
        "custom-pink": "#F5CDB2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
