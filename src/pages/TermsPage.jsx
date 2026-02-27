import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import styles from './TermsPage.module.scss'

export const TermsPage = () => {
  return (
    <ContentWrapper
      title="Terms & Conditions"
      description="Vilkår og betingelser for brug af Glade Ruders service"
    >
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Terms & Conditions</h2>
          <p className={styles.lastUpdated}>Sidst opdateret: December 2025</p>

          <section className={styles.section}>
            <h3>1. Introduktion</h3>
            <p>
              Disse Vilkår og Betingelser ("Vilkårene") regulerer din brug af Glade Ruders hjemmeside 
              og vores vinduesrengøringsservice. Ved at bruge vores hjemmeside eller anmode om vores service, 
              accepterer du fuldt ud disse vilkår. Hvis du ikke accepterer disse vilkår, bedes du ikke bruge vores service.
            </p>
          </section>

          <section className={styles.section}>
            <h3>2. Om Os</h3>
            <p>
              Glade Ruder er et dansk vinduesrengøringsselskab, der leverer professionel rengøringsservice til både 
              private og erhvervskunder. Vi er registreret som selvstændig virksomhed med CVR: 42 56 14 79.
            </p>
            <ul>
              <li><strong>Virksomhedsnavn:</strong> Glade Ruder</li>
              <li><strong>CVR:</strong> 42 56 14 79</li>
              <li><strong>Kontakt:</strong> +45 60 10 10 80 / kontakt@gladeruder.dk</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>3. Service Beskrivelse</h3>
            <p>
              Glade Ruder tilbyder følgende vinduesrengøringsservice:
            </p>
            <ul>
              <li>Professionel vinduespudsning (privat og kommercielt)</li>
              <li>Rentvandsanlæg rengøring</li>
              <li>Solcellevask</li>
              <li>Tagrenderens</li>
              <li>Kamrens rengøring</li>
            </ul>
            <p>
              Alle priser er inkluderet moms, medmindre andet er angivet. 
              Vi forbeholder os retten til at ændre priser med rimelig varsel.
            </p>
          </section>

          <section className={styles.section}>
            <h3>4. Bestilling og Kontrakt</h3>
            
            <div className={styles.subsection}>
              <h4>4.1 Anmodning om Tilbud</h4>
              <p>
                Når du indsender en anmodning om uforpligtende tilbud gennem vores hjemmeside, 
                accepterer du at vi kan kontakte dig via telefon, email eller SMS for at præcisere dine behov.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>4.2 Tilbud og Accept</h4>
              <p>
                Vi sender et skriftligt tilbud (email eller SMS) med en gyldig periode på 14 dage. 
                Du accepterer tilbuddet ved at bekræfte det via svar på email eller SMS.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>4.3 Ændringer til Aftale</h4>
              <p>
                Hvis omfanget af arbejdet ændrer sig på dagen, vil vi informere dig og få dit samtykke 
                til eventuelt merpris inden arbejdet påbegyndes.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>4.4 Aflysning</h4>
              <p>
                <strong>Aflysning fra kundeside:</strong> Hvis du aflyst mindre end 24 timer før aftalt tid, 
                kan der blive beregnet et aflysningsgebyr på 25% af tilbuddet.
              </p>
              <p>
                <strong>Aflysning fra vores side:</strong> Vi vil give dig mindst 48 timers varsel. 
                Hvis aflysning sker på grund af vejr eller force majeure, påløber der intet gebyr.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h3>5. Betaling</h3>
            
            <div className={styles.subsection}>
              <h4>5.1 Betalingsvilkår</h4>
              <p>
                Betaling finder sted efter afslutning af arbejdet. Vi accepterer følgende betalingsmetoder:
              </p>
              <ul>
                <li>Kontant</li>
                <li>MobilePay</li>
                <li>Bankoverførsel</li>
                <li>Dankort/kreditkort (gebyr kan påløbe)</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>5.2 Momsregistrering</h4>
              <p>
                Alle priser er inkluderet dansk moms (25%). Vi er registreret for momsbetaling 
                og kan udstede momsfaktura ved behov.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>5.3 Forsinkelse af Betaling</h4>
              <p>
                Hvis betaling ikke modtages inden 14 dage efter afsluttet arbejde, kan der påløbe 
                en tilskrivningsrente på 1,3% pr. måned samt eventuelle inkassoomkostninger.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h3>6. Arbejdsudførelse</h3>
            
            <div className={styles.subsection}>
              <h4>6.1 Kvalitet</h4>
              <p>
                Vi udfører alt arbejde efter højeste professionelle standard. 
                Vi bruger kun godkendte og miljøvenlige rengøringsmidler og sikrer at arbejdet 
                udføres uden at skade eller beskadige ejendom.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>6.2 Adgang til Ejendom</h4>
              <p>
                Du skal sikre, at vi har fuld adgang til de områder, der skal rengøres. 
                Dette inkluderer låste områder, trapper, tage, og andre nødvendige steder. 
                Du er ansvarlig for at fjerne eventuelle forhindringer forud for arbejdet.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>6.3 Sikkerhed</h4>
              <p>
                Vi arbejder forsvarligt og efter gældende dansk arbejdsmiljølovgivning. 
                Vi er forsikret under arbejdet. Du skal sikre, at området er sikkert for arbejde 
                og at eventuelle tredjeparts ejendele er beskyttet.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>6.4 Vejr</h4>
              <p>
                Hvis vejrforholdene gør det usikkert at arbejde (stærk vind, snestorm, eller lign.), 
                kan vi udskyde arbejdet uden ekstra gebyrer. Vi vil kontakte dig for at aftale en ny tid.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h3>7. Reklamation og Garanti</h3>
            
            <div className={styles.subsection}>
              <h4>7.1 Reklamationsret</h4>
              <p>
                Hvis du ikke er tilfreds med kvaliteten af arbejdet, skal du give besked inden 3 dage 
                efter afslutning. Vi vil derefter vurdere reklamationen og eventuelt rette arbejdet 
                uden ekstra kostning.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>7.2 Garanti</h4>
              <p>
                Vi garanterer, at arbejdet udføres efter aftale og efter branchemæssig god praksis. 
                Vi udbyder en 100% tilfredshedsgaranti - hvis du ikke er tilfreds, fikser vi det.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>7.3 Begrænsninger</h4>
              <p>
                Vores ansvar er begrænset til værdien af det udførte arbejde. 
                Vi er ikke ansvarlige for indirekte skader eller tab som følge af arbejdet.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h3>8. Forsikring og Ansvar</h3>
            
            <div className={styles.subsection}>
              <h4>8.1 Vores Ansvar</h4>
              <p>
                Vi er forsikret for arbejdsskader og tingskader op til en vis grænse. 
                Vi er ikke ansvarlige for:
              </p>
              <ul>
                <li>Skader forårsaget af elementer udenfor vores kontrol (vejr, naturkatastrofer)</li>
                <li>Skader på personlige værdigenstande som ikke er fjernet før arbejdet</li>
                <li>Indirekte eller følgeskader</li>
                <li>Manglende resultat pga. hårdnakket snavs eller særlige forhold</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>8.2 Dit Ansvar</h4>
              <p>
                Du er ansvarlig for:
              </p>
              <ul>
                <li>Sikre at området er sikkert at arbejde i</li>
                <li>Fjerne personlige værdigenstande fra arbejdsområdet</li>
                <li>Sikre fri adgang til arbejdsområder</li>
                <li>Informere os om eventuelle særlige forhold (fx fragile objekter)</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h3>9. Persondatabehandling</h3>
            <p>
              Din behandling af persondata følger vores <a href="/cookiepolitik">Cookiepolitik</a> 
              og GDPR-lovgivningen. Vi gemmer kun de oplysninger der er nødvendige for at udføre aftalen 
              og håndtere eventuelle tvister.
            </p>
            <p>
              Dine data vil ikke blive delt med tredjepart uden dit samtykke, 
              undtagen med myndigheder hvis det kræves ved lov.
            </p>
          </section>

          <section className={styles.section}>
            <h3>10. Hæftelse og Ansvarsbegrænsning</h3>
            <p>
              Glade Ruder kan ikke holdes ansvarlig for:
            </p>
            <ul>
              <li>Skader på ejendommen på grund af dårlig vedligeholdelse før arbejdet</li>
              <li>Kemiske reaktioner mellem rengøringsmidler og specialmaterialer</li>
              <li>Skader fra tredjepart (fx dyr, mennesker)</li>
              <li>Driftsforstyrrelser eller nedetid på grund af arbejdet</li>
            </ul>
            <p>
              Vores maksimale hæftelse er begrænset til det beløb der blev betalt for det pågældende arbejde.
            </p>
          </section>

          <section className={styles.section}>
            <h3>11. Ændringer til Vilkårene</h3>
            <p>
              Vi forbeholder os retten til at ændre disse vilkår med rimelig varsel. 
              Hvis vi foretager væsentlige ændringer, vil vi informere dig via email eller på vores hjemmeside.
            </p>
          </section>

          <section className={styles.section}>
            <h3>12. Lovgivning og Tvister</h3>
            <p>
              Disse vilkår er underlagt dansk ret. 
              Eventuelle tvister skal løses ved forligsbestemmelser eller dansk domstol.
            </p>
            <p>
              Hvis der opstår en tviste, vil vi først forsøge at løse den gennem dialog. 
              Hvis det mislykkes, kan du kontakte:
            </p>
            <ul>
              <li><strong>Forbrugerombudsmanden:</strong> www.forbrug.dk</li>
              <li><strong>KKIK (Konkurrenceklager institutionen):</strong> www.kkik.dk</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>13. Kontaktinformation</h3>
            <p>
              Hvis du har spørgsmål til disse vilkår, kan du kontakte os:
            </p>
            <ul>
              <li><strong>Telefon:</strong> <a href="tel:+4560101080">+45 60 10 10 80</a></li>
              <li><strong>Email:</strong> <a href="mailto:kontakt@gladeruder.dk">kontakt@gladeruder.dk</a></li>
              <li><strong>Adresse:</strong> Se kontaktinformation på siden</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>14. Afsluttende Bestemmelser</h3>
            <p>
              Hvis en del af disse vilkår viser sig at være ugyldige eller ikke kan håndhæves, 
              betyder det ikke at hele vilkårene er ugyldige. Vi vil i så fald ændre den ugyldige del 
              for at den bliver gyldig og håndhævbar.
            </p>
            <p>
              Din manglende reaktion på en overtrædelse af vilkårene betyder ikke, 
              at vi giver afkald på retten til at håndhæve vilkårene senere.
            </p>
          </section>
        </div>
      </section>
    </ContentWrapper>
  )
}
