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
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
} from 'styled-system';
import {
  Link as LinkRouter,
  LinkProps as LinkRouterProps,
} from 'react-router-dom';

import theme from 'styles/theme';

export interface LinkProps
  extends LinkRouterProps,
    PositionProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    TextAlignProps,
    FontSizeProps,
    FontWeightProps,
    FlexboxProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {
  children: ReactNode;
  className?: string;
  draggable?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onMouseDown?: (e: MouseEvent<HTMLElement>) => void;
}

const Wrapper = styled(LinkRouter)`
  color: ${theme.colors.boulder};
  text-decoration: none;

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

const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Link.defaultProps = {
  className: '',
};

export default Link;
