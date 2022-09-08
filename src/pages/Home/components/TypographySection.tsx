import { Box, Typography } from 'components/Base';
import theme from 'styles/theme';
import Section from './Section';

const TypographySection = () => {
  return (
    <Box>
      <Typography variant="h3" mb="20px" color={theme.colors.primary}>
        Typography
      </Typography>
      <Section>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
        <Typography variant="h5">H5</Typography>
        <Typography variant="h6">H6</Typography>
      </Section>
    </Box>
  );
};

export default TypographySection;
