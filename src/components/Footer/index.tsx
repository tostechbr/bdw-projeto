import styles from "./styles.module.scss";
export function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav>
            <a href="">Home</a>
            <a href="">Produtos</a>
          </nav>
          <span>BDW</span>
          <nav>
            <a href="">Maria Lago</a>
            <a href="">Matheus Dantas</a>
            <a href="">Lucas Calixto</a>
            <a href="">Tiago Santos</a>
          </nav>
        </div>
      </div>
    </>
  );
}
