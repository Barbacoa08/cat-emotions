import { Route, Routes } from "react-router-dom";

import { EmotionSelect, Home, SignIn } from "components";

export const routes = {
  home: "/home",

  emotionSelect: "/emotion-select",
  signIn: "/sign-in",
};

export const RouteContainer = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />

      <Route path={routes.emotionSelect} element={<EmotionSelect />} />
      <Route path={routes.signIn} element={<SignIn />} />

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
