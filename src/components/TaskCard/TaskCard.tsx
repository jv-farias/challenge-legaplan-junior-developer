import CheckIcon from "@/assets/icons/CheckIcon";
import styles from "./TaskCard.module.scss";
import TrashIcon from "@/assets/icons/TrashIcon";
import { TaskCardProps } from "./types";

export const TaskCard = ({
  task,
  isCompleted,
  onToggleComplete,
  onDelete,
}: TaskCardProps) => {
  return (
    <div className={`${styles.card} ${isCompleted ? styles.completed : ""}`}>
      <div className={styles.checkbox} onClick={onToggleComplete}>
        {isCompleted && <CheckIcon />}
      </div>
      <span className={styles.text}>{task}</span>
      <div className={styles.delete} onClick={onDelete}>
        <TrashIcon />
      </div>
    </div>
  );
};
