import netlifyIdentity, { User } from "netlify-identity-widget";
import { useEffect, useGlobal } from "reactn";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { TopNav } from "components";
import { RouteContainer } from "navigation";

import "./App.css";

export const App = () => {
  const [, setAuthenticated] = useGlobal("authenticated");
  const [, setUser] = useGlobal("user");

  useEffect(() => {
    const user = netlifyIdentity.currentUser();

    if (user) {
      setAuthenticated(true);
      setUser(user);
    }

    // TODO: going to need to find a better way to do this
    if (process.env.NODE_ENV !== "production") {
      setAuthenticated(true);
      setUser({
        email: "barbi",
      } as User);
    }
  }, [setAuthenticated, setUser]);

  return (
    <div className="app">
      <SkipNavLink>Skip to content</SkipNavLink>

      <TopNav />

      <SkipNavContent>
        <RouteContainer />
      </SkipNavContent>
    </div>
  );
};
