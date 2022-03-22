import { render, screen } from "@testing-library/react";

import { CatJourney } from ".";

describe("CatJourney Component", () => {
  it("fully renders without exploding", () => {
    render(<CatJourney />);

    const imgByAltText = screen.getByText("Cat Journey");
    expect(imgByAltText).toBeInTheDocument();
  });
});
