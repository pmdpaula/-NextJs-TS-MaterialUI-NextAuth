import { ReactNode } from 'react';

export type PageWrapperPropsType = {
  seoProps?: { headTitle: string };
  hasDrawer?: boolean;
  hasAppBar?: boolean;
  hasFooter?: boolean;
  // menuProps?: {
  //   display: boolean;
  // };
  footerProps?: {
    content?: ReactNode;
  };
  // context?: any;
};

export interface WebsitePageWrapperProps {
  themeProps: {
    isDark: boolean;
  };
  seoProps?: { headTitle: string };
  hasDrawer?: boolean;
  hasAppBar?: boolean;
  hasFooter?: boolean;
  footerProps?: {
    content?: ReactNode;
  };
  // context?: any;
  children: ReactNode;
  themeMode?: string;
}
