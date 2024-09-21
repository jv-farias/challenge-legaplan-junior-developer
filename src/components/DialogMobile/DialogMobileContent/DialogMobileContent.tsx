import styles from "./DialogContent.module.scss";
import { DialogContentProps } from "./types";

export const DialogContent = ({ children }: DialogContentProps) => {
  return <div className={styles.content}>{children}</div>;
};
