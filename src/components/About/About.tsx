import { Box, Heading, Text } from "@chakra-ui/react";

import { InternalLink } from "components/InternalLink";
import { routes } from "navigation";

import { ContactMe } from "./ContactMe";
import { TipMe } from "./TipMe";

export const About = () => {
  return (
    <Box role="main">
      <Heading as="h1" paddingBottom={1}>
        About
      </Heading>

      <Text paddingBottom={5}>
        For more information on what this project is and how/why I built it,
        check out the{" "}
        <InternalLink to={routes.faqsSections.what.link}>
          What is Cat Emotions
        </InternalLink>{" "}
        FAQs.
      </Text>

      <ContactMe />

      <TipMe />
    </Box>
  );
};
