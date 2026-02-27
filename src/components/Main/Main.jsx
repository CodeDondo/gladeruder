import Intro from '../../assets/Intro.mp4'
import Heart from '../../assets/Heart.svg'
import Award from '../../assets/Award.svg'
import Shield from '../../assets/Shield.svg'
import styles from './Main.module.scss'
import { Anmeldelser } from '../Anmeldelser/Anmeldelser.jsx'
import { Portfolio } from '../Portfolio/Portfolio.jsx'
import { FAQ } from '../FAQ/FAQ.jsx'

export const Main = () => {
  return (
    <main>
      <div className={styles.introVideo}>
        <video src={Intro} autoPlay loop muted></video>
      </div>
      <section className={styles.background}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <figure>
            <img src={Heart} alt="hjerte" />
          </figure>
          <figcaption>
            <h2>Familietid</h2>
            <p>
              Vinduespudsning kan være en hovedpine. Adskillige timer brugt og så klasker børnene
              fingrene på ruden, hunden gnider snuden op af eller noget tredje. Lad Glade Ruder sørge
              for dine ruder, så du kan sørge for familietid.
            </p>
          </figcaption>
        </div>

        <div className={styles.card}>
          <figure>
            <img src={Award} alt="award" />
          </figure>
          <figcaption>
            <h2>Kvalitet & Service</h2>
            <p>
              Hos Glade Ruder vægter vi højt, at vi gør dig tryg. Vi rådgiver omkring den bedste
              løsning til dit behov, sørger for at holde dig informeret dagen før vi kommer &
              sørger for at dine vinduer står knivskarpt. Vi er aldrig længere væk end et telefonopkald,
              det er vigtigt for os at vi står til rådighed for vores kunder.
            </p>
          </figcaption>
        </div>

        <div className={styles.card}>
          <figure>
            <img src={Shield} alt="shield" />
          </figure>
          <figcaption>
            <h2>Forlæng Levetiden</h2>
            <p>
              Ikke nok med at dine vinduer ser flottere ud, så forlænger du også levetiden på dine
              vinduer, ved ordentlig vedligeholdelse. Hvis vinduer ikke bliver pudset i et optimalt
              interval, forkorter du levetiden og forøger risikoen for punktering, skimmel, alger m.m.
            </p>
          </figcaption>
        </div>
      </div>
    </section>
    <section>
      <Anmeldelser />
    </section>
    <section>
      <Portfolio />
    </section>
    <section>
      <FAQ />
    </section>
    </main>
  )
}
