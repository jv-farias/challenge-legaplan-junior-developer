import { TaskCardProps } from "@/components/TaskCard/types";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const handleToggleComplete = (
  id: string,
  tasks: TaskCardProps[],
  setTasks: SetState<TaskCardProps[]>,
) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  setTasks(updatedTasks);
};
