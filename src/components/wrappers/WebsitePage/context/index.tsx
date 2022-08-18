// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { createContext, useMemo, useState } from 'react';

import themeDark from '../../../../theme/themeDark';
import { websitePageContextProps } from '../../../../types/context.d';

export const WebsitePageContext = createContext<websitePageContextProps | null>(
  null,
);

export const WrapperProvider = ({ children }: any) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);
  // eslint-disable-next-line space-infix-ops, prettier/prettier, no-undef
  const [headTitle, setHeadTitle] = useState<string>('');
  const { data: sessionData, status: sessionStatus } = useSession();

  // console.log('sessionData', sessionData);
  // console.log('sessionStatus', sessionStatus);

  const providerValue = useMemo(
    () => ({
      resolvedTheme,
      currentTheme,
      setCurrentTheme,
      headTitle,
      setHeadTitle,
      sessionData,
      sessionStatus,
    }),
    [currentTheme, headTitle, resolvedTheme, sessionData, sessionStatus],
  );

  return (
    // <AuthProvider>
    <WebsitePageContext.Provider value={providerValue}>
      {children}
    </WebsitePageContext.Provider>
    // </AuthProvider>
  );
};
