import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

test("renders Header with user name", () => {
  const { getByText } = render(<Header user={{ name: "John Doe" }} />);
  const element = getByText("Bem-vindo de volta, John Doe");
  expect(element).toBeInTheDocument();
});

test("renders Header with default welcome message if no user", () => {
  const { getByText } = render(<Header />);
  const element = getByText("Bem-vindo ao Focal Point");
  expect(element).toBeInTheDocument();
});
