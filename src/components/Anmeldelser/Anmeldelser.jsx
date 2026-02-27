import styles from './Anmeldelser.module.scss'

export const Anmeldelser = () => {

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Hvad siger kunder om os?</h2>
      <div className={styles.rule} />

      <div className={styles.sources}>
        <a href="https://dk.trustpilot.com/review/gladeruder.dk" className={styles.source} target="_blank" rel="noreferrer">TRUSTPILOT</a>
        <a href="https://www.facebook.com/profile.php?id=61560398069308&sk=reviews" className={styles.source} target="_blank" rel="noreferrer">FACEBOOK</a>
        <a href="https://www.google.com/search?rlz=1C1CHBF_daDK1107DK1107&q=Glade%20Ruder%20Anmeldelser&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA3AGJjM3NDS2MjIxMjYwPDDYyMrxjF3XMSU1IVgkpTUosUHPNyU3NSUnOKU4sWseKSAQBkzw6BTwAAAA&rldimm=10701073671932242301&tbm=lcl&cs=1&hl=da&sa=X&ved=0CBkQ9fQKKABqFwoTCPDl9rnstJADFQAAAAAdAAAAABAG&biw=1440&bih=731&dpr=2#lkt=LocalPoiReviews" className={styles.source} target="_blank" rel="noreferrer">GOOGLE</a>
      </div>
    </section>
  )
}
