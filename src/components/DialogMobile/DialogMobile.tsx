import styles from "./DialogMobile.module.scss";
import { DialogMobileProps } from "./types";

export const DialogMobile = ({ children }: DialogMobileProps) => {
  return <div className={styles.page}>{children}</div>;
};
