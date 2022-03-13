import { Box, Text } from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";
export const SignIn = () => {
  const user = netlifyIdentity.currentUser();
  console.log({ user });

  return (
    <Box data-testid="SignIn-root">
      <Text>
        TODO: redirect here if user is not signed-in already. Put in
        google+github+FB signin options
      </Text>

      <Text>
        You are logged in as <b>{user?.email || "NO ONE"}</b>
      </Text>
    </Box>
  );
};
