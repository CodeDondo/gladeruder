import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Mail from "../../assets/Mail.svg";
import Phone from "../../assets/Phone.svg";
import styles from "./NavBar.module.scss";


export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(null); // 'mail' | 'phone' | null

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = (type) => {
    setShowModal(type);
  };
  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <NavLink to="/" onClick={closeMenu}>
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Mobile kontakt ikoner */}
        <div className={styles.mobileIcons}>
          <button className={styles.iconBtn} onClick={() => openModal('mail')} aria-label="Email">
            <img src={Mail} alt="Email" />
          </button>
          <button className={styles.iconBtn} onClick={() => openModal('phone')} aria-label="Telefon">
            <img src={Phone} alt="Telefon" />
          </button>
        </div>

        <ul className={styles.navLinks}>
          <li><NavLink to="/">Hjem</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/tilbud">Uforpligtende tilbud</NavLink></li>
          <li><NavLink to="/omos">Om os</NavLink></li>
        </ul>

        <button
          className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>Hjem</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/tilbud" onClick={closeMenu}>Uforpligtende tilbud</NavLink></li>
            <li><NavLink to="/omos" onClick={closeMenu}>Om os</NavLink></li>
          </ul>
        </div>

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

        {/* Modal */}
        {showModal && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              {showModal === 'mail' && (
                <>
                  <h3>Email</h3>
                  <p><a href="mailto:kontakt@gladeruder.dk">kontakt@gladeruder.dk</a></p>
                </>
              )}
              {showModal === 'phone' && (
                <>
                  <h3>Telefon</h3>
                  <p><a href="tel:+4560101080">+45 60 10 10 80</a></p>
                </>
              )}
              <button className={styles.closeModalBtn} onClick={closeModal}>Luk</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
