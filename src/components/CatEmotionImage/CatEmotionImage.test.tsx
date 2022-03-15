import { render, screen } from "@testing-library/react";

import cuddly from "images/cuddly.jpg";

import { CatEmotionImage } from ".";

describe("CatEmotionImage Component", () => {
  it("fully renders without exploding", () => {
    const altText = "example alt text";
    const { container } = render(
      <CatEmotionImage tags={["example"]} src={cuddly} alt={altText} />
    );

    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(1);

    const btnByAltText = screen.getByLabelText(altText);
    expect(btnByAltText).toBeInTheDocument();

    // eslint-disable-next-line
    const images = container.querySelector("button img");
    expect(images).toBeInTheDocument();
  });

  // TODO: mock `netlifyIdentity.currentUser()` from 'netlify-identity-widget'
});
