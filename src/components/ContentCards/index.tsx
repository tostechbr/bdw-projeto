import { Card } from "../Card";
import styles from "./styles.module.scss";

export function ContentCards() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />

    </div>
  )
}