import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface Palette {
    tertiary: {
      main: string;
      contrastText: string;
    };
    backgroundDrawer: {
      main: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface PaletteOptions {
    tertiary?: {
      main?: string;
      contrastText?: string;
    };
    backgroundDrawer?: {
      main: string;
    };
  }
}

export const overridesTheme = createTheme({
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});
