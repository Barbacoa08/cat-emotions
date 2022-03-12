import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { InternalLink } from ".";

describe("InternalLink Component", () => {
  it("fully renders without exploding", () => {
    render(
      <BrowserRouter>
        <InternalLink to="/">Home</InternalLink>
      </BrowserRouter>
    );

    const rootElement = screen.getByRole("link");
    expect(rootElement).toBeTruthy();
  });
});
