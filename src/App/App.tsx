import { InternalLink } from "components";
import { RouteContainer, routes } from "navigation";

import "./App.css";

export const App = () => {
  return (
    <main className="app">
      <header>
        <InternalLink to={routes.home}>Home</InternalLink>

        <InternalLink to={routes.emotionSelect}>Emotion Select</InternalLink>
        <InternalLink to={routes.signIn}>Sign In</InternalLink>
      </header>

      <section>
        <h1>Cat Emotions</h1>
        <p>A tracker for your emotional journey via cat pics</p>
      </section>

      <RouteContainer />
    </main>
  );
};
