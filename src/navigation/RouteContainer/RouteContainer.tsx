import { Route, Routes } from "react-router-dom";

import { CatHistory, EmotionSelect, Home } from "components";

export const routes = {
  home: "/home",

  emotionSelect: "/emotion-select",
  history: "/history",
};

export const RouteContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.home} element={<Home />} />

      <Route path={routes.emotionSelect} element={<EmotionSelect />} />
      <Route path={routes.history} element={<CatHistory />} />

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
