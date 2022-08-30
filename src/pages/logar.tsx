import SignInScreen from '../components/screens/SingIn/SingIn';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

const pageName = 'Logar';

export default websitePageHOC(SignInScreen, {
  seoProps: {
    headTitle: pageName,
  },
  hasDrawer: true,
  hasAppBar: true,
});
