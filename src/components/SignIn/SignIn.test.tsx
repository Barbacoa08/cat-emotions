import { render, screen } from "@testing-library/react";

import { SignIn } from ".";

describe("SignIn Component", () => {
  it("fully renders without exploding", () => {
    render(<SignIn />);

    const rootElement = screen.getByTestId("SignIn-root");
    expect(rootElement).toBeTruthy();
  });
});
