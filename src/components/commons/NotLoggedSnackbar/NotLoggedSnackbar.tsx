import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { TransitionProps } from '@mui/material/transitions';
import router from 'next/router';
import { signIn } from 'next-auth/react';
import { useContext, useEffect, useState } from 'react';

import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

export interface State extends SnackbarOrigin {
  open: boolean;
}

const SlideTransitionUp = (props: SlideProps) => (
  <Slide {...props} direction="up" />
);

const NotLoggedSnackbar = () => {
  const websitePageContext = useContext(WebsitePageContext);

  const [stateLoginSnackbar, setStateLoginSnackbar] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
    vertical: 'top' | 'bottom';
    horizontal: 'center' | 'left' | 'right';
  }>({
    open: !websitePageContext?.sessionData,
    Transition: Fade,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const [progress, setProgress] = useState(0);

  const goToLogin = () => {
    signIn();
    setStateLoginSnackbar({
      ...stateLoginSnackbar,
      open: false,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 250);

    if (websitePageContext?.sessionStatus === 'unauthenticated') {
      setTimeout(() => {
        router.push('/');
      }, 5000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [websitePageContext?.sessionStatus]);

  return (
    <Snackbar
      // anchorOrigin={{ vertical, horizontal }}
      open={stateLoginSnackbar.open}
      // eslint-disable-next-line prettier/prettier
      onClose={() => setStateLoginSnackbar({ ...stateLoginSnackbar, open: false })}
      message="Você não está logado!"
      TransitionComponent={SlideTransitionUp}
      anchorOrigin={{
        vertical: stateLoginSnackbar.vertical,
        horizontal: stateLoginSnackbar.horizontal,
      }}
      key={stateLoginSnackbar.vertical + stateLoginSnackbar.horizontal}
    >
      <Alert
        severity="error"
        variant="filled"
        elevation={6}
        // eslint-disable-next-line prettier/prettier
      // onClose={() => setStateLoginSnackbar({ ...stateLoginSnackbar, open: false })}
        // eslint-disable-next-line prettier/prettier
        action={(
          <>
            <Button
              color="success"
              variant="outlined"
              size="small"
              onClick={goToLogin}
            >
              CONECTAR
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              // eslint-disable-next-line prettier/prettier
              onClick={() => setStateLoginSnackbar({ ...stateLoginSnackbar, open: false })}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
          // eslint-disable-next-line prettier/prettier
      )}
      >
        {/* <AlertTitle>Error</AlertTitle> */}
        Você não está logado
        <LinearProgress variant="determinate" value={progress} />
      </Alert>
    </Snackbar>
  );
};

export default NotLoggedSnackbar;
