
import { useState } from 'react'
import emailjs from '@emailjs/browser'
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
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSending(true)

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Udfyld venligst alle felter.')
      setIsSending(false)
      return
    }

    try {
      const time = new Date().toLocaleString('da-DK', {
        dateStyle: 'short',
        timeStyle: 'short'
      })

      const templateParams = {
        name: formData.name,
        time,
        message: `Email: ${formData.email}\nTelefon: ${formData.phone}\n\nBesked:\n${formData.message}`,
        reply_to: formData.email,
        from_name: formData.name,
        from_email: formData.email
      }

      await emailjs.send(
        'service_hm0e6y2',
        'template_t948tc7',
        templateParams,
        'HIL8xam19sUgrelLb'
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('EmailJS fejl:', err)
      setError('Kunne ikke sende beskeden. Prøv igen om lidt.')
    } finally {
      setIsSending(false)
    }
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
                    <span>{isSending ? 'Sender...' : 'Send Tilbudsanmodning'}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 10H17M17 10L12 5M17 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {error && <p>{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </ContentWrapper>
  )
}
