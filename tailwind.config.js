const colors = require('tailwindcss/colors')

module.exports = {
  //mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        blue: {
          DEFAULT: '#556EE6',
        },
        purple: {
          DEFAULT: '#6B21A8',
        },
        red: colors.red,
      },
      width:{
        '300':'300px',
      }
    },
    bottom: {
      0: 0,
      75: '75px',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '36px'],
      12: ['12px', '18px'],
      20: ['20px', '26px'],
      32: ['32px', '40px'],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
  variants: {
    extend: {},
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
}
