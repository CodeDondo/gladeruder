
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import mig from '../assets/mig.jpg'
import styles from './AboutPage.module.scss'

export const AboutPage = () => {
  return (
    <ContentWrapper
      title="Om Glade Ruder"
      description="Møt bagmanden bag Danmarks mest pålidelige vinduesrengøring"
    >
      <section className={styles.wrapper}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <div className={styles.imageContainer}>
              <img src={mig} alt="Jiri - Ejer af Glade Ruder" className={styles.profileImage} />
              <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.heroContent}>
              <h2>Hej, jeg er Jiri</h2>
              <p className={styles.subtitle}>25 år | Selvstændig Vinduesrengøringsspecialist</p>
              <div className={styles.divider}></div>
              
              <p className={styles.introText}>
                Jeg startede Glade Ruder fordi jeg elsker at se smilende ansigter, når kunderne oplever deres vinduer lyse op efter en grundig rengøring. Med fokus på kvalitet, pålidelighed og miljøvenlighed hjælper jeg både private og erhvervskunder med at få de smukkeste vinduer.
              </p>

              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <h3>+500</h3>
                  <p>Tilfredse Kunder</p>
                </div>
                <div className={styles.stat}>
                  <h3>4+</h3>
                  <p>År Erfaring</p>
                </div>
                <div className={styles.stat}>
                  <h3>100%</h3>
                  <p>Dedikeret</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className={styles.aboutContent}>
            <div className={styles.contentSection}>
              <h2>Min Virksomhed</h2>
              <div className={styles.sectionRule}></div>
              
              <p>
                Glade Ruder er mere end bare vinduesrengøring - det handler om at give mennesker tilbagevendende klarhed og lysstimulans i deres hjem og virksomheder. Som selvstændig har jeg det privilegium at kunne yde personlig service til alle mine kunder, uanset størrelse på projektet.
              </p>

              <div className={styles.valueGrid}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🎯</div>
                  <h3>Kvalitet</h3>
                  <p>Jeg leverer arbejde på højeste niveau med professionelle teknikker og miljøvenlige midler.</p>
                </div>

                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🤝</div>
                  <h3>Pålidelighed</h3>
                  <p>Du kan stole på mig til at holde tider og levere den service du forventer hver gang.</p>
                </div>

                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🌍</div>
                  <h3>Miljøvenlighed</h3>
                  <p>Jeg bruger bæredygtige produkter og metoder for at passe på både dit hjem og vores planet.</p>
                </div>

                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>💬</div>
                  <h3>Kommunikation</h3>
                  <p>Jeg lytter til dine behov og tilpasser mine services for at møde dine forventninger.</p>
                </div>
              </div>
            </div>

            <div className={styles.contentSection}>
              <h2>Min Historie</h2>
              <div className={styles.sectionRule}></div>
              
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h3>2020</h3>
                    <p>Startede som vinduespudser på deltid mens jeg studerede. Hurtigt blev jeg klar over min passion for arbejdet.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h3>2021</h3>
                    <p>Blev selvstændig og lancerede Glade Ruder. Fokuserede på at bygge en stærk kundebase gennem kvalitetsarbejde.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h3>2023</h3>
                    <p>Investerede i professionelt rentvandsanlæg for at tilbyde den bedst mulige service til mine kunder.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h3>I dag</h3>
                    <p>Glæder mig til at fortsætte med at yde excellence inden for vinduesrengøring og at hjælpe flere kunder.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h2>Klar til gladerude?</h2>
            <p>Kontakt mig for et uforpligtende tilbud på dine vinduesrengøringsbehov</p>
            <a href="/tilbud" className={styles.ctaButton}>
              <span>Få Tilbud Nu</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </ContentWrapper>
  )
}

