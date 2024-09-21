import { TaskCardProps } from "@/components/TaskCard/types";

export const getTasksCompleted = (tasks: TaskCardProps[] = []) => {
  return Array.isArray(tasks) ? tasks.filter((task) => task.isCompleted) : [];
};

export const getTasksPending = (tasks: TaskCardProps[] = []) => {
  return Array.isArray(tasks) ? tasks.filter((task) => !task.isCompleted) : [];
};
