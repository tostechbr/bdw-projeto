import { NavLink } from "react-router-dom";
import { Footer } from "../Footer";

import styles from './styles.module.scss';

export function ContentLogin() {
  return (
    <main className={styles.Container} >
      <div className={styles.Content}>
        <h2>Informe seus dados para fazer Login</h2>
        <form>
          <label >
            Nome
            <input type="text" name="name" />
          </label>
          <label >
            Senha
            <input type="password" name="password" />
          </label>
          <button className={styles.submit} type="submit">
            Logar
          </button>
          <p>
            Não é cadastrado?
            <NavLink
              to="/cadastrar"
            >
              Cadastre-se
            </NavLink>
          </p>
        </form>
      </div>
    </main >
  )
}