// See https://tailwindcss.com/docs/configuration for details
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

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
        orange: colors.orange,
      },
      backgroundImage: theme => ({
        'black-hole': "url('../images/blackhole_interstellar_dark_mid_sat.png')"
      }),
      flex: {
       '2': '2 2 0%',
       '1/3': '1 1 30%',
       '1/2': '1 1 50%'
      },
      spacing: {
        '100': '27rem',
        '120': '30rem',
        '19': '4.6rem'
      },
      inset: {
        '1/10': '10%',
        '1/5': '20%',
      },
      borderWidth: {
        '20': '20px'
      },
      boxShadow: {
        'timeline': '0px 0px 2px 8px #fff'
      }
    },
  },
  variants: {

  },

  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-pseudo-elements'),
    // This plugin is useful in combination with tailwindcss-aspect-ratio.
    require('tailwindcss-aspect-ratio'),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before', 'after']
      )
    }),
    ({ addUtilities, e, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'));
      delete colors['default'];

      const colorMap = Object.keys(colors)
        .map(color => ({
          [`.border-t-${color}`]: {borderTopColor: colors[color]},
          [`.border-r-${color}`]: {borderRightColor: colors[color]},
          [`.border-b-${color}`]: {borderBottomColor: colors[color]},
          [`.border-l-${color}`]: {borderLeftColor: colors[color]},
        }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
