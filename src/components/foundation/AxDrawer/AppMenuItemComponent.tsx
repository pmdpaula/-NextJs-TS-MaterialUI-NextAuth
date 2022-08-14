/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link as MuiLink } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/system';
// import Link from '../Link';
import NextLink from 'next/link';
// import styled from 'styled-components';

const StyledLink = styled(MuiLink)`
  color: inherit;
  text-decoration: none;
  opacity: 1;
  &:hover,
  &:focus {
    text-decoration: none;
    opacity: 0.5;
  }
`;

export interface AppMenuItemComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled: boolean;
}

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = (props) => {
  const { className, onClick, link, disabled, children } = props;

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        className={className}
        // eslint-disable-next-line react/no-children-prop
        children={children}
        onClick={onClick}
        disabled={disabled}
      />
    );
  }

  // Return a LitItem with a link component
  return (
    <NextLink href={link} passHref>
      <StyledLink {...props}>
        <ListItem
          button
          className={className}
          // eslint-disable-next-line react/no-children-prop
          children={children}
          disabled={disabled}
        />
      </StyledLink>
    </NextLink>
  );
};

export default AppMenuItemComponent;
