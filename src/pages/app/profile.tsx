import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useContext, useState } from 'react';

import NotLoggedSnackbar from '../../components/commons/NotLoggedSnackbar/NotLoggedSnackbar';
import PageSquare from '../../components/commons/PageSquare/PageSquare';
import { WebsitePageContext } from '../../components/wrappers/WebsitePage/context';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Perfil';

const PageProfile = () => {
  // const [session, loadingSession] = useSession();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const websitePageContext = useContext(WebsitePageContext);

  const handleClose = () => {
    setOpenBackdrop(false);
  };
  // const handleToggle = () => {
  //   setOpenBackdrop(!openBackdrop);
  // };

  if (websitePageContext?.sessionStatus === 'loading') {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      <PageSquare>
        <Typography>{pageName}</Typography>
        {
          // eslint-disable-next-line operator-linebreak
          websitePageContext?.sessionStatus === 'authenticated' &&
            websitePageContext?.sessionData && (
              <>
                <Divider variant="middle" style={{ margin: '5px 0' }} />
                <Typography variant="h4">Dados do usuário</Typography>
                <Box display="flex" flexDirection="column" alignItems="start">
                  <Typography>
                    {`Nome:  ${websitePageContext.sessionData.user.name}`}
                  </Typography>
                  <Typography>
                    {`E-mail:  ${websitePageContext.sessionData.user.email}`}
                  </Typography>
                  <Image
                    src={websitePageContext.sessionData.user.image}
                    alt="Picture of the user"
                    width={200}
                    height={200}
                  />
                </Box>
              </>
            )
        }
      </PageSquare>
      <NotLoggedSnackbar />
    </>
  );
};

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
