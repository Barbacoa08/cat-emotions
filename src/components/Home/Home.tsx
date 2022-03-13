import { Box, Heading, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box data-testid="Home-root">
      <Heading>Cat Emotions</Heading>

      <Text>A tracker for your emotional journey via cat pics</Text>
    </Box>
  );
};
