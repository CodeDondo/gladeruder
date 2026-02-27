import placeholder from '../../assets/placeholder.png'
import styles from './Portfolio.module.scss'

export const Portfolio = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.rule} />

      <div className={styles.grid}>
        <figure className={styles.card}>
          <img src={placeholder} alt="Portfolio placeholder 1" />
        </figure>
        <figure className={styles.card}>
          <img src={placeholder} alt="Portfolio placeholder 2" />
        </figure>
      </div>
    </section>
  )
}
