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
import { useEffect, useState } from 'react';

export interface State extends SnackbarOrigin {
  open: boolean;
}

const SlideTransitionUp = (props: SlideProps) => (
  <Slide {...props} direction="up" />
);

const NotLoggedSnackbar = () => {
  const [stateloginSnackbar, setStateloginSnackbar] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
    vertical: 'top' | 'bottom';
    horizontal: 'center' | 'left' | 'right';
  }>({
    open: false,
    Transition: Fade,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 5, 100);
      });
    }, 250);

    setTimeout(() => {
      router.push('/');
    }, 4500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Snackbar
      // anchorOrigin={{ vertical, horizontal }}
      open={stateloginSnackbar.open}
      // eslint-disable-next-line prettier/prettier
      onClose={() => setStateloginSnackbar({ ...stateloginSnackbar, open: false })}
      message="Você não está logado!"
      TransitionComponent={SlideTransitionUp}
      anchorOrigin={{
        vertical: stateloginSnackbar.vertical,
        horizontal: stateloginSnackbar.horizontal,
      }}
      key={stateloginSnackbar.vertical + stateloginSnackbar.horizontal}
    >
      <Alert
        severity="error"
        variant="filled"
        elevation={6}
        // eslint-disable-next-line prettier/prettier
      // onClose={() => setStateloginSnackbar({ ...stateloginSnackbar, open: false })}
        // eslint-disable-next-line prettier/prettier
        action={(
          <>
            <Button color="success" variant="outlined" size="small" href="/">
              CONECTAR
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              // eslint-disable-next-line prettier/prettier
              onClick={() => setStateloginSnackbar({ ...stateloginSnackbar, open: false })}
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
