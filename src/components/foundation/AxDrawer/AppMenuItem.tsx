/* eslint-disable @typescript-eslint/no-unused-vars */
import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
// import Color from 'color';
import { useState } from 'react';

import { menutItemsProps } from '../../../data/listItems';
import AppMenuItemComponent from './AppMenuItemComponent';

export type AppMenuItemProps = menutItemsProps & {
  dense: boolean;
};

const AxAppMenuItemComponent = styled(AppMenuItemComponent)``;

const AppMenuItem: React.FC<AppMenuItemProps> = ({ dense, ...props }) => {
  const { name, Icon, link, disabled, items = [] } = props;

  const isExpandable = items && items.length > 0;
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  function handleClick() {
    setOpen(!open);
    setSelectedItem(!selectedItem);
  }

  const MenuItemRoot = (
    <AxAppMenuItemComponent
      link={disabled ? null : link}
      onClick={handleClick}
      disabled={disabled}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon color="tertiary">
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AxAppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" dense={dense} disablePadding>
        {items.map((item, index) => {
          const id = `key${index}`;
          return <AppMenuItem {...item} dense={dense} key={id} />;
        })}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

// AppMenuItem.propTypes = AppMenuItemPropTypes;

export default AppMenuItem;
