import PerfumeBottle from './PerfumeBottle'
import { SITE } from '../data/site'
import { whatsappLink, generalMessage } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Perfumes árabes y fragancias · Córdoba</p>
          <h1>
            Una fragancia.
            <em> Una identidad.</em>
          </h1>
          <p className="hero__lead">
            Descubrí una selección de perfumes elegidos para acompañar tu esencia.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#catalogo">
              Explorar catálogo
            </a>
            <a
              className="btn btn--ghost"
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden={SITE.heroImage ? undefined : 'true'}>
          <div className="hero__frame">
            {SITE.heroImage ? (
              <img src={SITE.heroImage} alt="Perfume en una composición de campaña" fetchpriority="high" />
            ) : (
              <>
                <div className="hero__light" />
                <div className="hero__bottle">
                  <PerfumeBottle shape="tall" tone="#33291b" id="hero" />
                </div>
                <div className="hero__plinth" />
              </>
            )}
          </div>
          <p className="hero__caption">Colección demo · N.º 01</p>
        </div>
      </div>
    </section>
  )
}
