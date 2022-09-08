import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default DefaultLayout;
