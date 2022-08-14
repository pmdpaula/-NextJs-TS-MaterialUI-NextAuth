import Box from '@mui/material/Box';
import { ReactNode } from 'react';
// import styled from 'styled-components';

// const PageSquareWrapper = styled(Box)`
//   background: ;
// `;
type PageSquareProps = {
  children: ReactNode;
};

// type PageSquareProps = PageSquareOwnProps & React.ComponentType<BoxProps>;

const PageSquare = ({ children }: PageSquareProps): JSX.Element => (
  <Box m={1} mt={2} sx={{ p: 2, border: '1px dashed grey' }}>
    {children}
  </Box>
);

export default PageSquare;
