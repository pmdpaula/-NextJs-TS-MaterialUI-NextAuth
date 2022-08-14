import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const AxFooterWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const AxFooterBox = styled(Paper)`
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 14px;
  padding: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// interface AxFooterProps {
//   content: ReactNode;
// }

const AxFooter = (): JSX.Element => (
  <AxFooterWrapper>
    <AxFooterBox elevation={3}>
      <Typography variant="caption" color="secondary.contrastText">
        Copyright AxeBlade Software
      </Typography>
    </AxFooterBox>
  </AxFooterWrapper>
);

export default AxFooter;
