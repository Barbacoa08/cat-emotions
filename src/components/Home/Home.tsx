import { Container, Heading, Stack, Text } from "@chakra-ui/react";

import { InternalLink } from "components";
import { routes } from "navigation";

export const Home = () => {
  return (
    <Container role="main">
      <Heading as="h1">Cat Emotions</Heading>

      <Stack margin="auto" paddingTop={5}>
        <Text textAlign="left">
          Welcome! This is a tracker for your emotional journey via cat pics!
          After tracking at least one cat emotion via{" "}
          <InternalLink to={routes.select}>Select Cat</InternalLink>, you can
          visit your{" "}
          <InternalLink to={routes.journey}>Cat Journey</InternalLink> to see
          your history of selections.
        </Text>

        <Text textAlign="left">
          If you have questions or comments, you can contact me via the{" "}
          <InternalLink to={routes.about}>About</InternalLink> page.
        </Text>
      </Stack>
    </Container>
  );
};
