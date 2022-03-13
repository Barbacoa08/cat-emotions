import { render, screen } from "@testing-library/react";

import cuddly from "images/cuddly.jpg";

import { CatEmotionImage } from ".";

describe("CatEmotionImage Component", () => {
  it("fully renders without exploding", () => {
    const altText = "example alt text";
    render(<CatEmotionImage src={cuddly} alt={altText} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(1);

    const imgByAltText = screen.getByAltText(altText);
    expect(imgByAltText).toBeInTheDocument();
  });
});
