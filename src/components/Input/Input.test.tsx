import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
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
