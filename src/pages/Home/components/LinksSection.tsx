import styled from 'styled-components';

import { Box, Typography, Link, NavLink } from 'components/Base';
import theme from 'styles/theme';
import Section from './Section';

const StyledLink = styled(Link)`
  &:hover {
    color: ${theme.colors.black};
  }
`;

const LinksSection = () => {
  return (
    <Box>
      {/* Link section */}
      <Typography variant="h3" mb="20px" color={theme.colors.primary}>
        Link
      </Typography>
      <Section>
        <Box mb="10px">
          <Link to="/">Link</Link>
        </Box>
        <Box mb="10px">
          <Link to="/" fontSize={['18px']}>
            Link (large font size)
          </Link>
        </Box>
        <Box mb="10px">
          <Link to="/" color={theme.colors.blue}>
            Link (color variant)
          </Link>
        </Box>
        <Box mb="10px">
          <StyledLink to="/" fontSize={['18px']}>
            Link (custom styled link)
          </StyledLink>
        </Box>
      </Section>

      {/* NavLink section */}
      <Typography variant="h3" mb="20px" color={theme.colors.primary}>
        NavLink
      </Typography>
      <Section>
        <NavLink to="/">NavLink</NavLink>
      </Section>
    </Box>
  );
};

export default LinksSection;
