import styles from "./Input.module.scss";
import { InputProps } from "./types";

export const Input = ({ label, placeholder, onChange, value }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
