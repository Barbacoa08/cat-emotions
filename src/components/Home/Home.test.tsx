import { render, screen } from "@testing-library/react";

import { Home } from ".";

describe("Home Component", () => {
  it("fully renders without exploding", () => {
    render(<Home />);

    const rootElement = screen.getByText("Cat Emotions");
    expect(rootElement).toBeInTheDocument();
  });
});
