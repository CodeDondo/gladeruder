
import { Link } from 'react-router-dom'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import rudevask from '../assets/rudevask.jpg'
import styles from './ServicePage.module.scss'

export const ServicePage = () => {
  return (
    <ContentWrapper
      title="Vores Services"
      description="Professionel vinduesrengøring og relaterede tjenester"
    >
      <section className={styles.wrapper}>
        {/* Hero Image */}
        <div className={styles.heroImage}>
          <img src={rudevask} alt="Professionel vinduesrengøring" />
          <div className={styles.imageOverlay}></div>
        </div>

        {/* Service Categories */}
        <div className={styles.categories}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryContent}>
              <h2>Erhvervs</h2>
              <p>Professionel rengøringsservice til virksomheder og kommercielle ejendomme</p>
            </div>
            <Link to="/erhverv" className={styles.categoryLink}>
              <span>Læs mere</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryContent}>
              <h2>Privat</h2>
              <p>Vinduesrengøring til private hjem og mindre ejendomme</p>
            </div>
            <Link to="/privat" className={styles.categoryLink}>
              <span>Læs mere</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Services Overview */}
        <div className={styles.servicesGrid}>
          <h2 className={styles.gridTitle}>Vores Tjenester</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <div className={styles.checkmark}>✓</div>
              <span>Vinduespudsning</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.checkmark}>✓</div>
              <span>Solcellevask</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.checkmark}>✓</div>
              <span>Tagrenderens</span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.checkmark}>✓</div>
              <span>Kamrens</span>
            </div>
          </div>
        </div>

        {/* Vinduespudsning Details */}
        <div className={styles.serviceSection}>
          <div className={styles.serviceHeader}>
            <h2>Vinduespudsning</h2>
          </div>
          <p className={styles.serviceDescription}>
            Vi tilbyder professionel vinduespudsning til både private og erhvervskunder. Vores erfarne team sikrer skinnende rene vinduer, der forbedrer dit hjems eller din virksomheds udseende.
          </p>

          <div className={styles.serviceSubsections}>
            <div className={styles.subsection}>
              <h3>Traditionel Vinduespudsning</h3>
              <p>Vores traditionelle vinduespudsning inkluderer grundig rengøring af både indvendige og udvendige vinduer ved hjælp af miljøvenlige rengøringsmidler og professionelle teknikker.</p>
            </div>

            <div className={styles.subsection}>
              <h3>Rentvandsanlæg</h3>
              <p>Vi anvender rentvandsanlæg til effektiv og skånsom vinduespudsning, hvilket sikrer en miljøvenlig og grundig rengøring uden brug af kemikalier.</p>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className={styles.otherServices}>
          <div className={styles.serviceSection}>
            <div className={styles.serviceHeader}>
              <h2>Solcellevask</h2>
            </div>
            <p className={styles.serviceDescription}>
              Vores solcellevask service sikrer, at dine solpaneler fungerer optimalt ved at fjerne snavs og skidt, hvilket forbedrer deres effektivitet og levetid.
            </p>
          </div>

          <div className={styles.serviceSection}>
            <div className={styles.serviceHeader}>
              <h2>Tagrenderens</h2>
            </div>
            <p className={styles.serviceDescription}>
              Vi tilbyder professionel tagrenderens for at forhindre tilstopning og skader på dit tag ved at fjerne blade, snavs og andet affald.
            </p>
          </div>

          <div className={styles.serviceSection}>
            <div className={styles.serviceHeader}>
              <h2>Kamrens</h2>
            </div>
            <p className={styles.serviceDescription}>
              Vores kamrens service sikrer, at dine vindueskarme er rene og fri for snavs, hvilket forbedrer både udseendet og funktionaliteten af dine vinduer.
            </p>
          </div>
        </div>
      </section>
    </ContentWrapper>
  )
}

