import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { getCsrfToken, getProviders, signIn } from 'next-auth/react';

import { ThemeProps } from '../../theme/themeLight';
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

const SingInErrorPage = () => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {/* <Header /> */}
      <Box
        className={styles.wrapper}
        // sx={{ backgroundColor: theme.palette.primary.dark }}
      />
      <Grid container spacing={{ xs: 0, md: 2 }} className={styles.content}>
        <Grid
          item
          xs={12}
          sx={{ marginX: { xs: '1em', sm: '5em', md: '14em', lg: '22em' } }}
        >
          <Paper elevation={16} className={styles.cardWrapper}>
            <Image
              src="/AxBladeSoftware_logo_nome_light.svg"
              width="250px"
              height="85px"
              alt="App Logo"
              // style={{ marginBottom: '20px' }}
            />
            <div className={styles.cardContent}>
              <Typography variant="h4" color="error">
                Acesso negado
              </Typography>
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
                onClick={() => signIn()}
              >
                Login
              </Button>
              {/* <Button variant="outlined">Acessar com outro</Button> */}
            </div>
          </Paper>
        </Grid>
      </Grid>
      <img
        src="/images/login_pattern.svg"
        alt="Pattern Background"
        // layout="fill"
        className={styles.styledPattern}
      />
    </div>
  );
};

export default SingInErrorPage;
