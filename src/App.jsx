import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { HomePage } from "./pages/HomePage"
import { ServicePage } from "./pages/ServicePage"
import { PrivatPage } from "./pages/PrivatPage"
import { ErhvervsPage } from "./pages/ErhvervsPage"
import { OfferPage } from "./pages/OfferPage"
import { AboutPage } from "./pages/AboutPage"
import { FAQPage } from "./pages/FAQPage"
import { CookiePolicyPage } from "./pages/CookiePolicyPage"
import { TermsPage } from "./pages/TermsPage"
import { CookieConsent } from "./components/CookieConsent/CookieConsent"
import { useScrollToTop } from "./hooks/useScrollToTop"
import './reset.scss'

function App() {
  useScrollToTop()

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/privat" element={<PrivatPage />} />
          <Route path="/erhverv" element={<ErhvervsPage />} />
          <Route path="/tilbud" element={<OfferPage />} />
          <Route path="/omos" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/cookiepolitik" element={<CookiePolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
      <CookieConsent />
    </>
  )
}

export default App
