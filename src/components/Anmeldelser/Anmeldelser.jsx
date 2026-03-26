import FacebookLogo from '../../assets/Facebook.svg'
import styles from './Anmeldelser.module.scss'

export const Anmeldelser = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Hvad siger kunder om os?</h2>
      <div className={styles.rule} />

      <div className={styles.sources}>
        <a 
          href="https://dk.trustpilot.com/review/gladeruder.dk" 
          className={styles.sourceLink} 
          target="_blank" 
          rel="noreferrer"
          aria-label="Trustpilot anmeldelser"
        >
          <span className={styles.logoLabel}>TRUSTPILOT</span>
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=61560398069308&sk=reviews" 
          className={styles.sourceLink} 
          target="_blank" 
          rel="noreferrer"
          aria-label="Facebook anmeldelser"
        >
          <img src={FacebookLogo} alt="Facebook" className={styles.logo} />
        </a>
        <a 
          href="https://www.google.com/search?q=Glade%20Ruder%20Anmeldelser&tbm=lcl" 
          className={styles.sourceLink} 
          target="_blank" 
          rel="noreferrer"
          aria-label="Google anmeldelser"
        >
          <span className={styles.googleG}>G</span>
        </a>
      </div>
    </section>
  )
}
