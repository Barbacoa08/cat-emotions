import netlifyIdentity from "netlify-identity-widget";
import { useEffect, useGlobal } from "reactn";

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
  }, [setAuthenticated, setUser]);

  return (
    <div className="app">
      <TopNav />

      <RouteContainer />
    </div>
  );
};
