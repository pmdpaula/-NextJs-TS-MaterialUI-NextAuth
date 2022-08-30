/* eslint-disable react/destructuring-assignment */
import { ThemeProvider } from 'next-themes';

import { PageWrapperPropsType } from '../../../../types/indexWrapper.d';
import WebsitePageWrapper from '..';
import { WrapperProvider } from '../context';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponent: any,
  pageWrapperProps: PageWrapperPropsType,
) {
  return (props: any) => (
    <WrapperProvider>
      <ThemeProvider defaultTheme="system">
        <WebsiteGlobalProvider>
          <WebsitePageWrapper
            {...pageWrapperProps}
            {...props}
            messages={props.messages}
          >
            <PageComponent {...pageWrapperProps} />
          </WebsitePageWrapper>
        </WebsiteGlobalProvider>
      </ThemeProvider>
    </WrapperProvider>
  );
}
