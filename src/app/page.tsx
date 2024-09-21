import { Header } from "@/components/Header";
import { TaskList } from "@/components/TaskList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header user={{ name: "Marcus" }} />
      <TaskList />
    </div>
  );
}
