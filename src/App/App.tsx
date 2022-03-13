import { TopNav } from "components";
import { RouteContainer } from "navigation";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <TopNav />

      <RouteContainer />
    </div>
  );
};
