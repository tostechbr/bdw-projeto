import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export function Produto1() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_50dbfb675b942cd391e8b8b781ff117f9531ce72.jpg"
          alt="produto"
        />
        <strong>Pequena coreografia do adeus</strong>
        <span>Em seu segundo livro, Aline Bei — vencedora do Prêmio São Paulo de Literatura com O peso do pássaro morto — constrói um retrato tão sensível quanto brutal sobre família, amor e abandono.</span>
        <p>R$ 50,00</p>
        <Link to="/produto1">
          Comprar
        </Link>
      </div>
    </>
  );
}
