import styles from "./styles.module.scss";

export function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>Slogan principal</h1>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            obcaecati minima aliquam voluptates sed tenetur vero, inventore
            tempora. Saepe tenetur, cumque repellendus voluptatibus odio magnam
            at vero rerum? Recusandae, architecto.
          </h3>
          <button>Saiba mais</button>
        </div>

        <img src="/images/baner2.webp" alt="baner" />
      </div>
    </>
  );
}
