import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./types";

export const Button = ({
  variant = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const buttonStyle = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button type="button" className={buttonStyle} {...props}>
      {label}
    </button>
  );
};
