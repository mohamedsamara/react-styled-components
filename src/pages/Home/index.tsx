import { Container, Box, Typography } from 'components/Base';
import { TypographySection } from './components';

const Home = () => {
  return (
    <Box height="100%" py="60px">
      <Container>
        <Typography mb="40px">Components</Typography>
        <TypographySection />
      </Container>
    </Box>
  );
};

export default Home;
