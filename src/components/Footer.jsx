import { INSTAGRAM_URL } from '../data/products'
import { SITE } from '../data/site'
import { whatsappLink, generalMessage } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src={`${import.meta.env.BASE_URL}img/logo-256.webp`}
            width="96"
            height="96"
            alt="Logo de Maxi Fragancias"
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="logo logo--footer">
              MAXI<span> FRAGANCIAS</span>
            </p>
            <p className="footer__city">{SITE.city}</p>
          </div>
        </div>
        <nav className="footer__links" aria-label="Redes y contacto">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Maxi Fragancias. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
