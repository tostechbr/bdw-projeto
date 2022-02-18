import { NavLink } from "react-router-dom";

import styles from './styles.module.scss';

export function Header() {
  const userLogado = localStorage.getItem('User')
  const userName = localStorage.getItem('nome')

  if(userLogado === 'Logado'){
    return (
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/react.png" alt="" />
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? '#167ABC' : '#555555',
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
               <NavLink
                to="/login"
              >
                {userName}
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    )
  } else {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/react.png" alt="" />
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? '#167ABC' : '#555555',
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
               <NavLink
                to="/login"
              >
                Login
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}