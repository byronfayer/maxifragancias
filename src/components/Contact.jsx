import useReveal from '../hooks/useReveal'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/products'
import { whatsappLink, generalMessage } from '../utils/whatsapp'

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contacto" className="contact">
      <div ref={ref} className={`container contact__inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Contacto</p>
        <h2>¿Buscás tu próxima fragancia?</h2>
        <p className="contact__sub">Consultanos por disponibilidad, recomendaciones y pedidos.</p>
        <a
          className="btn btn--primary btn--lg"
          href={whatsappLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribinos por WhatsApp
        </a>
        <a
          className="contact__ig"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          o seguinos en Instagram · {INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  )
}
