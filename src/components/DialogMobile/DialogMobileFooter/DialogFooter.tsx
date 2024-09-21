import styles from "./DialogFooter.module.scss";
import { DialogFooterProps } from "./types";

export const DialogFooter = ({ children }: DialogFooterProps) => {
  return <div className={styles.footer}>{children}</div>;
};
