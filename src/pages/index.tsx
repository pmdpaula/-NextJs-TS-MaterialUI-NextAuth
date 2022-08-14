import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useTheme as useThemeNT } from 'next-themes';

import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

const Home: NextPage = () => {
  const { resolvedTheme } = useThemeNT(); // useTheme from next-themes

  // eslint-disable-next-line prettier/prettier
  const logo = resolvedTheme === 'dark'
      ? '/AxBladeSoftware_logo_nome_light.svg'
      : '/AxBladeSoftware_logo_nome_dark.svg';

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          {/* <Image src={axbLogo} /> */}
          <Image src={logo} width={400} height={200} />
        </Box>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          AxeBlade - Template base
        </Typography>
        <Typography align="center" component="p" variant="h6" gutterBottom>
          Modelo base de uma WebApplication com Nextjs 12, Material UI v5 e
          autenticação com Auth0
        </Typography>
      </Box>
    </Container>
  );
};

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    hasDrawer: true,
    hasAppBar: true,
    hasFooter: true,
  },
});
