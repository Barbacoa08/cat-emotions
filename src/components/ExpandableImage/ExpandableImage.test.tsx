import { render, screen } from "@testing-library/react";

import { ExpandableImage } from ".";
import cuddly from "images/cuddly.jpg";

describe("ExpandableImage Component", () => {
  it("fully renders without exploding", () => {
    const altText = "example alt text";
    render(<ExpandableImage src={cuddly} alt={altText} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(1);

    const imgByAltText = screen.getByAltText(altText);
    expect(imgByAltText).toBeInTheDocument();
  });
});
