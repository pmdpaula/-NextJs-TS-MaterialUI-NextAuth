import './app/login.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
// } from '@tanstack/react-query/build/types/packages/react-query/src';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// import { SessionProvider } from 'next-auth/react';
// import { Session } from '../types/next-auth.d';
// import { Hydrate, QueryClientProvider } from 'react-query';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* <ThemeProvider theme={theme}> */}
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </CacheProvider>
  );
};

export default MyApp;
