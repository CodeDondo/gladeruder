import { useState, useEffect } from 'react'
import styles from './CookieConsent.module.scss'

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  // Check if user has already given consent
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent')
    if (!savedConsent) {
      setShowConsent(true)
    } else {
      try {
        const parsedConsent = JSON.parse(savedConsent)
        const normalizedConsent = {
          necessary: true,
          analytics: Boolean(parsedConsent.analytics),
          marketing: Boolean(parsedConsent.marketing),
        }

        setConsent(normalizedConsent)
        loadGtagIfConsented(normalizedConsent)
      } catch {
        setShowConsent(true)
      }
    }
  }, [])

  const loadGtagIfConsented = (consentData) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return
    }

    window.gtag('consent', 'update', {
      analytics_storage: consentData.analytics ? 'granted' : 'denied',
      ad_storage: consentData.marketing ? 'granted' : 'denied',
      ad_user_data: consentData.marketing ? 'granted' : 'denied',
      ad_personalization: consentData.marketing ? 'granted' : 'denied',
    })
  }

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveConsent(newConsent)
  }

  const handleRejectAll = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    saveConsent(newConsent)
  }

  const handleSaveSettings = () => {
    saveConsent(consent)
  }

  const saveConsent = (consentData) => {
    localStorage.setItem('cookieConsent', JSON.stringify(consentData))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setConsent(consentData)
    loadGtagIfConsented(consentData)
    setShowConsent(false)
    setShowSettings(false)
  }

  const handleRevokeConsent = () => {
    localStorage.removeItem('cookieConsent')
    localStorage.removeItem('cookieConsentDate')
    setShowConsent(true)
    setShowSettings(false)
  }

  const toggleConsent = (type) => {
    if (type !== 'necessary') {
      setConsent({
        ...consent,
        [type]: !consent[type],
      })
    }
  }

  return (
    <>
      {/* Consent Banner */}
      {showConsent && (
        <div className={styles.consentBanner}>
          <div className={styles.consentContent}>
            <div className={styles.consentText}>
              <h3>Vi bruger cookies</h3>
              <p>
                Vi bruger cookies til at forbedre dit besøg og sikre at du får det bedst mulige oplevelse på vores hjemmeside.
                Ved at acceptere cookies hjælper du os med at forstå hvordan du bruger siden, så vi kan gøre den bedre.
              </p>
            </div>

            <div className={styles.consentButtons}>
              <button
                className={styles.buttonSecondary}
                onClick={() => setShowSettings(!showSettings)}
              >
                Indstillinger
              </button>
              <button
                className={styles.buttonSecondary}
                onClick={handleRejectAll}
              >
                Afvis alle
              </button>
              <button
                className={styles.buttonPrimary}
                onClick={handleAcceptAll}
              >
                Accepter alle
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className={styles.settingsPanel}>
              <h4>Cookie Indstillinger</h4>

              <div className={styles.cookieOption}>
                <div className={styles.optionHeader}>
                  <label>
                    <input
                      type="checkbox"
                      checked={consent.necessary}
                      disabled
                    />
                    <span>Nødvendige Cookies (påkrævet)</span>
                  </label>
                  <span className={styles.required}>Obligatorisk</span>
                </div>
                <p className={styles.description}>
                  Nødvendige cookies hjælper med at gøre en hjemmeside brugbar ved at aktivere grundlæggende funktioner som sidenavigation og adgang til sikre områder på hjemmesiden. Hjemmesiden kan ikke fungere korrekt uden disse cookies.
                </p>
              </div>

              <div className={styles.cookieOption}>
                <div className={styles.optionHeader}>
                  <label>
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={() => toggleConsent('analytics')}
                    />
                    <span>Statistik Cookies</span>
                  </label>
                </div>
                <p className={styles.description}>
                  Statistik cookies hjælper ejere af hjemmesider med at forstå hvordan besøgende interagerer med hjemmesiderne ved at indsamle og rapportere information anonym. Med Google Analytics kan vi se hvordan du navigerer på siden.
                </p>
              </div>

              <div className={styles.cookieOption}>
                <div className={styles.optionHeader}>
                  <label>
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={() => toggleConsent('marketing')}
                    />
                    <span>Marketing Cookies</span>
                  </label>
                </div>
                <p className={styles.description}>
                  Marketing cookies bruges til at spore besøgende på tværs af hjemmesider. Hensigten er at vise annoncer som er relevante og interessante for den enkelte bruger.
                </p>
              </div>

              <div className={styles.settingsButtons}>
                <button
                  className={styles.buttonSecondary}
                  onClick={() => setShowSettings(false)}
                >
                  Tilbage
                </button>
                <button
                  className={styles.buttonPrimary}
                  onClick={handleSaveSettings}
                >
                  Gem Indstillinger
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Revoke Consent Button (bottom right corner) */}
      {!showConsent && (
        <button
          className={styles.revokeButton}
          onClick={handleRevokeConsent}
          title="Administrer cookie-samtykke"
        >
          🍪
        </button>
      )}
    </>
  )
}
