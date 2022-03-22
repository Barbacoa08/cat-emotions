import {
  Box,
  Link as ChakraLink,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { routes } from "navigation";

export const Home = () => {
  return (
    <Box role="main">
      <Heading as="h1">Cat Emotions</Heading>

      <Stack width={500} margin="auto" paddingTop={5}>
        <Text textAlign="left">
          Welcome! This is a tracker for your emotional journey via cat pics!
          After tracking at least one cat emotion via{" "}
          <Link to={routes.select}>Select Cat</Link>, you can visit your{" "}
          <Link to={routes.journey}>Cat Journey</Link> to see your history of
          selections.
        </Text>

        <Text textAlign="left">
          If you have questions or comments, you can contact me via the{" "}
          <Link to={routes.about}>About</Link> page.
        </Text>
      </Stack>
    </Box>
  );
};

const Link: FC<{ to: string }> = ({ children, to }) => {
  const linkColor = useColorModeValue("blue", "blue.200");

  return (
    <ChakraLink as={NavLink} to={to} color={linkColor}>
      {children}
    </ChakraLink>
  );
};
