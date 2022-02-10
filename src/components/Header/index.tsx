import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/react.png" alt="" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <a href="">Login</a>
          </ul>
        </nav>
      </div>
    </header>
  )
}