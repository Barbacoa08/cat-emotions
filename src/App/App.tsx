import { useEffect, useGlobal } from "reactn";

import { TopNav } from "components";
import { RouteContainer } from "navigation";
import { hashValue } from "utils";

import "./App.css";

const localStorageKey = "cat-emotions";

export const App = () => {
  const [globals, setGlobals] = useGlobal();

  // on init, pull localStorage once-and-only-once
  useEffect(() => {
    const storedValue = window.localStorage.getItem(localStorageKey);

    if (storedValue) {
      setGlobals(JSON.parse(storedValue));
    }
  }, [setGlobals]);

  // update localStorage on every reactn update
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(globals));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hashValue({ ...globals })]); // gotta spread because the attributes are getters

  return (
    <div className="app">
      <TopNav />

      <RouteContainer />
    </div>
  );
};
