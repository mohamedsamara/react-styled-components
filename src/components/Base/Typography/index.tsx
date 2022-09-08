import { ReactNode } from 'react';

import theme from 'styles/theme';
import DynamicComponent, {
  DynamicComponentProps,
} from 'components/Base/DynamicComponent';

interface TypographyProps extends DynamicComponentProps {
  variant?: string;
  children: ReactNode;
}

type TypographyVariant = {
  h1: DynamicComponentProps;
  h2: DynamicComponentProps;
  h3: DynamicComponentProps;
  h4: DynamicComponentProps;
  h5: DynamicComponentProps;
  p: DynamicComponentProps;
};

const typography: TypographyVariant = {
  h1: {
    tag: 'h1',
    fontSize: [40, 49, 52],
    fontWeight: theme.fontWeights.bold,
    lineHeight: ['50px', '52px', '56px'],
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
  },
  h2: {
    tag: 'h2',
    fontSize: [36, 42, 45],
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.heading,
    lineHeight: ['46px', '48px', '50px'],
    color: theme.colors.heading,
  },
  h3: {
    tag: 'h3',
    fontWeight: theme.fontWeights.medium,
    fontSize: [31, 35, 38],
    fontFamily: theme.fonts.heading,
    lineHeight: ['42px', '44px', '46px'],
    color: theme.colors.heading,
  },
  h4: {
    tag: 'h4',
    fontSize: [24, 28, 31],
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.heading,
    lineHeight: ['38px', '40px', '42px'],
    color: theme.colors.heading,
  },
  h5: {
    tag: 'h5',
    fontWeight: theme.fontWeights.light,
    fontSize: [20, 22, 24],
    fontFamily: theme.fonts.heading,
    lineHeight: ['34px', '36px', '38px'],
    color: theme.colors.heading,
  },
  p: {
    tag: 'p',
    fontSize: ['14px', '15px', '16px'],
    fontFamily: theme.fonts.body,
    lineHeight: ['20px', '22px', '24px'],
    color: theme.colors.body,
  },
};

const Typography = (props: TypographyProps) => {
  const { variant, children } = props;

  const t = variant as keyof TypographyVariant;
  const type = typography[t];

  return (
    <DynamicComponent {...type} {...props}>
      {children}
    </DynamicComponent>
  );
};

Typography.defaultProps = {
  variant: 'h1',
};

export default Typography;
