import { Link } from 'react-router-dom'
import styles from './FAQ.module.scss'

export const FAQ = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hyppigt stillede spørgsmål</h2>
        <div className={styles.rule} />
        
        <p className={styles.description}>
          Har du spørgsmål om vores vinduesrengøringsservice? Her finder du svar på de mest
          hyppigt stillede spørgsmål. Hvis du ikke finder svaret, kontakt os gerne direkte.
        </p>

        <Link to="/faq" className={styles.cta}>
          <span>Se alle spørgsmål</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
