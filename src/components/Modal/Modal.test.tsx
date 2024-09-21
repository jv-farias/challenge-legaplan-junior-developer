import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";

test("renders Modal with children", () => {
  const { getByText } = render(
    <Modal>
      <p>Modal Content</p>
    </Modal>,
  );
  const element = getByText("Modal Content");
  expect(element).toBeInTheDocument();
});
