import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

test("renders Header with user name", () => {
  const user = { name: "John Doe" };
  const { getByText } = render(<Header user={user} />);
  const element = getByText("Bem-vindo de volta, John Doe");
  expect(element).toBeInTheDocument();
});

test("renders Header with default welcome message if no user", () => {
  const { getByText } = render(<Header />);
  const element = getByText("Bem-vindo ao Focal Point");
  expect(element).toBeInTheDocument();
});

test("displays capitalized date", () => {
  const { getByText } = render(<Header />);
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const capitalizedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);
  const element = getByText(capitalizedDate);
  expect(element).toBeInTheDocument();
});
