import { render, screen } from "@testing-library/react";

import { EmotionSelect } from ".";

describe("EmotionSelect Component", () => {
  it("fully renders without exploding", () => {
    render(<EmotionSelect />);

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });
});
