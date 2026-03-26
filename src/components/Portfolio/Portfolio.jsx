import { useState, useEffect, useRef } from 'react'
import { createClient } from 'contentful'
import styles from './Portfolio.module.scss'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

export const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'content',
        })

        const items = response.items.map((item) => ({
          id: item.sys.id,
          image: item.fields.billede?.fields?.file?.url || '',
          title: item.fields.title || 'Portfolio billede',
        }))

        setPortfolioItems(items)
        setError(null)
      } catch (err) {
        console.error('Contentful fetch error:', err)
        setError('Kunne ikke hente portfolio billeder')
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  if (loading) {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.rule} />
        <p className={styles.loading}>Indlæser portfolio...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.rule} />
        <p className={styles.error}>{error}</p>
      </section>
    )
  }

  if (portfolioItems.length === 0) {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.rule} />
        <p className={styles.noItems}>Ingen portfolio billeder fundet</p>
      </section>
    )
  }

  const currentItem = portfolioItems[currentIndex]

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.rule} />

      <div className={styles.carousel} ref={carouselRef}>
        <button
          className={styles.arrowButton}
          onClick={goToPrevious}
          aria-label="Forrige billede"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div
          className={styles.carouselContent}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.imageContainer}>
            <img src={currentItem.image} alt={currentItem.title} />
          </div>

          {portfolioItems.length > 1 && (
            <div className={styles.dotsContainer}>
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ''
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Billede ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>

        <button
          className={styles.arrowButton}
          onClick={goToNext}
          aria-label="Næste billede"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {portfolioItems.length > 1 && (
        <div className={styles.counter}>
          {currentIndex + 1} / {portfolioItems.length}
        </div>
      )}
    </section>
  )
}
