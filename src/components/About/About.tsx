import { Box, Heading } from "@chakra-ui/react";

import { ContactMe } from "./ContactMe";
import { TipMe } from "./TipMe";

export const About = () => {
  return (
    <Box role="main">
      <Heading as="h1" paddingBottom={5}>
        About
      </Heading>

      <ContactMe />

      <TipMe />
    </Box>
  );
};
