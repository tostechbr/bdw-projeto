import styles from './styles.module.scss';

export function ContentCadastro() {
  return (
    <main className={styles.Container} >
      <div className={styles.Content}>
        <h2>Informe seus dados para cadastro</h2>
        <form>
          <label >
            Nome
            <input type="text" name="name" />
          </label>
          <label >
            Email
            <input type="email" name="email" />
          </label>
          <label >
            Senha
            <input type="password" name="password" />
          </label>
          <button className={styles.submit} type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </main >
  )
}