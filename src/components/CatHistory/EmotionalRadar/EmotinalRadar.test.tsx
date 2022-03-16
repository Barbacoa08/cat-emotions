import { render, screen } from "@testing-library/react";

import { EmotionalRadar } from ".";

describe("EmotionalRadar Component", () => {
  it("fully renders without exploding", () => {
    render(<EmotionalRadar data={[]} dimensions={300} />);

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });
});
