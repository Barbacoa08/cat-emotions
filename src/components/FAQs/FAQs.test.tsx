import { render, screen } from "@testing-library/react";

import { FAQs } from ".";

describe("FAQs Component", () => {
  it("fully renders without exploding", () => {
    render(<FAQs />);

    const heading = screen.getByText("Frequently Asked Questions");
    expect(heading).toBeInTheDocument();
  });
});
