import { MouseEvent } from 'react';
import styled from 'styled-components';
import {
  layout,
  space,
  flexbox,
  border,
  background,
  position,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
} from 'styled-system';

import { CustomProps, customProps } from 'styles/theme';
interface FlexProps
  extends LayoutProps,
    SpaceProps,
    FlexboxProps,
    BorderProps,
    BackgroundProps,
    PositionProps,
    Partial<CustomProps> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onMouseOver?: (e: MouseEvent<HTMLElement>) => void;
  onMouseOut?: (e: MouseEvent<HTMLElement>) => void;
}

const Wrapper = styled.div<FlexProps>`
  display: flex;
  ${layout};
  ${space}
  ${flexbox}
  ${border}
  ${background}
  ${position}
  ${customProps}
`;

const Flex: React.FC<FlexProps> = (props: FlexProps) => {
  const { children } = props;
  return <Wrapper {...props}>{children}</Wrapper>;
};

Flex.defaultProps = {
  className: '',
};

export default Flex;
