import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import cuddly from "images/cuddly.jpg";

import { CatEmotionImage } from ".";

describe("CatEmotionImage Component", () => {
  const altText = "example alt text";
  const exampleTags = ["example"];

  let container: HTMLElement;
  const setup = () => {
    const { container: containerResult } = render(
      <CatEmotionImage tags={exampleTags} src={cuddly} alt={altText} />
    );

    container = containerResult;
  };

  it("fully renders without exploding", () => {
    setup();

    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(1);

    const btnByAltText = screen.getByLabelText(altText);
    expect(btnByAltText).toBeInTheDocument();

    // eslint-disable-next-line
    const images = container.querySelector("button img");
    expect(images).toBeInTheDocument();
  });

  it("displays an error if no 'tags' are selected", () => {
    setup();

    const catBtn = screen.getByRole("button");
    userEvent.click(catBtn);

    const selectedOption = screen.getByLabelText(`Remove ${exampleTags[0]}`);
    expect(selectedOption).toBeInTheDocument();

    const errorText = "You must select at least one tag";
    expect(screen.queryByText(errorText)).not.toBeInTheDocument();

    const clearBtn = screen.getByLabelText("Clear selected options");
    userEvent.click(clearBtn);

    expect(selectedOption).not.toBeInTheDocument();
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  // TODO: mock `netlifyIdentity.currentUser()` from 'netlify-identity-widget'
});
