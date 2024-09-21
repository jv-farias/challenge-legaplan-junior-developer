"use client";

import { useEffect, useState } from "react";
import styles from "./TaskList.module.scss";
import { Button } from "../Button";
import { DialogMobile } from "../DialogMobile";
import { DialogHeader } from "../DialogMobile/DialogMobileHeader/DialogMobileHeader";
import { DialogContent } from "../DialogMobile/DialogMobileContent";
import { Input } from "../Input";
import { DialogFooter } from "../DialogMobile/DialogMobileFooter";
import { TaskCard } from "../TaskCard";
import { TaskCardProps } from "../TaskCard/types";
import { getTasksCompleted, getTasksPending } from "@/utils/getTasks";
import { handleToggleComplete } from "@/utils/handleToggleComplete";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "usehooks-ts";
import { Modal } from "../Modal";
import { ModalHeader } from "../Modal/ModalHeader";
import { ModalContent } from "../Modal/ModalContent";
import { ModalFooter } from "../Modal/ModalFooter";

export const TaskList = () => {
  const [tasks, setTasks] = useState<TaskCardProps[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  const [newTask, setNewTask] = useState<TaskCardProps>({
    id: "",
    task: "",
    isCompleted: false,
  });

  const modals = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (tasks && Array.isArray(tasks)) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.task.trim() === "" || !Array.isArray(tasks)) return;
    const updatedTasks = [...tasks, { ...newTask, id: uuidv4() }];
    setTasks(updatedTasks);
    setNewTask({ id: "", task: "", isCompleted: false });
    setOpenAddModal(false);
  };

  const handleOpenAddDialog = () => {
    setOpenAddModal(true);
  };

  const handleOpenDeleteDialog = (taskId: string) => {
    setTaskToDelete(taskId);
    setOpenDeleteModal(true);
  };

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(updatedTasks);
    setTaskToDelete(null);
    setOpenDeleteModal(false);
  };

  return (
    <>
      <main className={styles.container}>
        <h2 className={styles.title}>Suas tarefas de hoje</h2>
        <div className={styles.list}>
          {getTasksPending(tasks).length > 0 ? (
            getTasksPending(tasks).map((task: TaskCardProps) => (
              <TaskCard
                id={task.id}
                key={task.id}
                task={task.task}
                isCompleted={task.isCompleted}
                onDelete={() => handleOpenDeleteDialog(task.id)}
                onToggleComplete={() =>
                  handleToggleComplete(task.id, tasks, setTasks)
                }
              />
            ))
          ) : (
            <p className={styles.subtitle}>Nenhuma tarefa pendente</p>
          )}
        </div>
        <h2 className={styles.title}>Tarefas finalizadas</h2>
        <div className={styles.list}>
          {getTasksCompleted(tasks).length > 0 ? (
            getTasksCompleted(tasks).map((task: TaskCardProps) => (
              <TaskCard
                id={task.id}
                key={task.id}
                task={task.task}
                isCompleted={task.isCompleted}
                onDelete={() => handleOpenDeleteDialog(task.id)}
                onToggleComplete={() =>
                  handleToggleComplete(task.id, tasks, setTasks)
                }
              />
            ))
          ) : (
            <p className={styles.subtitle}>Nenhuma tarefa concluída</p>
          )}
        </div>

        {openAddModal &&
          (modals ? (
            <Modal>
              <ModalHeader>
                <h2 className={styles.header}>Nova tarefa</h2>
              </ModalHeader>
              <ModalContent>
                <form>
                  <Input
                    value={newTask.task}
                    label="Título"
                    placeholder="Digite o título da tarefa"
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        task: e.target.value,
                      })
                    }
                  />
                </form>
              </ModalContent>
              <ModalFooter>
                <Button label="Adicionar" onClick={handleAddTask} />
                <Button
                  label="Cancelar"
                  variant="secondary"
                  onClick={() => setOpenAddModal(false)}
                />
              </ModalFooter>
            </Modal>
          ) : (
            <DialogMobile>
              <DialogHeader>
                <h2 className={styles.header}>Nova tarefa</h2>
              </DialogHeader>
              <DialogContent>
                <form>
                  <Input
                    value={newTask.task}
                    label="Título"
                    placeholder="Digite o título da tarefa"
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        task: e.target.value,
                      })
                    }
                  />
                </form>
              </DialogContent>
              <DialogFooter>
                <Button label="Adicionar" onClick={handleAddTask} />
                <Button
                  label="Cancelar"
                  variant="secondary"
                  onClick={() => setOpenAddModal(false)}
                />
              </DialogFooter>
            </DialogMobile>
          ))}

        {openDeleteModal &&
          (modals ? (
            <Modal>
              <ModalHeader>
                <h2 className={styles.header}>Deletar tarefa</h2>
              </ModalHeader>
              <ModalContent>
                <p className={styles.description}>
                  Tem certeza que deseja deletar essa tarefa?
                </p>
              </ModalContent>
              <ModalFooter>
                <Button
                  label="Deletar"
                  variant="destructive"
                  onClick={handleDeleteTask}
                />
                <Button
                  label="Cancelar"
                  variant="secondary"
                  onClick={() => setOpenDeleteModal(false)}
                />
              </ModalFooter>
            </Modal>
          ) : (
            <DialogMobile>
              <DialogHeader>
                <h2 className={styles.header}>Deletar tarefa</h2>
              </DialogHeader>
              <DialogContent>
                <p className={styles.description}>
                  Tem certeza que deseja deletar essa tarefa?
                </p>
              </DialogContent>
              <DialogFooter>
                <Button
                  label="Deletar"
                  variant="destructive"
                  onClick={handleDeleteTask}
                />
                <Button
                  label="Cancelar"
                  variant="secondary"
                  onClick={() => setOpenDeleteModal(false)}
                />
              </DialogFooter>
            </DialogMobile>
          ))}
      </main>
      <Button label="Adicionar nova tarefa" onClick={handleOpenAddDialog} />
    </>
  );
};
