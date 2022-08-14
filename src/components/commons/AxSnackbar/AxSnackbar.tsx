// import { Color } from '@material-ui/lab';
import { AlertColor } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface AxSnackbarProps {
  id: string;
  // open: boolean;
  // isLoginError: boolean;
  // setIsLoginError: any;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
  severity: AlertColor;
  title: string;
  text?: string;
  setOpenAlert?: any;
  openAlert?: boolean;
}

interface SnackChildProps {
  severity: AlertColor;
  handleCloseAlert: any;
  title: string;
  text?: string;
}

const SnackChild = ({
  severity,
  handleCloseAlert,
  title,
  text,
}: SnackChildProps): JSX.Element => (
  <Alert severity={severity} onClose={handleCloseAlert}>
    <AlertTitle>{title}</AlertTitle>
    {text}
  </Alert>
);

const AxSnackbar = ({
  id,
  severity,
  title,
  text,
  setOpenAlert,
  openAlert,
  ...props
}: AxSnackbarProps): JSX.Element => {
  // const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpenAlert(false);
  // };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Snackbar
      id={id}
      open={openAlert}
      autoHideDuration={props.autoHideDuration}
      // anchorOrigin={props.anchorOrigin}
      // eslint-disable-next-line react/jsx-no-bind
      onClose={handleCloseAlert}
      {...props}
    >
      <SnackChild
        severity={severity}
        // eslint-disable-next-line react/jsx-no-bind
        handleCloseAlert={handleCloseAlert}
        title={title}
        text={text}
      />
    </Snackbar>
  );
};

export default AxSnackbar;
