import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { App } from "./";

describe("InternalLink Component", () => {
  it("fully renders without exploding", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const rootElement = screen.getAllByRole("heading");
    expect(rootElement).toHaveLength(2);
  });
});
