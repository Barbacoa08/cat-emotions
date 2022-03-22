import { render, screen } from "@testing-library/react";

import { ContactMe } from ".";

describe("ContactMe Component", () => {
  it("fully renders without exploding", () => {
    render(<ContactMe />);

    const imgByAltText = screen.getByText("send it to me");
    expect(imgByAltText).toBeInTheDocument();
  });
});
