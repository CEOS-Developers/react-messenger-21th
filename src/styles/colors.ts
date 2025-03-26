export type ColorPalette = {
  Primary: {
    MainBlue: string;
    Blue: string;
    DarkBlue: string;
    Pink: string;
  };
  Grayscale: {
    0: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
  };
};

export const colors: ColorPalette = {
  Primary: {
    MainBlue: '#4B84FF',
    Blue: '#3860B7',
    DarkBlue: '#2B3E68',
    Pink: '#FF719E',
  },
  Grayscale: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F2F4F6',
    200: '#E5E8EB',
    300: '#D1D6DB',
    400: '#B0B8C1',
    500: '#8B95A1',
    600: '#6B7684',
    700: '#4E5968',
    800: '#333D4B',
    900: '#191F28',
    1000: '#222222',
  },
};
