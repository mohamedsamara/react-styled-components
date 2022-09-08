import { Flex, Link } from 'components/Base';
import NavLink from 'components/Base/NavLink';

const Sidebar = () => {
  return (
    <Flex>
      <Link to="/test" fontSize={['16px']}>
        Test
      </Link>
      <NavLink to="/" fontSize={['16px']}>
        Test
      </NavLink>
    </Flex>
  );
};

export default Sidebar;
