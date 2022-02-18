import styles from "./styles.module.scss";

export function Produto4() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_a15e55a127d9242918735ea84c267048761dc61c.jpg"
          alt="produto"
        />
        <strong>Dom Casmurro</strong>
        <span>Machado de Assis (1839-1908), escrevendo Dom Casmurro, produziu um dos maiores livros da literatura universal. Mas criando Capitu, a espantosa menina de "olhos oblíquos e dissimulados", de "olhos de ressaca", Machado nos legou um isncrível mistério, um mistério até hoje indecifrado.</span>
        <p>R$ 99,99</p>
        <button>Comprar</button>
      </div>
    </>
  );
}
