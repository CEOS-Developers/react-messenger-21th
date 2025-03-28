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
        75: '#F6F6F6',
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
    extend: {
      fontSize: {
        head0: ['24px', { lineHeight: '36px', letterSpacing: '0px' }],
        head1: ['20px', { lineHeight: '30px', letterSpacing: '-0.3px' }],
        title1: ['18px', { lineHeight: '27px', letterSpacing: '-0.3px' }],
        title2: ['18px', { lineHeight: '27px', letterSpacing: '-0.3px' }],
        label1: ['16px', { lineHeight: '24px', letterSpacing: '-0.3px' }],
        label2: ['16px', { lineHeight: '24px', letterSpacing: '-0.3px' }],
        body1: ['14px', { lineHeight: '21px', letterSpacing: '-0.3px' }],
        body2: ['14px', { lineHeight: '21px', letterSpacing: '-0.3px' }],
        caption1: ['12px', { lineHeight: '18px', letterSpacing: '-0.3px' }],
        caption2: ['12px', { lineHeight: '18px', letterSpacing: '-0.3px' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        bottommenu: '0 -4px 12px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
