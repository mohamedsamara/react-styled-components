import { ReactNode } from 'react';

import { Box } from 'components/Base';
import theme from 'styles/theme';

interface SectionProps {
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  const { children } = props;
  return (
    <Box
      background={theme.colors.concrete}
      p="20px"
      borderRadius={theme.radii[2]}
      mb="20px"
    >
      {children}
    </Box>
  );
};

export default Section;
