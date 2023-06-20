/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0D1119',
        'teal': {
          60: "#17CFC4"
        },
        'neutral' : {
          20: "#7185AA",
          40: "#1D2A43",
          60: "#171F2F",
          70: "#5B6178",
          80: "#131823",
          90: "#313545"
        }
      },
      boxShadow: {
        'custom': '0px 0px 0px 1px #5B6178',
      },
      fontFamily: {
        sans: ["HelveticaNeue", ...defaultTheme.fontFamily.sans],
        serif: ["Roboto", ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}