import type { Meta, StoryObj } from "@storybook/react";
import { TaskCard } from "./TaskCard";
import { useState, useEffect } from "react";
import { TaskCardProps } from "./types";
import styles from "./TaskCard.module.scss";

export type Story = StoryObj<TaskCardProps>;

const meta: Meta<typeof TaskCard> = {
  title: "Components/Task Card",
  component: TaskCard,
  tags: ["autodocs"],
  argTypes: {
    task: {
      control: {
        type: "text",
      },
    },
    isCompleted: {
      control: {
        type: "boolean",
      },
    },
    onToggleComplete: {
      action: "onToggleComplete",
    },
    onDelete: {
      action: "onDelete",
    },
  },
} satisfies Meta<typeof TaskCard>;

export default meta;

export const SingleCard: Story = {
  args: {
    task: "Estudar React",
    isCompleted: false,
  },
  render: (args) => {
    const [tasks, setTasks] = useState([
      { id: "1", task: args.task, isCompleted: args.isCompleted },
    ]);

    useEffect(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === "1"
            ? { ...task, task: args.task, isCompleted: args.isCompleted }
            : task,
        ),
      );
    }, [args.task, args.isCompleted]);

    const handleToggleComplete = (id: string) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      setTasks(updatedTasks);
    };

    return (
      <div className={styles.container}>
        {tasks.map((task) => (
          <TaskCard
            id="uuid"
            key={task.id}
            task={task.task}
            isCompleted={task.isCompleted}
            onToggleComplete={() => handleToggleComplete(task.id)}
            onDelete={() => console.log(`Delete task id: ${task.id}`)} // Exemplo de onDelete
          />
        ))}
      </div>
    );
  },
};

export const Multiples: Story = {
  args: {
    task: "Estudar C++",
    isCompleted: false,
  },
  render: (args) => {
    const [tasks, setTasks] = useState([
      { id: "1", task: "Estudar Next.js", isCompleted: false },
      { id: "2", task: "Estudar React", isCompleted: true },
      { id: "3", task: "Estudar TypeScript", isCompleted: true },
      { id: "4", task: args.task, isCompleted: args.isCompleted },
    ]);

    useEffect(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === "4"
            ? { ...task, task: args.task, isCompleted: args.isCompleted }
            : task,
        ),
      );
    }, [args.task, args.isCompleted]);

    const handleToggleComplete = (id: string) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      setTasks(updatedTasks);
    };

    return (
      <div className={styles.container}>
        {tasks.map((task) => (
          <TaskCard
            id="uuid"
            key={task.id}
            task={task.task}
            isCompleted={task.isCompleted}
            onToggleComplete={() => handleToggleComplete(task.id)}
            onDelete={() => console.log(`Delete task id: ${task.id}`)} // Exemplo de onDelete
          />
        ))}
      </div>
    );
  },
};
