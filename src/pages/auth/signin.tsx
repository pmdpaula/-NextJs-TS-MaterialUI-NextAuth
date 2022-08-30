import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';
import { ThemeProvider, useTheme as useThemeNT } from 'next-themes';
import { useEffect } from 'react';

import SEO from '../../components/foundation/SEO';
import { WrapperProvider } from '../../components/wrappers/WebsitePage/context';
import WebsiteGlobalProvider from '../../components/wrappers/WebsitePage/provider';
import { ThemeProps } from '../../theme/themeLight';
import { hslDarken } from '../../utils/convertColor';
import styles from './Signin.module.css';

export async function getServerSideProps(context: any) {
  const providers = await getProviders();

  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}

const PageSignIn = ({
  // csrfToken,
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { resolvedTheme } = useThemeNT(); // useTheme from next-themes

  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  // eslint-disable-next-line prettier/prettier
  const logo = resolvedTheme === 'dark'
      ? '/AxBladeSoftware_logo_nome_light.svg'
      : '/AxBladeSoftware_logo_nome_dark.svg';

  const wrapperBgColor = hslDarken(theme.palette.primary.main, 0.7);

  return (
    <WrapperProvider>
      <ThemeProvider defaultTheme="system">
        <WebsiteGlobalProvider>
          <SEO headTitle="Login" />
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            {/* <Header /> */}
            <Box
              className={styles.wrapper}
              sx={{ background: wrapperBgColor }}
            />
            <Grid
              // display="flex"
              // justifyContent="center"
              container
              spacing={{ xs: 0, md: 2 }}
              className={styles.content}
            >
              {/* <Grid item xs={0} md={2} lg={3} /> */}
              <Grid
                item
                xs={12}
                sx={{
                  marginX: { xs: '1em', sm: '5em', md: '14em', lg: '22em' },
                }}
              >
                <Paper elevation={16} className={styles.cardWrapper}>
                  <Image
                    src={logo}
                    // src="/AxBladeSoftware_logo_nome_light.svg"
                    width="250px"
                    height="85px"
                    alt="App Logo"
                    style={{ marginBottom: '20px' }}
                  />
                  <div className={styles.cardContent}>
                    {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <input
              placeholder="Email (Not Setup - Please Use Github)"
              size="large"
              disabled
            />
            <button type="button" className={styles.primaryBtn}>
              Submit
            </button> */}
                    <Typography variant="h5" color="primary">
                      Escolha uma das opções abaixo para login
                    </Typography>
                    {/* eslint-disable-next-line prettier/prettier */}
                    {providers && Object.values(providers).map((provider) => (
                        // eslint-disable-next-line react/jsx-indent
                        <div key={provider.name} style={{ marginBottom: 0 }}>
                          <Button
                            type="button"
                            variant="outlined"
                            // color="primary"
                            sx={{
                              width: { xs: '100%', md: '90%', lg: '75%' },
                              marginBottom: '0.4em',
                              textDecoration: 'none',
                              '&:hover': {
                                background: theme.palette.primary.main,
                              },
                            }}
                            onClick={() => signIn(provider.id)}
                          >
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            Acessar com {provider.name}
                          </Button>
                        </div>
                      ))}
                    {/* <Button variant="outlined">Acessar com outro</Button> */}
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <img
              src="/images/login_pattern.svg"
              alt="Pattern Background"
              className={styles.styledPattern}
            />
          </div>
        </WebsiteGlobalProvider>
      </ThemeProvider>
    </WrapperProvider>
  );
};

export default PageSignIn;

// export default websitePageHOC(PageSignIn, {
//   seoProps: {
//     headTitle: 'LogIn',
//   },
//   hasDrawer: false,
//   hasAppBar: false,
//   hasFooter: true,
// });
