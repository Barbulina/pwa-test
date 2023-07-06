interface Palette {
  [key: string]: { [key: string]: string };
}

export const palette: Palette = {
  common: {
    transparent: 'rgba(255,255,255,0)',
    black: '#000000',
    white: '#ffffff',
  },
  error: {
    dark: '#BD1818',
    light: '#FFE5E5',
    main: '#FF0000',
  },
  grey: {
    50: '#F9F9FA',
    100: '#EEEEEE',
    200: '#DDDDDD',
    300: '#D2D2D2',
    400: '#C0C0C0',
    500: '#B0B0B0',
    600: '#979797',
    700: '#6b6b6b',
    800: '#525252',
    900: '#191919',
    A100: '#E0E0E0',
    A200: '#CFDAE5',
    A400: '#929FAD',
    A700: '#4B5D72',
    B200: '#CFDAE5',
    B700: '#6B6B6B',
  },
  info: {
    dark: '#003AAA',
    light: '#BAD1FF',
    lighter: '#E5EEFF',
    main: '#0057FF',
  },
  primary: {
    dark: '#0DC584',
    light: '#BCFFE7',
    main: '#2EEFAA',
  },
  secondary: {
    dark: '#381188',
    light: '#CBBEFF',
    main: '#5D1CE3',
  },
  success: {
    dark: '#008033',
    light: '#E5F5EC',
    main: '#2AC769',
  },
  warning: {
    dark: '#B26000',
    light: '#FEF6E6',
    main: '#F6A609',
  },
  purple: {
    dark: '#381188',
    main: '#5D1CE3',
    light: '#E1DAFF',
  },
  accent: {
    main: '#E633C8',
    light: '#FADBFF',
    dark: '#C20AA3',
  },
};
