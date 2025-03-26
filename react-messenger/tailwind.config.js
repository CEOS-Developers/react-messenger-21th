/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        0: '#39D4A3',
      },
      grey: {
        50: '#FCFCFE',
        100: '#EBEBF0',
        200: '#E4E4EB',
        300: '#D6D5DE',
        400: '#BAB9C6',
        500: '#A4A3AE',
        600: '#72717D',
        700: '#5E5D69',
        800: '#3F3E49',
        900: '#121214',
      },
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
