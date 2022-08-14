/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
import { ThemeProvider } from 'next-themes';

import WebsitePageWrapper from '..';
import { WrapperProvider } from '../context';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponent: any,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props: any) => (
    <WrapperProvider>
      <ThemeProvider defaultTheme="system">
        <WebsiteGlobalProvider>
          <WebsitePageWrapper
            {...pageWrapperProps}
            {...props.pageWrapperProps}
            messages={props.messages}
          >
            <PageComponent {...props} />
          </WebsitePageWrapper>
        </WebsiteGlobalProvider>
      </ThemeProvider>
    </WrapperProvider>
  );
}
