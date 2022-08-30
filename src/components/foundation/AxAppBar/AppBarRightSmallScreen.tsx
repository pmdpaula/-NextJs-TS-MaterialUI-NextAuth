import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { signIn, signOut } from 'next-auth/react';
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
    if (websitePageContext?.sessionStatus === 'authenticated') {
      signOut();
    } else {
      signIn();
    }
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            // spacing={5}
            sx={{ width: '100%' }}
          >
            <ThemeSwitch toggleTheme={toggleTheme} />
            <Typography>Tema</Typography>
          </Stack>
        </MenuItem>
        {websitePageContext?.sessionStatus === 'authenticated' ? (
          <div>
            <MenuItem onClick={handleClose} sx={{ width: '100%' }}>
              <Link href="/user/profile" sx={{ width: '100%', align: 'left' }}>
                {/* <IconButton color="inherit">
                  <AssignmentIndIcon />
                </IconButton> */}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  // spacing={5}
                  sx={{ width: '100%' }}
                >
                  <Avatar
                    alt={websitePageContext?.sessionData.user.name}
                    src={websitePageContext?.sessionData.user.image}
                    variant="rounded"
                    sx={{ width: 32, height: 32 }}
                  />
                  <Typography>Perfil</Typography>
                </Stack>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClickMenu}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: '100%' }}
              >
                <IconButton
                  size="large"
                  color="error"
                  sx={{ padding: '4px 0 4px 0' }}
                >
                  <LogoutIcon />
                </IconButton>
                <Typography>Sair</Typography>
              </Stack>
            </MenuItem>
          </div>
        ) : (
          <MenuItem onClick={handleClickMenu}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: '100%' }}
            >
              <IconButton
                size="large"
                color="primary"
                sx={{ padding: '4px 0 4px 0' }}
              >
                <AssignmentIndIcon />
              </IconButton>
              <Typography>Login</Typography>
            </Stack>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default AppBarRightSmallScreen;
