import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

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
