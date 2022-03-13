import { render, screen } from "@testing-library/react";

import { EmotionSelect } from ".";

describe("EmotionSelect Component", () => {
  it("fully renders without exploding", () => {
    render(<EmotionSelect />);

    const rootElement = screen.getByTestId("EmotionSelect-root");
    expect(rootElement).toBeTruthy();
  });
});
