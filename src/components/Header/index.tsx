import { NavLink } from "react-router-dom";

import styles from './styles.module.scss';

export function Header() {
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