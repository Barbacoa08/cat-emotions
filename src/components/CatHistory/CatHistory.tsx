import { Box, Heading, Text } from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";

export const CatHistory = () => {
  const user = netlifyIdentity.currentUser();

  return (
    <Box>
      <Heading>Cat History</Heading>

      {user ? (
        <Text>coming soon! (I hope)</Text>
      ) : (
        <Text>
          Ope, you need to sign in and create at least one Cat Emotion before
          you can view your history.
        </Text>
      )}
    </Box>
  );
};
