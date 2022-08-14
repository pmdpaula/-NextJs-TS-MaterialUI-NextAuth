// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useTheme } from 'next-themes';
import { createContext, useMemo, useState } from 'react';

import { websitePageContextProps } from '../../../../../types/context.d';
import themeDark from '../../../../theme/themeDark';

export const WebsitePageContext = createContext<websitePageContextProps | null>(
  null,
);

export const WrapperProvider = ({ children }: any) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);
  // eslint-disable-next-line space-infix-ops, prettier/prettier, no-undef
  const [headTitle, setHeadTitle] = useState<string>('');
  const [isAtuh, setIsAuth] = useState(false);

  const providerValue = useMemo(
    () => ({
      resolvedTheme,
      currentTheme,
      setCurrentTheme,
      headTitle,
      setHeadTitle,
      isAtuh,
      setIsAuth,
    }),
    [currentTheme, headTitle, isAtuh, resolvedTheme],
  );

  return (
    // <AuthProvider>
    <WebsitePageContext.Provider value={providerValue}>
      {children}
    </WebsitePageContext.Provider>
    // </AuthProvider>
  );
};
