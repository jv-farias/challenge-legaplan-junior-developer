import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("renders Button with correct label", () => {
  const { getByText } = render(<Button label="Click Me" />);
  const element = getByText("Click Me");
  expect(element).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="Click Me" onClick={handleClick} />);
  const button = getByText("Click Me");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("applies correct class based on variant", () => {
  const { getByText } = render(<Button label="Primary" variant="primary" />);
  const button = getByText("Primary");
  expect(button).toHaveClass("primary");
});
