import { ReactNode } from 'react';

export interface WebsitePageWrapperProps {
  themeProps: {
    isDark: boolean;
  };
  seoProps?: { headTitle: string };
  hasDrawer: boolean;
  hasAppBar: boolean;
  hasFooter: boolean;
  menuProps?: {
    display: boolean;
  };
  // footerProps?: {
  //   content?: ReactNode;
  // };
  children: ReactNode;
  themeMode?: string;
}
