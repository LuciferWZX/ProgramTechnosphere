const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**.tsx',
    './src/layouts/**.tsx',
  ],
};
