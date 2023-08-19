import { ChakraProvider } from "@chakra-ui/react";
import * as Cronitor from "@cronitorio/cronitor-rum";
import netlifyIdentity from "netlify-identity-widget";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { setGlobal, StrictMode } from "reactn";

import { IGlobalState } from "types";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

(window as any).netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

Cronitor.load("f9de2e1cc0b37a02867805b3bbb5d01f");

const globalDefaults: IGlobalState = {
  authenticated: false,
  user: undefined,
};
setGlobal<IGlobalState>(globalDefaults);

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
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
