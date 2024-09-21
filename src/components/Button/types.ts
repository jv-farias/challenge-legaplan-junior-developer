export interface ButtonProps {
  variant?: "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
