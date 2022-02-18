import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Footer } from "../Footer";

import styles from './styles.module.scss';

export function ContentLogin() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const resultEmail = localStorage.getItem('email')
  const resultSenha = localStorage.getItem('senha')

  console.log(resultEmail, resultSenha)

  function handleSubmit() {
    if (senha === resultSenha && email === resultEmail) {
      localStorage.setItem('User', 'Logado')
      return true
    } else {
      localStorage.setItem('User', 'Deslogado')
      return false
    }
  }
  return (
    <main className={styles.Container} >
      <div className={styles.Content}>
        <h2>Informe seus dados para fazer Login</h2>
        <form >
          <label >
            Email
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label >
            Senha
            <input type="password" name="password" onChange={(e) => setSenha(e.target.value)} />
          </label>

          <NavLink to="/" >
            <button className={styles.submit} onClick={handleSubmit}>
              Logar
            </button>
          </NavLink>
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