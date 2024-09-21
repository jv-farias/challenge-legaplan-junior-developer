import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

test("renders Input with label", () => {
  const { getByText } = render(
    <Input
      onChange={() => {}}
      placeholder="Type here..."
      label="Name"
      value=""
    />,
  );
  const label = getByText("Name");
  expect(label).toBeInTheDocument();
});

test("changes value when user types", () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input
      onChange={handleChange}
      placeholder="Type here..."
      label="Name"
      value=""
    />,
  );
  const input = getByPlaceholderText("Type here...");
  fireEvent.change(input, { target: { value: "New Value" } });
  expect(handleChange).toHaveBeenCalled();
});
