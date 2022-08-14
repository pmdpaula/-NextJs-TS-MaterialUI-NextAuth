import { Paper, styled, Typography } from '@mui/material';

import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

const Page404Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: ${({ theme }) => theme.palette.error.main};
  margin-top: 2rem;
  border-radius: 2rem;
`;

const Page404 = (): JSX.Element => (
  <Page404Wrapper elevation={4}>
    <Typography variant="h1" style={{ fontWeight: 800 }}>
      404
    </Typography>
    <Typography variant="h5" align="center">
      Parece que página procurada não existe!
    </Typography>
  </Page404Wrapper>
);

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
    hasDrawer: true,
    hasAppBar: true,
  },
});
