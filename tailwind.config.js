const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '530px',
      ...defaultTheme.screens,
    },
  },
  corePlugins: {
    preflight: false,
  },
  purge: ['./src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**.tsx',
    './src/layouts/**.tsx',
  ],
};
