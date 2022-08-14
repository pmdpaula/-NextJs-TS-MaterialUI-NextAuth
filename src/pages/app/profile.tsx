import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import NotLoggedSnackbar from '../../components/commons/NotLoggedSnackbar/NotLoggedSnackbar';
// eslint-disable-next-line camelcase
// import { unstable_getServerSession } from 'next-auth/next';
// import { signIn, signOut, useSession } from 'next-auth/react';
import PageSquare from '../../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Perfil';

const PageProfile = () => (
  <>
    <PageSquare>
      <Typography>{pageName}</Typography>
      <Divider variant="middle" style={{ margin: '5px 0' }} />
      <>
        <Typography variant="h4">Dados do usuário</Typography>
        <Box display="flex" flexDirection="column" alignItems="start">
          <Typography>Nome</Typography>
          <Typography>E-mail</Typography>
        </Box>
      </>
    </PageSquare>
    <NotLoggedSnackbar />
  </>
);

export default websitePageHOC(PageProfile, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
    footerProps: {
      content: 'Copyright AxeBlade Software',
    },
  },
});
