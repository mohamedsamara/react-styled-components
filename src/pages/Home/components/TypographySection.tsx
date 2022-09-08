import { Box, Typography } from 'components/Base';
import theme from 'styles/theme';

const TypographySection = () => {
  return (
    <Box>
      <Typography variant="h3" mb="20px" color={theme.colors.primary}>
        Typography Section
      </Typography>
      <Box
        background={theme.colors.concrete}
        p="20px"
        borderRadius={theme.radii[2]}
      >
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
        <Typography variant="h5">H5</Typography>
        <Typography variant="h6">H6</Typography>
      </Box>
    </Box>
  );
};

export default TypographySection;
