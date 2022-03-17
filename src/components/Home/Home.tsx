import { Box, Heading, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box role="main">
      <Heading as="h1">Cat Emotions</Heading>

      <Text>
        Welcome! This is a tracker for your emotional journey via cat pics.
        After tracking at least one emotion via (link)Cat Emotions(/link), you
        can visit your (link)Cat History(/link) to see your journey.
      </Text>
    </Box>
  );
};
