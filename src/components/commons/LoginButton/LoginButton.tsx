import Button from '@mui/material/Button';
// import {Button} from '@mui/material';
import { ReactNode } from 'react';

// const SingInUpButton = styled(Button)({
//   width: '15.2rem',
//   height: '3rem',
//   borderRadius: '1.5rem',
//   textTransform: 'uppercase',
//   fontWeight: '600',
//   margin: '10px 0',
// });

type SingInUpButtonProps = {
  children: ReactNode;
};

// type ToggleSinginButtonProps = typeof Button;
type ToggleSinginButtonProps = {
  children: ReactNode;
};

export const SingInUpButton = ({
  children,
  // eslint-disable-next-line no-unused-vars
  ...props
}: SingInUpButtonProps & React.ComponentPropsWithoutRef<typeof Button>) => (
  <Button
    variant="contained"
    color="primary"
    type="submit"
    sx={{
      // width: '15.2rem',
      width: { xs: '70%', md: '35%' },
      height: '3rem',
      borderRadius: '1.3rem',
      textTransform: 'uppercase',
      fontWeight: '700',
      my: 16,
    }}
  >
    {children}
  </Button>
);

export const ToggleSinginButton = ({
  children,
  // eslint-disable-next-line no-unused-vars
  ...props
}: ToggleSinginButtonProps & React.ComponentPropsWithoutRef<typeof Button>) => (
  <Button
    variant="outlined"
    sx={{
      border: 'solid 3px white',
      color: 'white',
      borderRadius: 20,
      padding: '6px 30px',
    }}
    onClick={props.onClick}
  >
    {children}
  </Button>
);

// export default SingInUpButton;
