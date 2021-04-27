import styles from './styles.module.scss'

export function Sidebar() {
  return(
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Sistema Semijóias</strong>
      </header>

      <main>
        <ul>
          <li className="active">
            <a href="">Teste</a>
          </li>
        </ul>
      </main>

      <footer className={styles.empty}>
        
      </footer>
    </div>
  )
}