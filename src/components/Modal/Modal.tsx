import styles from "./Modal.module.scss";
import { ModalProps } from "./types";

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};