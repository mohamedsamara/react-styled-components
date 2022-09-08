import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import {
  position,
  layout,
  space,
  textAlign,
  border,
  color,
  fontSize,
  fontWeight,
  flexbox,
  PositionProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  TextAlignProps,
  FontSizeProps,
  FontWeightProps,
  FlexboxProps,
  AlignItemsProps,
  JustifyContentProps,
} from 'styled-system';
import {
  NavLink as NavLinkRouter,
  NavLinkProps as NavLinkRouterProps,
} from 'react-router-dom';

import theme from 'styles/theme';

export interface NavLinkProps
  extends NavLinkRouterProps,
    PositionProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    TextAlignProps,
    FontSizeProps,
    FontWeightProps,
    FlexboxProps,
    AlignItemsProps,
    JustifyContentProps {
  children: ReactNode;
  className?: string;
  draggable?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onMouseDown?: (e: MouseEvent<HTMLElement>) => void;
}

const Wrapper = styled(NavLinkRouter)`
  color: ${theme.colors.boulder};
  text-decoration: none;

  &.active {
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.body};
  }

  ${position}
  ${space}
  ${textAlign}  
  ${border}  
  ${layout}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${flexbox}
`;

const NavLink: React.FC<NavLinkProps> = (props: NavLinkProps) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

NavLink.defaultProps = {
  className: '',
};

export default NavLink;
