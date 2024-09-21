import styles from "./ModalFooter.module.scss";
import { ModalFooterProps } from "./types";

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className={styles.footer}>{children}</div>;
};
