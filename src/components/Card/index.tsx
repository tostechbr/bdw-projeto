import styles from "./styles.module.scss";

export function Card() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://cdn.awsli.com.br/production/static/img/produto-sem-imagem.gif"
          alt="produto"
        />
        <strong>Produto 1</strong>
        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        <button>Comprar</button>
      </div>
    </>
  );
}
