import styles from "./styles.module.scss";
export function Footer() {
  return (
    <>
      <div className={styles.container}>
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
        </nav>
        <span>BDW</span>
        <nav>
          <a href="">Lucas Calixto</a>
          <a href="">Tiago Santos</a>
          <a href="">Maria Lago</a>
          <a href="">Matheus Dantas</a>
        </nav>
      </div>
    </>
  );
}
