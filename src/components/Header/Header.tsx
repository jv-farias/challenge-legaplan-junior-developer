import styles from "./Header.module.scss";
import logo from "@/assets/images/focalpoint-logo.svg";
import Image from "next/image";
import { HeaderProps } from "./types";

export const Header = ({ user }: HeaderProps) => {
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const date = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const capitalizedDate = date.split(" ").map(capitalizeFirstLetter).join(" ");

  return (
    <header className={styles.header}>
      <Image src={logo} alt="Focal Point Logo" width={150} height={36} className={styles.logo} />
      {user ? (
        <h1 className={styles.title}>Bem-vindo de volta, {user.name}</h1>
      ) : (
        <h1 className={styles.title}>Bem-vindo ao Focal Point</h1>
      )}
      <p className={styles.description}>{capitalizedDate}</p>
    </header>
  );
};
