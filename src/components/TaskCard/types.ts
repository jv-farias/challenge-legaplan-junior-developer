export interface TaskCardProps {
  id: string;
  task: string;
  isCompleted: boolean;
  onToggleComplete?: () => void;
  onDelete?: () => void;
}
