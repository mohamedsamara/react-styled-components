import { Container, Box, Typography } from 'components/Base';
import { TypographySection, LinksSection } from './components';

const Home = () => {
  return (
    <Box py="60px">
      <Container>
        <Typography mb="40px">Components</Typography>
        <TypographySection />
        <LinksSection />
      </Container>
    </Box>
  );
};

export default Home;
