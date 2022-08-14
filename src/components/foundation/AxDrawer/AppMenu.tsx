import List from '@mui/material/List';

// import { createStyles } from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
import { menutItems } from '../../../data/listItems';
import AppMenuItem from './AppMenuItem';

// These menu was inspired by https://medium.com/@modularcoder/reactjs-multi-level-sidebar-navigation-menu-with-typescrip-materialui-251943c12dda

const AppMenu: React.FC = () => {
  // const classes = useStyles();
  const dense = false;

  return (
    <List
      component="nav"
      // className={classes.appMenu}
      dense={dense}
      disablePadding
      sx={{ width: '100%', marginTop: '4rem' }}
    >
      {menutItems.map((item) => (
        // const id = `key_${index}`;

        <AppMenuItem {...item} key={item.ident} dense={dense} />
      ))}
    </List>
  );
};

export default AppMenu;
