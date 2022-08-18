/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import WebsitePageWrapper from '..';
import { WrapperProvider } from '../context';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponent: any,
  pageWrapperProps: Record<string, unknown>,
  session?: Session,
) {
  return (props: any) => (
    <SessionProvider session={session}>
      <WrapperProvider>
        <ThemeProvider defaultTheme="system">
          <WebsiteGlobalProvider>
            <WebsitePageWrapper
              {...props}
              {...pageWrapperProps}
              messages={props.messages}
            >
              <PageComponent {...pageWrapperProps} />
            </WebsitePageWrapper>
          </WebsiteGlobalProvider>
        </ThemeProvider>
      </WrapperProvider>
    </SessionProvider>
  );
}
