import { Link } from 'react-router-dom'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import styles from './ErhvervsPage.module.scss'

export const ErhvervsPage = () => {
  return (
    <ContentWrapper
      title="Erhvervs Vinduesrengøring"
      description="Professionel og pålidelig vinduesrengøring til virksomheder og store ejendomme"
    >
      <section className={styles.wrapper}>
        {/* Hero */}
        <div className={styles.hero}>
          <h2>Professionel Vinduesrengøring for Din Virksomhed</h2>
          <p>Vi tilbyder skræddersyede løsninger til kommercielle ejendomme, kontorbygninger og store facader</p>
        </div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🏢</div>
            <h3>Store Projekter</h3>
            <p>Vi håndterer projekter af alle størrelser fra små kontorer til store komplekser</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>📅</div>
            <h3>Planlagte Aftaler</h3>
            <p>Vi tilbyder regelmæssige rengøringsplaner der passer til din virksomhed</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>👔</div>
            <h3>Professionel</h3>
            <p>Erfaren og certificeret specialist med fokus på præcision og detaljer</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🕐</div>
            <h3>Uden Forstyrrelser</h3>
            <p>Vi arbejder uden for åbningstid eller på tidspunkter der passer dig</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>📊</div>
            <h3>Pålideligt</h3>
            <p>Altid punktlig og professionel med høj standard for alle opgaver</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💼</div>
            <h3>Tilpasset Løsninger</h3>
            <p>Vi udvikler rengøringsplaner der passer perfekt til dine behov</p>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h2>Vores Erhvervs Services</h2>
          <div className={styles.sectionRule}></div>

          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <h3>Kontorvinduers Rengøring</h3>
              <p>Professionel rengøring af alle kontorvinduers til dit arbejdssted eller kompleks.</p>
              <ul>
                <li>Regelmæssige serviceaftaler</li>
                <li>Høj kvalitet</li>
                <li>Diskret og effektiv</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Store Facaderengøring</h3>
              <p>Vi renser store glasfacader og kommercielle bygningers hele vinduesarealer.</p>
              <ul>
                <li>Professionelt udstyr</li>
                <li>Sikkerhedsfokus</li>
                <li>Høj kapacitet</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Solcellerengøring</h3>
              <p>Optimization af dine solpanelers effektivitet gennem professionel rengøring.</p>
              <ul>
                <li>Forøget effektivitet</li>
                <li>Længere levetid</li>
                <li>Håndplukkede resultater</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Regelmæssig Vedligeholdelse</h3>
              <p>Vi tilbyder planlagte vedligeholdelsesprogrammer for konsistent renhed året rundt.</p>
              <ul>
                <li>Fastsatte skemaer</li>
                <li>Pålideligt</li>
                <li>Omkostningseffektivt</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Nyt Byggeri & Rengøring</h3>
              <p>Specialiseret rengøring af nye bygningsarealer efter konstruktionen.</p>
              <ul>
                <li>Fjernelse af byggeskid</li>
                <li>Detaljeret arbejde</li>
                <li>Høj standard</li>
              </ul>
            </div>

            <div className={styles.serviceItem}>
              <h3>Tagrenderens</h3>
              <p>Vedligeholdelse af tagrenderier til større ejendomme og komplekser.</p>
              <ul>
                <li>Forebyggende vedligeholdelse</li>
                <li>Sikker afvanding</li>
                <li>Pålideligt</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className={styles.whySection}>
          <h2>Hvorfor Vælge Mig?</h2>
          <div className={styles.sectionRule}></div>

          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <h3>✓ Erfaring</h3>
              <p>4+ år inden for erhvervs vinduesrengøring med mange tilfredse virksomheder</p>
            </div>

            <div className={styles.whyItem}>
              <h3>✓ Pålidelighed</h3>
              <p>100% pålidelighed og professionel opførsel i alle situationer</p>
            </div>

            <div className={styles.whyItem}>
              <h3>✓ Teknologi</h3>
              <p>Moderne udstyr og teknikker for optimal effektivitet og resultat</p>
            </div>

            <div className={styles.whyItem}>
              <h3>✓ Fleksibilitet</h3>
              <p>Vi tilpasser os dine krav og arbejder uden for åbningstid hvis nødvendigt</p>
            </div>
          </div>
        </div>

        {/* All-in-One Package Section */}
        <div className={styles.packageSection}>
          <h2>Alt-i-en Erhvervspakke</h2>
          <p>
            Faa en samlet loesning hvor jeg staar for hele driften: vinduer, facader, solceller,
            vedligeholdelse og tagrenderens i en fast pakke tilpasset din virksomhed.
          </p>

          <div className={styles.packageGrid}>
            <div className={styles.packageItem}>Vinduesrengoering inde og ude</div>
            <div className={styles.packageItem}>Facaderengoering og glaspartier</div>
            <div className={styles.packageItem}>Solcellerens for bedre ydelse</div>
            <div className={styles.packageItem}>Regelmaessig vedligeholdelse</div>
            <div className={styles.packageItem}>Tagrenderens og afvandingstjek</div>
            <div className={styles.packageItem}>Fast kontakt og planlagte servicebesoeg</div>
          </div>

          <Link to="/tilbud" className={styles.packageButton}>
            Sammensæt min pakke
          </Link>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <h2>Professionel Vinduesrengøring Venter</h2>
          <p>Kontakt mig for en uforpligtende konsultation og tilbud på dit projekt</p>
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
