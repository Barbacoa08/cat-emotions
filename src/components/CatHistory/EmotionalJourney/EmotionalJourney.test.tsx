import { render, screen } from "@testing-library/react";

import { EmotionalJourney } from ".";

describe("EmotionalJourney Component", () => {
  it("fully renders without exploding", () => {
    render(<EmotionalJourney />);

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });
});
