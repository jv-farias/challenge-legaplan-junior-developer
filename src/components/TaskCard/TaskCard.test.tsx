import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
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
