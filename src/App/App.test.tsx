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

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });
});
