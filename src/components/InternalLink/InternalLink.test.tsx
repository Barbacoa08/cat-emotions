import { render, screen } from "@testing-library/react";

import { InternalLink } from ".";

describe("InternalLink Component", () => {
  it("fully renders without exploding", () => {
    render(<InternalLink to="/fake">fake</InternalLink>);

    const heading = screen.getByText("fake");
    expect(heading).toBeInTheDocument();
  });
});
