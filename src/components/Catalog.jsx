import ProductCard from './ProductCard'
import useReveal from '../hooks/useReveal'
import { products } from '../data/products'

export default function Catalog() {
  const [ref, visible] = useReveal()

  return (
    <section id="catalogo" className="section catalog">
      <div className="container">
        <header ref={ref} className={`section__head reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Catálogo</p>
          <h2>Nuestra selección</h2>
          <p className="section__sub">Fragancias seleccionadas para cada personalidad.</p>
        </header>

        <p className="catalog__swipe" aria-hidden="true">Deslizá para ver más →</p>
        <div className="catalog__grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <p className="catalog__note">
          Productos de demostración. La disponibilidad y los precios se confirman por WhatsApp.
        </p>
      </div>
    </section>
  )
}
