import { Route, Routes } from "react-router-dom";

import { About, CatJourney, EmotionSelect, FAQs, Home } from "components";

export const routes = {
  home: "/home",

  select: "/emotion-select",
  journey: "/journey",
  about: "/about",
  faqs: "/faqs",
};

export const RouteContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.home} element={<Home />} />

      <Route path={routes.select} element={<EmotionSelect />} />
      <Route path={routes.journey} element={<CatJourney />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.faqs} element={<FAQs />} />

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
