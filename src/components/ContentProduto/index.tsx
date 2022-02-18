import styles from './styles.module.scss'

export function ContentProduto() {
  return (
    <div className={styles.container}>
      <div className={styles.card1}>
        <img src="https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_50dbfb675b942cd391e8b8b781ff117f9531ce72.jpg" alt="" />
        <p>
          Em seu segundo livro, Aline Bei — vencedora do Prêmio São Paulo de Literatura com O peso do pássaro morto — constrói um retrato tão sensível quanto brutal sobre família, amor e abandono.

          Julia é filha de pais separados: sua mãe não suporta a ideia de ter sido abandonada pelo marido, enquanto seu pai não suporta a ideia de ter sido casado. Sufocada por uma atmosfera de brigas constantes e falta de afeto, a jovem escritora tenta reconhecer sua individualidade e dar sentido à sua história, tentando se desvencilhar dos traumas familiares.

          Entre lembranças da infância e da adolescência, e sonhos para o futuro, Julia encontra personagens essenciais para enfrentar a solidão ao mesmo tempo que ensaia sua própria coreografia, numa sequência de movimentos de aproximação e afastamento de seus pais que lhe traz marcas indeléveis.

          Escrito com a prosa original que fez de Aline Bei uma das grandes revelações da literatura brasileira contemporânea, Pequena coreografia do adeus é um romance emocionante que mostra como nossas relações moldam quem somos.

          “Aline Bei narra como quem se posiciona à beira do abismo, o corpo em espera, o instante que se aproxima. Ler Pequena coreografia do adeus é acompanhar essa queda, íngreme e definitiva, mas também sublime e transformadora.”
          — Carola Saavedra

          “A experimentação formal que sublinhou o estilo marcante de Aline Bei, em sua estreia com O peso do pássaro morto, sedimenta-se neste segundo romance, trazendo-nos a história dolorosa de Júlia Terra — personagem complexa, cujas margens familiares vão se dissipando. A trama urdida com lirismo entrelaça a educação afetiva, a violência e a experiência do desamor, revelando o paradoxo da condição humana — a um só tempo precária e (por meio da escrita) redentora.”
          — João Anzanello Carrascoza
        </p>
      </div>
      <div className={styles.card2}>
        <h1>Pequena coreografia do adeus</h1>
        <p>R$ 50,00</p>
        <button>Comprar</button>
      </div>
    </div>
  )
}