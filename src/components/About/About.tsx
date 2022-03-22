import { Box, Heading } from "@chakra-ui/react";

import { ContactMe } from "./ContactMe";

export const About = () => {
  return (
    <Box role="main">
      <Heading as="h1">About</Heading>

      <ContactMe />
    </Box>
  );
};
