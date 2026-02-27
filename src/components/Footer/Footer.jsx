import MRW from '../../assets/logo.png'  
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import styles from './Footer.module.scss'

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const updateYear = () => setYear(new Date().getFullYear())

    // Update once per day to handle year rollover without reload
    const id = setInterval(updateYear, 1000 * 60 * 60 * 24)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo og Navigation */}
        <div className={styles.footerSection}>
          <div className={styles.logoRow}>
            <img src={Logo} alt="Glade Ruder Logo" className={styles.logo} />
            <Link to="https://www.mortenrwinther.dk" target='_blank'><img src={MRW} alt="Morten R. Winther" className={styles.logo} /></Link>
          </div>
          <nav className={styles.footerNav}>
            <Link to="/">Hjem</Link>
            <Link to="/services">Services</Link>
            <Link to="/tilbud">Uforpligtende tilbud</Link>
            <Link to="/omos">Om os</Link>
          </nav>
        </div>

        {/* Åbningstider */}
        <div className={styles.footerSection}>
          <h3>Åbningstider:</h3>
          <p><strong>Mandag - Torsdag:</strong> Kl 07:00 - 17:00</p>
          <p><strong>Fredag:</strong> Kl 07:00 - 15:00</p>
        </div>

        {/* Kontakt */}
        <div className={styles.footerSection}>
          <h3>Kontakt:</h3>
          <p><strong>Email:</strong> <a href="mailto:kontakt@gladeruder.dk">kontakt@gladeruder.dk</a></p>
          <p><strong>Telefon:</strong> <a href="tel:+4560101080">+45 60 10 10 80</a></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerLinks}>
          <Link to="/cookiepolitik">Cookiepolitik</Link>
          <span>|</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <p className={styles.copyright}>© {year} Glade ruder. CVR: 42 56 14 79</p>
      </div>
    </footer>
  )
}
