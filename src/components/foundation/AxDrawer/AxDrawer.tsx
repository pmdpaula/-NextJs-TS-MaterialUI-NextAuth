import { Theme } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import globalDefinitions from '../../../config/globalDefinitions';
import AppMenu from './AppMenu';

const { drawerWidth } = globalDefinitions;

interface DrawerWrapperStyledProps {
  theme: Theme;
}

const DrawerWrapper = styled(Drawer)(({ theme }: DrawerWrapperStyledProps) => ({
  width: `${drawerWidth}px`,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.backgroundDrawer.main,
    width: `${drawerWidth}px`,
    boxSizing: 'border-box',
  },
}));

// const ToolbarIconWrapper = styled('div')(
//   ({ theme }: any) => theme.mixins.toolbar,
//   sx({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: '0 8px',
//   }),
// );

interface AxDrawerProps {
  open: boolean;
  toggleOpenDrawer: () => void;
  onClose: any;
  variant: DrawerProps['variant'];
}

const AxDrawer = ({
  open,
  toggleOpenDrawer,
  ...props
}: AxDrawerProps): JSX.Element => (
  <DrawerWrapper open={open} anchor="left" {...props}>
    {/* <ToolbarIconWrapper> */}
    {/* <IconButton onClick={toggleOpenDrawer}>
        <ChevronLeftIcon />
      </IconButton> */}
    {/* </ToolbarIconWrapper>
    <Divider /> */}
    <AppMenu />
  </DrawerWrapper>
);
export default AxDrawer;
