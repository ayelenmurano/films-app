const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      "special-grey": "#CDCDCD",
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus']
    }
  }
}
