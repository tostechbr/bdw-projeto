import { Produto1 } from "../Produto1";
import { Produto2 } from "../Produto2";
import { Produto3 } from "../Produto3";
import { Produto4 } from "../Produto4";
import styles from "./styles.module.scss";


export function ContentCards() {
  return (
    <div className={styles.container}>
      <Produto1 />
      <Produto2 />
      <Produto3 />
      <Produto4 />
    </div>
  )
}