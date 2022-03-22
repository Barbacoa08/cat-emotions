import { Route, Routes } from "react-router-dom";

import { About, CatJourney, EmotionSelect, Home } from "components";

export const routes = {
  home: "/home",

  select: "/emotion-select",
  journey: "/journey",
  about: "/about",
};

export const RouteContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.home} element={<Home />} />

      <Route path={routes.select} element={<EmotionSelect />} />
      <Route path={routes.journey} element={<CatJourney />} />
      <Route path={routes.about} element={<About />} />

      <Route
        path="*"
        element={
          <main>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
