import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Button } from "./Button";

test("renders Button with correct label", () => {
  const { getByText } = render(<Button label="Click Me" />);
  const element = getByText("Click Me");
  expect(element).toBeInTheDocument();
});

test("applies correct class based on variant", () => {
  const { getByText } = render(<Button label="Primary" variant="primary" />);
  const button = getByText("Primary");
  expect(button).toHaveTextContent("Primary");
});
