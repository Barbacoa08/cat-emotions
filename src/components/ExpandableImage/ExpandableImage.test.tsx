import { render, screen } from "@testing-library/react";

import { ExpandableImage } from ".";
import cuddly from "images/cuddly.jpg";

describe("ExpandableImage Component", () => {
  it("fully renders without exploding", () => {
    render(<ExpandableImage src={cuddly} alt="example alt" />);

    const rootElement = screen.getByTestId("ExpandableImage-root");
    expect(rootElement).toBeInTheDocument();
  });
});
