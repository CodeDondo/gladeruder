import { Link } from 'react-router-dom'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import styles from './PrivatPage.module.scss'

export const PrivatPage = () => {
  return (
    <ContentWrapper
      title="Privat Vinduesrengøring"
      description="Professionel og pålidelig vinduesrengøring til dit hjem"
    >
      <section className={styles.wrapper}>
        {/* Hero */}
        <div className={styles.hero}>
          <h2>Dit Hjem Fortjener de Smukkeste Vinduer</h2>
          <p>Vi yder dedikeret vinduesrengøringsservice til private hjem med fokus på kvalitet og miljøvenlighed</p>
        </div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🏡</div>
            <h3>Til Private Husstande</h3>
            <p>Vi servicerer både små og store private hjem med samme høje kvalitetsstandard</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>⏱️</div>
            <h3>Fleksible Tider</h3>
            <p>Vi tilbyder bookinger på hverdage og weekend efter dine ønsker</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🌿</div>
            <h3>Miljøvenlighed</h3>
            <p>Vi bruger kun miljøvenlige produkter der er sikre for hele familien</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💰</div>
            <h3>Konkurrencedygtige Priser</h3>
            <p>Vi tilbyder fair priser uden skjulte gebyrer eller overraskelser</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🛡️</div>
            <h3>Forsikret</h3>
            <p>Vi er fuldt forsikret under arbejdet for din sikkerhed og ro</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>✨</div>
            <h3>Brillante Resultater</h3>
            <p>Dine vinduer bliver skinnende rene og ser ud som nye igen</p>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h2>Vores Private Services</h2>
          <div className={styles.sectionRule}></div>

          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <h3>Almindelig Vinduesrengøring</h3>
              <p>Grundig rengøring af alle dine vinduer, både indvendige og udvendige, med miljøvenlige midler.</p>
              <ul>
                <li>Indvendige og udvendige ruder</li>
                <li>Rammer og karme</li>
                <li>Miljøvenlige produkter</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Rentvandsanlæg Rengøring</h3>
              <p>Vores moderne rentvandsanlæg sikrer en ultra-mild og skånsom rengøring uden kemikalier.</p>
              <ul>
                <li>Kemikaliefrit</li>
                <li>Ultra-effektivt</li>
                <li>Længerevarende resultat</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Tagrenderens</h3>
              <p>Vi renser dine tagrenderier og afløbsrør for blade og snavs.</p>
              <ul>
                <li>Forhindrer tilstopning</li>
                <li>Sikre afvanding</li>
                <li>Forebygger skader</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Kamrens</h3>
              <p>Professionel rengøring af dine vindueskarme for et pænt og vedligeholdt udseende.</p>
              <ul>
                <li>Rene karme</li>
                <li>Forbedret udseende</li>
                <li>Længere levetid</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className={styles.processSection}>
          <h2>Sådan Fungerer Det</h2>
          <div className={styles.sectionRule}></div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Kontakt Mig</h3>
              <p>Ring eller udfyld vores kontaktformular for at få et uforpligtende tilbud</p>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Aftale Tid</h3>
              <p>Vi aftaler et bekvemt tidspunkt der passer til dit skema</p>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Rengøring</h3>
              <p>Jeg udfører professionel vinduesrengøring med høj kvalitet</p>
            </div>

            <div className={styles.stepArrow}>→</div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Betaling</h3>
              <p>Enkelt betaling uden skjulte gebyrer efter afsluttet arbejde</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <h2>Klar til gladerude?</h2>
          <p>Få et gratis og uforpligtende tilbud på vinduesrengøring til dit hjem</p>
          <Link to="/tilbud" className={styles.ctaButton}>
            <span>Få Tilbud Nu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </ContentWrapper>
  )
}
