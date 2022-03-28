import { render, screen } from "@testing-library/react";

import { ExternalLink } from ".";

describe("ExternalLink Component", () => {
  it("fully renders without exploding", () => {
    render(<ExternalLink to="/fake">fake</ExternalLink>);

    const heading = screen.getByText("fake");
    expect(heading).toBeInTheDocument();
  });
});
