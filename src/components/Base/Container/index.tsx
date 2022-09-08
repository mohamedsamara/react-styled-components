import { LayoutProps, SpaceProps, FlexboxProps } from 'styled-system';

import { Box } from 'components/Base';

interface ContainerProps extends LayoutProps, SpaceProps, FlexboxProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { children } = props;
  return (
    <Box
      px={['25px']}
      mx="auto"
      maxWidth={{
        _: '100%',
        sm: '100%',
        md: '991px',
        lg: '1140px',
        xl: '1320px',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

Container.defaultProps = {};

export default Container;
