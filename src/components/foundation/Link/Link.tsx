/* eslint-disable react/jsx-props-no-spreading */
import { Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
// import get from 'lodash/get';
import NextLink from 'next/link';
import { ReactNode } from 'react';

const StyledLink = styled(MuiLink)({
  color: 'inherit',
  textDecoration: 'none',
  opacity: '1',
  '&:hover, &:focus': {
    opacity: '0.5',
  },
});

interface LinkProps {
  href: any;
  // eslint-disable-next-line prettier/prettier
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  children: ReactNode;
  onClick?: any;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Link = ({ href, children, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
);

export default Link;
