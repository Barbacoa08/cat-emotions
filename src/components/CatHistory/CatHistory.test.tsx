import { render, screen } from "@testing-library/react";

import { CatHistory } from ".";

describe("CatHistory Component", () => {
  it("fully renders without exploding", () => {
    render(<CatHistory />);

    const imgByAltText = screen.getByText("Cat History");
    expect(imgByAltText).toBeInTheDocument();
  });
});
