import styles from "./styles.module.scss";

export function Produto2() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_5ee0c15aab04e19c36baa4c3230a4df3584aa2e6.jpg"
          alt="produto"
        />
        <strong>Mulheres que Correm com os Lobos</strong>
        <span>Os lobos foram pintados com um pincel negro nos contos de fada e até hoje assustam meninas indefesas. Mas nem sempre eles foram vistos como criaturas terríveis e violentas. Na Grécia antiga e em Roma, o animal era o consorte de Artemis, a caçadora, e carinhosamente amamentava os heróis. </span>
        <p>R$ 99,50</p>
        <button>Comprar</button>
      </div>
    </>
  );
}
