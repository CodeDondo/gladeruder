
import { useState } from 'react'
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper'
import styles from './OfferPage.module.scss'

export const OfferPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Kombiner alle felter til en besked-streng for EmailJS
    const emailMessage = `
Navn: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}

Besked:
${formData.message}
    `.trim()
    
    // Her kan du senere tilføje EmailJS
    console.log('Message for EmailJS:', emailMessage)
    
    // Vis success besked
    setSubmitted(true)
    
    // Nulstil form efter 3 sekunder
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <ContentWrapper
      title="Uforpligtende Tilbud"
      description="Få et gratis tilbud på vores vinduesrengøringsservice"
    >
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Left side - Info */}
            <div className={styles.infoSection}>
              <h2>Hvorfor kontakte os?</h2>
              <div className={styles.infoRule} />
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📋</div>
                  <div>
                    <h3>Gratis Tilbud</h3>
                    <p>Få et uforpligtende tilbud baseret på dine specifikke behov</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>⚡</div>
                  <div>
                    <h3>Hurtig Respons</h3>
                    <p>Vi svarer inden for 24 timer på alle tilbudsanmodninger</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>💪</div>
                  <div>
                    <h3>Professionelt Arbejde</h3>
                    <p>Erfarne og certificerede rengøringsspecialister til dine vinduer</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✅</div>
                  <div>
                    <h3>Fleksible Løsninger</h3>
                    <p>Vi tilpasser vores service til dit budget og tidsplan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className={styles.formSection}>
              <h2>Send os en besked</h2>
              <p className={styles.formSubtitle}>Udfyld formularen nedenfor, og vi kontakter dig snarest</p>

              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Tak for din henvendelse!</h3>
                  <p>Vi vender tilbage til dig snarest muligt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Navn *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dit fulde navn"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="din@email.dk"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+45 xx xx xx xx"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Besked *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Fortæl os om dine vinduesrengøringsbehov..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Send Tilbudsanmodning</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  )
}
