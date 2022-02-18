import { useState } from 'react';
import styles from './styles.module.scss';

export function ContentCadastro() {
  const [nome, setNome] = useState('')
  const [senha, setsenha] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event:any){
    localStorage.setItem('nome', nome)
    localStorage.setItem('senha', senha)
    localStorage.setItem('email', email)
  }
  return (
    <main className={styles.Container} >
      <div className={styles.Content}>
        <h2>Informe seus dados para cadastro</h2>
        <form>
          <label >
            Nome
            <input type="text" name="name" onChange={(e)=>setNome(e.target.value)} />
          </label>
          <label >
            Email
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label >
            Senha
            <input type="password" name="password" onChange={(e)=>setsenha(e.target.value)} />
          </label>
          <button className={styles.submit} onClick={handleSubmit}>
            Cadastrar
          </button>
        </form>
      </div>
    </main >
  )
}