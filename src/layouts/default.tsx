import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <main>{children}</main>;
};

export default Layout;
