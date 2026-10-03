import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import BrandStory from './components/BrandStory'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { whatsappLink, generalMessage } from './utils/whatsapp'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#catalogo">Saltar al contenido</a>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <BrandStory />
        <Contact />
      </main>
      <Footer />
      <a
        className="wa-float"
        href={whatsappLink(generalMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp"
      >
        WhatsApp
      </a>
    </>
  )
}
