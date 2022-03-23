import { render, screen } from "@testing-library/react";

import { TipMe } from ".";

describe("TipMe Component", () => {
  it("fully renders without exploding", () => {
    render(<TipMe />);

    const imgByAltText = screen.getByText("Tip Me");
    expect(imgByAltText).toBeInTheDocument();
  });
});
