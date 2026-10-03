import PerfumeBottle from './PerfumeBottle'
import useReveal from '../hooks/useReveal'
import { whatsappLink, productMessage } from '../utils/whatsapp'

export default function ProductCard({ product, index }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <article
      ref={ref}
      className={`card reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="card__media" style={{ '--tone': product.tone }}>
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name}, ${product.brand}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <PerfumeBottle
            shape={product.shape}
            tone={product.tone}
            id={product.id}
            label={`Frasco ilustrativo de ${product.name}`}
          />
        )}
        <span className="card__tag">Demo</span>
      </div>

      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__name">{product.name}</h3>
        <p className="card__type">{product.type}</p>
        <div className="card__foot">
          <span className="card__price">{product.price}</span>
          <a
            className="card__cta"
            href={whatsappLink(productMessage(product))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar disponibilidad de ${product.name} por WhatsApp`}
          >
            Consultar disponibilidad
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}
