// See https://tailwindcss.com/docs/configuration for details
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        },
        teal: colors.teal,
        blueGray: colors.blueGray,
      },
      flex: {
       '2': '2 2 0%',
       '1/3': '1 0 30%'
      },
      spacing: {
        '120': '30rem'
      }
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
