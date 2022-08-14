import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from 'react';

import ThemeSwitch from '../../commons/ThemeSwitch/ThemeSwitch';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context/index';
import Link from '../Link/Link';

interface AppBarRightSmallScreenProps {
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (_event: any) => void;
}

const AppBarRightSmallScreen = ({
  toggleTheme,
}: AppBarRightSmallScreenProps): JSX.Element => {
  const websitePageContext = useContext(WebsitePageContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenuProfile = Boolean(anchorEl);

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickMenu() {
    websitePageContext?.setIsAuth(!websitePageContext.isAtuh);
    setAnchorEl(null);
  }

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenuProfile}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ThemeSwitch toggleTheme={toggleTheme} />
          Tema
        </MenuItem>
        {websitePageContext?.isAtuh ? (
          <div>
            <MenuItem onClick={handleClose}>
              <Link href="/profile">
                <IconButton color="inherit">
                  <AssignmentIndIcon />
                </IconButton>
                Perfil
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClickMenu}>
              {/* <Link href="/logout"> */}
              <IconButton color="error">
                <LogoutIcon />
              </IconButton>
              Sair
              {/* </Link> */}
            </MenuItem>
          </div>
        ) : (
          <MenuItem onClick={handleClickMenu}>
            {/* <Link href="/login"> */}
            <IconButton color="inherit">
              <AssignmentIndIcon />
            </IconButton>
            Login
            {/* </Link> */}
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default AppBarRightSmallScreen;
