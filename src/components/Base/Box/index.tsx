import { MouseEvent } from 'react';
import styled from 'styled-components';
import {
  position,
  layout,
  grid,
  space,
  border,
  background,
  textAlign,
  PositionProps,
  LayoutProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
  GridProps,
  TextAlignProps,
} from 'styled-system';

import { CustomProps, customProps } from 'styles/theme';

export interface BoxProps
  extends PositionProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    BackgroundProps,
    GridProps,
    TextAlignProps,
    Partial<CustomProps> {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onMouseOver?: (e: MouseEvent<HTMLElement>) => void;
  onMouseOut?: (e: MouseEvent<HTMLElement>) => void;
}

const Wrapper = styled.div<BoxProps>`
  ${position};
  ${layout};
  ${grid}
  ${space}
  ${border}
  ${background}
  ${textAlign}
  ${customProps}
`;

const Box: React.FC<BoxProps> = (props: BoxProps) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Box.defaultProps = {};

export default Box;
