import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogMobile } from "./DialogMobile";

test("renders DialogMobile with children", () => {
  const { getByText } = render(<DialogMobile><p>Dialog Content</p></DialogMobile>);
  const element = getByText("Dialog Content");
  expect(element).toBeInTheDocument();
});

test("renders DialogMobile with correct styles", () => {
  const { container } = render(<DialogMobile><p>Dialog</p></DialogMobile>);
  expect(container.firstChild).toHaveClass("page");
});
