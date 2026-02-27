import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import styles from './CookiePolicyPage.module.scss'

export const CookiePolicyPage = () => {
  return (
    <ContentWrapper
      title="Cookiepolitik"
      description="Hvordan vi behandler cookies og dine data i overensstemmelse med GDPR"
    >
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Vores Cookiepolitik</h2>
          <p className={styles.lastUpdated}>Sidst opdateret: December 2025</p>

          <section className={styles.section}>
            <h3>Hvad er cookies?</h3>
            <p>
              Cookies er små tekstfiler, der lagres på din enhed (computer, tablet eller smartphone) når du besøger vores hjemmeside.
              De hjælper os med at forbedre dit besøg og give dig en bedre oplevelse.
            </p>
          </section>

          <section className={styles.section}>
            <h3>Hvorfor bruger vi cookies?</h3>
            <p>Vi bruger cookies til følgende formål:</p>
            <ul>
              <li><strong>Nødvendige funktioner:</strong> For at hjemmesiden fungerer korrekt (logging, sikkerhed, præferencer)</li>
              <li><strong>Statistik og analyse:</strong> For at forstå hvordan du bruger vores hjemmeside (Google Analytics)</li>
              <li><strong>Marketing:</strong> For at vise dig relevante annoncer baseret på dine interesser</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>Typer af Cookies</h3>
            
            <div className={styles.cookieType}>
              <h4>1. Nødvendige Cookies (Obligatorisk)</h4>
              <p>
                Disse cookies er vigtige for hjemmesidens basisfunktioner. Uden dem kan hjemmesiden ikke fungere korrekt.
                Du kan ikke fravælge disse cookies, da de er påkrævet for at hjemmesiden virker.
              </p>
              <ul>
                <li>Session cookies for login og sikkerhed</li>
                <li>Cookies for brugerindstillinger og præferencer</li>
                <li>Cookies for at sikre korrekt funktionalitet</li>
              </ul>
            </div>

            <div className={styles.cookieType}>
              <h4>2. Statistik Cookies (Google Analytics)</h4>
              <p>
                Disse cookies hjælper os med at forstå hvordan besøgende bruger vores hjemmeside.
                Vi bruger Google Analytics til at indsamle anonym data om:
              </p>
              <ul>
                <li>Antal besøgende og deres geografiske placering</li>
                <li>Hvilke sider der besøges og hvor længe</li>
                <li>Hvilke enheder og browsere der bruges</li>
                <li>Hvordan du navigerer gennem hjemmesiden</li>
              </ul>
              <p>
                Denne data hjælper os med at optimere hjemmesiden og forbedre brugeroplevelsen.
                Data er fuldstændigt anonymiseret og kan ikke spores tilbage til dig personligt.
              </p>
            </div>

            <div className={styles.cookieType}>
              <h4>3. Marketing Cookies</h4>
              <p>
                Disse cookies bruges til at spore dine aktiviteter på tværs af hjemmesider,
                så vi kan vise dig relevante annoncer. De hjælper os også med at måle effektiviteten af vores annoncekampagner.
              </p>
              <ul>
                <li>Cookies fra tredjepartsannoncer</li>
                <li>Cookies for at måle kampagneperformance</li>
                <li>Cookies for retargeting og personaliserede annoncer</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h3>GDPR Og Dine Rettigheder</h3>
            <p>
              Vi respekterer fuldt ud EU's General Data Protection Regulation (GDPR) og dansk databeskyttelseslovgivning.
            </p>
            
            <div className={styles.rights}>
              <div className={styles.rightItem}>
                <h4>Ret til Samtykke</h4>
                <p>
                  Du skal give samtykke før vi kan bruge cookies (undtagen nødvendige cookies).
                  Du kan give eller trække dit samtykke tilbage når som helst.
                </p>
              </div>

              <div className={styles.rightItem}>
                <h4>Ret til Transparens</h4>
                <p>
                  Vi fortæller dig præcis hvilke cookies vi bruger, hvad de gør, og hvordan vi behandler dine data.
                </p>
              </div>

              <div className={styles.rightItem}>
                <h4>Ret til Adgang</h4>
                <p>
                  Du kan anmode om adgang til de data vi har lagret om dig.
                  Kontakt os på vores kontaktformular for at anmode om en kopi.
                </p>
              </div>

              <div className={styles.rightItem}>
                <h4>Ret til Sletning</h4>
                <p>
                  Du kan anmode om at dine personlige data bliver slettet.
                  Nogle data kan være lovpligtige at bevare i en vis periode.
                </p>
              </div>

              <div className={styles.rightItem}>
                <h4>Ret til at Trække Samtykke Tilbage</h4>
                <p>
                  Du kan trække dine cookiesamtykker tilbage når som helst ved at klikke på 🍪 knappen
                  i nederste højre hjørne af siden.
                </p>
              </div>

              <div className={styles.rightItem}>
                <h4>Ret til at Blive Glemt</h4>
                <p>
                  Du kan anmode om at blive "glemt" og at alle dine data bliver slettet fra vores systemer
                  (undtagen data vi lovligt er forpligtet til at gemme).
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3>Hvordan administrerer du cookies?</h3>
            <p>Du har flere måder at administrere dine cookiesamtykker på:</p>
            
            <div className={styles.management}>
              <div className={styles.managementItem}>
                <h4>1. Cookie Banneret</h4>
                <p>
                  Når du først besøger siden, vil du se et cookiebanner.
                  Her kan du vælge at acceptere alle, afvise alle, eller gå til indstillinger for granulær kontrol.
                </p>
              </div>

              <div className={styles.managementItem}>
                <h4>2. Cookie Knappen</h4>
                <p>
                  Klik på 🍪 knappen i nederste højre hjørne af siden for at åbne cookieindstillingerne igen
                  og administrere dine samtykker på ethvert tidspunkt.
                </p>
              </div>

              <div className={styles.managementItem}>
                <h4>3. Browser Indstillinger</h4>
                <p>
                  Du kan også kontrollere cookies direkte i din browser:
                </p>
                <ul>
                  <li><strong>Chrome:</strong> Indstillinger → Privatliv og sikkerhed → Cookies og andre webstedsdata</li>
                  <li><strong>Firefox:</strong> Præferencer → Privatliv &amp; sikkerhed → Cookies og websitedata</li>
                  <li><strong>Safari:</strong> Præferencer → Privatliv → Cookies og websitedata</li>
                  <li><strong>Edge:</strong> Indstillinger → Privatliv → Cookies og andre webstedsdata</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3>Tredjepartstjenester</h3>
            <p>Vi bruger følgende tredjepartstjenester som kan sætte cookies:</p>
            
            <div className={styles.services}>
              <div className={styles.service}>
                <h4>Google Analytics</h4>
                <p>
                  Brugt til at analysere webstedsstatistik. 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Læs Googles privatlivspolitik</a>
                </p>
              </div>

              <div className={styles.service}>
                <h4>Google Ads / Gtag</h4>
                <p>
                  Brugt til online marketing og conversion tracking.
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Læs Googles privatlivspolitik</a>
                </p>
              </div>

              <div className={styles.service}>
                <h4>Facebook Pixel</h4>
                <p>
                  Brugt til at måle kampagneeffektivitet og retargeting.
                  <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Læs Facebooks cookiepolitik</a>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3>Opbevaring af Data</h3>
            <p>
              Vi gemmer dine data kun så længe det er nødvendigt for det formål det blev indsamlet til.
              Typisk gælder følgende:
            </p>
            <ul>
              <li><strong>Nødvendige cookies:</strong> Slettes når du lukker browseren (session) eller efter max 12 måneder</li>
              <li><strong>Analytics data:</strong> Opbevares i maximum 26 måneder</li>
              <li><strong>Marketing cookies:</strong> Opbevares i maximum 24 måneder</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>Ændringer til denne Policy</h3>
            <p>
              Vi forbeholder os retten til at opdatere denne cookiepolitik når som helst.
              Hvis vi foretager væsentlige ændringer, vil vi underrette dig på denne side eller gennem email.
              Din fortsatte brug af hjemmesiden betyder, at du accepterer denne cookiepolitik.
            </p>
          </section>

          <section className={styles.section}>
            <h3>Kontakt Os</h3>
            <p>
              Hvis du har spørgsmål omkring vores brug af cookies eller denne politikken,
              kan du kontakte os via vores <a href="/tilbud">kontaktformular</a> eller skrive til os direkte.
            </p>
            <p>
              Hvis du har en klage over vores behandling af cookies eller personlige data,
              kan du også kontakte Danmarks statslige it- og telestyrelse (SITES):
              <br />
              <strong>E-mail:</strong> <a href="mailto:dt@datainspektionen.dk">dt@datainspektionen.dk</a>
            </p>
          </section>
        </div>
      </section>
    </ContentWrapper>
  )
}
