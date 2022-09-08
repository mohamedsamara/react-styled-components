import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  space,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  background,
  colorStyle,
  textStyle,
  textAlign,
  fontFamily,
  fontWeight,
  letterSpacing,
  borderRadius,
  grid,
  flexbox,
  layout,
  position,
} from 'styled-system';

import { Tag, BaseStyleProps, customProps } from 'styles/theme';

export interface DynamicComponentProps extends BaseStyleProps {
  tag?: Tag;
  children?: ReactNode;
}

const Component = styled.div<DynamicComponentProps>`
  ${space}
  ${fontSize}
  ${fontStyle}
  ${color}
  ${background}
  ${size}
  ${colorStyle}
  ${textAlign}
  ${textStyle}
  ${lineHeight}  
  ${letterSpacing}   
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${grid}
  ${flexbox}
  ${layout}
  ${position}
  ${customProps};
`;

const DynamicComponent = (props: DynamicComponentProps) => {
  const { tag = 'div', children } = props;

  return (
    <Component as={tag} {...props}>
      {children}
    </Component>
  );
};

DynamicComponent.defaultProps = {
  tag: 'div',
};

export default DynamicComponent;
