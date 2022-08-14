// import { createMuiTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

import { overridesTheme } from '.';

// Create a theme instance.
const themeLight = createTheme({
  ...overridesTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#42929D',
    },
    secondary: {
      main: '#007b5f',
      contrastText: '#ddd',
    },
    tertiary: {
      main: '#01426A',
      contrastText: '#ddd',
    },
    error: {
      main: red.A100,
    },
    warning: {
      main: '#FECC17',
    },
    backgroundDrawer: {
      main: grey[100],
    },
  },
});

export default themeLight;

export type ThemeProps = typeof themeLight;
