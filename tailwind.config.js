const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      ...colors,
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        darkHeader: '#141414',
        darkSider: '#1f1f1f',
        darkPrimary: '#010508',
      },
      blue: {
        ...colors.blue,
        lightPrimary: '#e6f7ff',
      },
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      // customDark:{
      //   bgColor:'#2a303c',
      //   placeholderColor:'#9ca3af'
      // }
    },
    screens: {
      xs: '530px',
      ...defaultTheme.screens,
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('daisyui')],
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**.tsx',
    './src/layouts/**.tsx',
  ],
};
