import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import globalDefinitions from '../../../config/globalDefinitions';
import { useIsMidOrHigerSizeScreen } from '../../../hooks/usefullHooks';

export type SignInDataProps = {
  email: string;
  password: string;
};

type TransitionProps = Omit<SlideProps, 'direction'>;

// const loginSchema = yup.object().shape({
//   usuario: yup
//     .string()
//     .required('"Usuario" é obrigatório')
//     .min(3, 'Preencha ao menos 3 caracteres'),
//   senha: yup
//     .string()
//     .required('"Senha" é obrigatória')
//     .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
// });
const LoginButton = styled(Button)`
  width: 15.2rem;
  height: 3rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
`;

// interface FormSignInProps {
//   buttonChange: HTMLElement | null;
// }
const TransitionDown = (props: TransitionProps) => (
  <Slide {...props} direction="down" />
);

const FormSignIn = (): JSX.Element => {
  const { register, handleSubmit, control } = useForm<SignInDataProps>();

  // const [userSession, setUserSession] = useState({});
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const initialValues: SignInDataProps = {
    email: '',
    password: '',
  };

  // const router = useRouter();
  const { alertTimes } = globalDefinitions;

  // eslint-disable-next-line no-unused-vars
  async function handleSignIn({ email, password }: SignInDataProps) {
    // await signIn({ email, password });
  }

  const handleCloseAlert = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ): any => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const isSmallScreen = useIsMidOrHigerSizeScreen() ? undefined : 'small';

  return (
    <>
      <form
        id="signInForm"
        className="signInForm"
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Typography
          variant="h3"
          color="textSecondary"
          style={{ marginBottom: '1rem' }}
        >
          Sign in
        </Typography>
        <Controller
          render={({ field }) => (
            <TextField
              label="E-mail"
              {...register('email', { required: true, minLength: 2 })}
              defaultValue={initialValues.email}
              variant="outlined"
              size={isSmallScreen}
              autoComplete="email"
              // name="email"
              style={{ marginBottom: '1rem' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
              {...field}
            />
          )}
          name="email"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              defaultValue={initialValues.password}
              variant="outlined"
              label="Senha"
              size={isSmallScreen}
              autoComplete="current-password"
              style={{ marginBottom: '1rem' }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
              {...field}
            />
          )}
          name="password"
          control={control}
        />
        <LoginButton
          variant="contained"
          color="primary"
          type="submit"
          value="Login"
        >
          Login
        </LoginButton>
      </form>

      <Snackbar
        id="loginError"
        open={openAlert}
        autoHideDuration={alertTimes.long}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleCloseAlert}
        TransitionComponent={TransitionDown}
      >
        <Alert severity="error" variant="filled" onClose={handleCloseAlert}>
          <AlertTitle>Erro de login</AlertTitle>
          Usuário ou senha inválidos
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormSignIn;
