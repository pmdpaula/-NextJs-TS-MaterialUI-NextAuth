// import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import { styled, useTheme } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';

import { ThemeProps } from '../../../theme/themeLight';
import { WebsitePageWrapperProps } from '../../../types/indexWrapper.d';
import AxAppBar from '../../foundation/AxAppBar/AxAppBar';
import AxDrawer from '../../foundation/AxDrawer/AxDrawer';
import AxFooter from '../../foundation/AxFooter/AxFooter';
import SEO from '../../foundation/SEO';
import { WebsitePageContext } from './context/index';

const DrawerAnchor = styled('div')({
  display: 'flex',
});

const AxMain = styled('main')({
  flexGrow: 1,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const AppBarSpacer = styled('div')(({ theme }: any) => theme.mixins.toolbar);

const WebsitePageWrapper = ({
  children,
  seoProps,
  hasDrawer = true,
  hasAppBar = true,
  hasFooter = false,
}: WebsitePageWrapperProps): JSX.Element => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  const websitePageContext = useContext(WebsitePageContext);
  const isAuthenticated = websitePageContext?.sessionStatus === 'authenticated';

  const isDrawerCloseble = !useMediaQuery(theme.breakpoints.up('md'));

  const [openDrawer, setOpenDrawer] = useState<boolean>(!isDrawerCloseble);
  const [mounted, setMounted] = useState(false);

  const toggleOpenDrawer = () => {
    setOpenDrawer(isDrawerCloseble ? !openDrawer : true);
  };

  // eslint-disable-next-line operator-linebreak
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        // eslint-disable-next-line prettier/prettier
        event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenDrawer(isDrawerCloseble ? open : true);
    };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    websitePageContext?.setHeadTitle(seoProps?.headTitle || '');
  }, [seoProps?.headTitle, websitePageContext]);

  useEffect(() => {
    setOpenDrawer(!isDrawerCloseble);
  }, [isDrawerCloseble]);

  if (!mounted) return <SEO {...seoProps} />;

  return (
    <>
      <SEO {...seoProps} />
      {seoProps?.headTitle !== 'Login' ? (
        <DrawerAnchor key="drawerAnchor">
          <div>
            {hasAppBar && (
              <AxAppBar
                open={openDrawer}
                // eslint-disable-next-line react/jsx-no-bind
                toggleOpenDrawer={toggleOpenDrawer}
                hasDrawer={hasDrawer}
              />
            )}
          </div>

          {hasDrawer && isAuthenticated && (
            <AxDrawer
              open={openDrawer}
              toggleOpenDrawer={toggleOpenDrawer}
              onClose={toggleDrawer(false)}
              variant={isDrawerCloseble ? 'temporary' : 'permanent'}
            />
          )}

          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <AxMain onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            {hasAppBar && <AppBarSpacer />}
            <Container maxWidth="lg">{children}</Container>
            {hasFooter && (
              <Container style={{ marginTop: 'auto' }}>
                <AxFooter />
              </Container>
            )}
          </AxMain>
        </DrawerAnchor>
      ) : (
        <section>{children}</section>
      )}
    </>
  );
};

export default WebsitePageWrapper;
