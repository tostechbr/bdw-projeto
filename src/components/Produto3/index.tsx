import styles from "./styles.module.scss";

export function Produto3() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/41-v23uy6GL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
          alt="produto"
        />
        <strong>Cosmos</strong>
        <span>Escrito por um dos maiores divulgadores de ciência do século XX, Cosmos retraça 14 bilhões de anos de evolução cósmica, explorando tópicos como a origem da vida, o cérebro humano, hieróglifos egípcios, missões espaciais, a morte do sol, a evolução das galáxias e as forças e indivíduos que ajudaram a moldar a ciência moderna.</span>
        <p>R$ 35,90</p>
        <button>Comprar</button>
      </div>
    </>
  );
}
