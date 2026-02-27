import { useState } from 'react'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import styles from './FAQPage.module.scss'

export const FAQPage = () => {
  const [expanded, setExpanded] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'Hvor ofte skal jeg få vasket mine vinduer?',
      answer: 'Vi anbefaler at få vasket dine vinduer mindst 2 gange årligt for at bevare deres klarhed og forlænge deres levetid. Hyppigere vask kan være nødvendig afhængig af dit område og vejrforhold.'
    },
    {
      id: 2,
      question: 'Hvilke områder dækker I?',
      answer: 'Vi servicerer hele storbyområdet og omkringliggende kommuner. Kontakt os for at høre om vi dækker dit område, og få et uforpligtende tilbud.'
    },
    {
      id: 3,
      question: 'Hvad er prisen for vinduesrengøring?',
      answer: 'Prisen afhænger af antal vinduer, størrelse og type. Vi tilbyder individuelle tilbud baseret på dit behov. Ring eller skriv for at få et konkret prisbud.'
    },
    {
      id: 4,
      question: 'Kan I også vaske store glasfacader?',
      answer: 'Ja, vi har erfaring med både private hjem og kommercielle projekter. Vi kan handle stort og småt, fra almindelige huse til større facader og kontorbygninger.'
    },
    {
      id: 5,
      question: 'Er I forsikret under arbejdet?',
      answer: 'Ja, vi er fuldt forsikret. Vi tager sikkerhed alvorligt og arbejder efter højeste standarder for at sikre kvalitet og sikkerhed.'
    },
    {
      id: 6,
      question: 'Hvad hvis vejret er dårligt på dagen?',
      answer: 'Vi følger vejrforholdene nøje. Hvis vejret bliver dårligt, aftaler vi en ny dato med dig. Vi vil aldrig kompromittere på kvaliteten på grund af vejr.'
    },
    {
      id: 7,
      question: 'Bruger I miljøvenlige produkter?',
      answer: 'Ja, vi bruger miljøvenlige og sikre rengøringsprodukter der ikke skader dit hus eller miljøet. Din sikkerhed og miljøet er vigtig for os.'
    },
    {
      id: 8,
      question: 'Hvor længe holder en vinduesrengøring?',
      answer: 'Det afhænger af vejrforhold og dine lokale forhold. Typisk holder resultatet 3-6 måneder før du igen ønsker rengøring for bedste resultat.'
    },
    {
      id: 9,
      question: 'Kan jeg få rengøring af rammer og karme også?',
      answer: 'Ja absolut! Vi tilbyder rengøring af hele vinduesystemet inklusive rammer, karme og karnisley for et kompletu resultat.'
    },
    {
      id: 10,
      question: 'Hvordan bestiller jeg en rengøring?',
      answer: 'Du kan kontakte os via telefon, email eller vores kontaktformular. Vi svarer hurtigt og tilbyder bekvemme tider der passer til dig.'
    }
  ]

  const toggle = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <ContentWrapper
      title="Hyppigt stillede spørgsmål"
      description="Svar på dine spørgsmål om vores vinduesrengøringsservice"
    >
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`${styles.faqItem} ${expanded === faq.id ? styles.expanded : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={expanded === faq.id}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={styles.icon} 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </button>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  )
}
