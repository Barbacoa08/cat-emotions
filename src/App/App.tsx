import netlifyIdentity from "netlify-identity-widget";
import { useEffect, useGlobal } from "reactn";

import { TopNav } from "components";
import { RouteContainer } from "navigation";

import "./App.css";

export const App = () => {
  const [, setAuthenticated] = useGlobal("authenticated");
  const [, setUser] = useGlobal("user");

  useEffect(() => {
    netlifyIdentity.on("init", (user) => console.log("init", user));
    netlifyIdentity.on("login", (user) => console.log("login", user));

    netlifyIdentity.on("login", (user) => {
      console.log("login", user);
      setAuthenticated(true);
      setUser(user);
    });
    netlifyIdentity.on("logout", () => {
      console.log("User logged out, `App.tsx`"); // should work
      setAuthenticated(false);
      setUser(undefined);
    });

    const user = netlifyIdentity.currentUser();

    if (user) {
      setAuthenticated(true);
      setUser(user);
    }

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
      netlifyIdentity.off("init");
    };
  }, [setAuthenticated, setUser]);

  return (
    <div className="app">
      <TopNav />

      <RouteContainer />
    </div>
  );
};
