import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskCard } from "./TaskCard";

test("renders TaskCard with task name", () => {
  const { getByText } = render(
    <TaskCard
      id="react"
      onDelete={() => {}}
      task="Study React"
      isCompleted={false}
    />,
  );
  const element = getByText("Study React");
  expect(element).toBeInTheDocument();
});

test("calls onToggleComplete when checkbox is clicked", () => {
  const toggleComplete = jest.fn();
  const { getByRole } = render(
    <TaskCard
      id="react"
      onDelete={() => {}}
      task="Study React"
      isCompleted={false}
      onToggleComplete={toggleComplete}
    />,
  );
  const checkbox = getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(toggleComplete).toHaveBeenCalled();
});

test("displays check icon when task is completed", () => {
  const { container } = render(
    <TaskCard
      id="react"
      onDelete={() => {}}
      task="Study React"
      isCompleted={true}
    />,
  );
  const checkIcon = container.querySelector("svg");
  expect(checkIcon).toBeInTheDocument();
});
