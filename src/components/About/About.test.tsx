import { render, screen } from "@testing-library/react";

import { About } from ".";

describe("About Component", () => {
  it("fully renders without exploding", () => {
    render(<About />);

    const imgByAltText = screen.getByText("About");
    expect(imgByAltText).toBeInTheDocument();
  });
});
