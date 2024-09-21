import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskList } from "./TaskList";

test("renders TaskList with no tasks initially", () => {
  const { getByText } = render(<TaskList />);
  const element = getByText("Nenhuma tarefa pendente");
  expect(element).toBeInTheDocument();
});

test("adds a new task to TaskList", () => {
  const { getByText, getByPlaceholderText } = render(<TaskList />);
  const addButton = getByText("Adicionar nova tarefa");
  fireEvent.click(addButton);
  const input = getByPlaceholderText("Digite o título da tarefa");
  fireEvent.change(input, { target: { value: "New Task" } });
  const addTaskButton = getByText("Adicionar");
  fireEvent.click(addTaskButton);
  const newTask = getByText("New Task");
  expect(newTask).toBeInTheDocument();
});

test("deletes a task from TaskList", () => {
  const { getByText, getByPlaceholderText } = render(<TaskList />);
  const addButton = getByText("Adicionar nova tarefa");
  fireEvent.click(addButton);
  fireEvent.change(getByPlaceholderText("Digite o título da tarefa"), {
    target: { value: "Task to delete" },
  });
  fireEvent.click(getByText("Adicionar"));
  const deleteButton = getByText("Deletar");
  fireEvent.click(deleteButton);
  const task = getByText("Task to delete");
  expect(task).not.toBeInTheDocument();
});
