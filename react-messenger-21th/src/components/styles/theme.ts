// src/styles/theme.ts
const theme = {
  colors: {
    grey01: '#F3F4F6',
    grey02: '#E5E7EB',
    grey03: '#F3F4F6',
    grey04: '#D1D5DB',
    grey05: '#9CA3AF',
    grey06: '#687280',
    grey07: '#374151',
    grey08: '#1F2937',
    grey09: '#111827',
    main: '#DFFF3C',
    main2: '#E4F39B',
    point: '#DF2F25',
    white: '#FEFEFE',
    black: '#111827',
  },
  typography: {
    headline: { fontSize: '24px', fontWeight: '600', letterSpacing: '-1.5%' },
    title: { fontSize: '19px', fontWeight: '500', letterSpacing: '-1.5%' },
    label: { fontSize: '19px', fontWeight: '500', letterSpacing: '-1.5%' },
    body1: { fontSize: '17px', fontWeight: '400', letterSpacing: '-1.5%' },
    body2: { fontSize: '14px', fontWeight: '400', letterSpacing: '-1.5%' },
    caption1: { fontSize: '12px', fontWeight: '400', letterSpacing: '-1.5%' },
    caption2: { fontSize: '10px', fontWeight: '400', letterSpacing: '-1.5%' },
  },
  grid: {
    width: '375px', // ✅ 개발 해상도 고정
    height: '812px',
    columns: 4, // ✅ Count 4
    margin: '20px', // ✅ Margin 20
    gutter: '12px', // ✅ Gutter 12
  },
};

export default theme;
