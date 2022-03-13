import { Box, Heading, Text } from "@chakra-ui/react";
import netlifyIdentity, { User } from "netlify-identity-widget";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <Box data-testid="Home-root">
      <Heading>Cat Emotions</Heading>

      <Text>A tracker for your emotional journey via cat pics</Text>

      <AuthButton />
    </Box>
  );
};

// example created from: https://github.com/netlify/netlify-identity-widget/tree/master/example/react
const AuthButton = () => {
  const netlifyAuth = {
    isAuthenticated: false,
    user: null as User | null,
    authenticate(callback: (user?: User) => void) {
      this.isAuthenticated = true;
      netlifyIdentity.open();
      netlifyIdentity.on("login", (user) => {
        this.user = user;
        callback(user);
      });
    },
    signout(callback: (user?: User) => void) {
      this.isAuthenticated = false;
      netlifyIdentity.logout();
      netlifyIdentity.on("logout", () => {
        this.user = null;
        callback();
      });
    },
  };

  const navigate = useNavigate();

  const login = () => {
    netlifyAuth.authenticate((user) => {
      console.log({ user });
      // this.setState({ redirectToReferrer: true });
    });
  };

  return netlifyAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          // netlifyAuth.signout(() => navigate("/", { replace: true }));
          netlifyAuth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <div>
      <p>You are not logged in.</p>
      <div>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        <button onClick={login}>Log in</button>
      </div>
    </div>
  );
};
