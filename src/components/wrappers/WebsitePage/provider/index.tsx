/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

// import { ThemeProvider } from 'styled-components';
import themeDark from '../../../../theme/themeDark';
import themeLight from '../../../../theme/themeLight';

interface WebsiteGlobalProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react/function-component-definition
export default function WebsiteGlobalProvider({
  children,
}: WebsiteGlobalProviderProps) {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    resolvedTheme === 'light'
      ? setCurrentTheme(themeLight)
      : setCurrentTheme(themeDark);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {/* <GlobalStyle /> */}
      {children}
    </ThemeProvider>
  );
}
