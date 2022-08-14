import Typography from '@mui/material/Typography';

import PageSquare from '../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Tabelas';

const PageTables = () => (
  <PageSquare>
    <Typography>{pageName}</Typography>
  </PageSquare>
);

export default websitePageHOC(PageTables, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
    hasDrawer: true,
    hasAppBar: true,
  },
});
