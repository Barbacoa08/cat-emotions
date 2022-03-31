import { ChakraProvider } from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { setGlobal, StrictMode } from "reactn";

import { IGlobalState } from "types";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

(window as any).netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

const globalDefaults: IGlobalState = {
  authenticated: false,
  user: undefined,
};
setGlobal<IGlobalState>(globalDefaults);

// @ts-ignore
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);

if (process.env.NODE_ENV !== "production") {
  const React = require("react");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
