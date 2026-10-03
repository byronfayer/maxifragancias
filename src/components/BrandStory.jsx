import PerfumeBottle from './PerfumeBottle'
import useReveal from '../hooks/useReveal'
import { SITE } from '../data/site'

export default function BrandStory() {
  const [edRef, edVisible] = useReveal()
  const [abRef, abVisible] = useReveal()

  return (
    <>
      <section className="editorial" aria-label="Editorial">
        <div ref={edRef} className={`container editorial__grid reveal ${edVisible ? 'is-visible' : ''}`}>
          <div className="editorial__image">
            {SITE.editorialImage ? (
              <img src={SITE.editorialImage} alt="" loading="lazy" decoding="async" />
            ) : (
              <div className="editorial__art" aria-hidden="true">
                <PerfumeBottle shape="round" tone="#3a2a2a" id="editorial" />
              </div>
            )}
          </div>
          <blockquote className="editorial__quote">
            <p>
              El perfume es mucho más que una fragancia.
              <em> Es aquello que permanece incluso después de partir.</em>
            </p>
          </blockquote>
        </div>
      </section>

      <section id="nosotros" className="section about">
        <div ref={abRef} className={`container about__grid reveal ${abVisible ? 'is-visible' : ''}`}>
          <div>
            <p className="eyebrow">Nosotros</p>
            <h2>La esencia de Maxi Fragancias</h2>
          </div>
          <div className="about__text">
            <p>
              Un emprendimiento creado para acercarte fragancias que transmiten personalidad, estilo y
              autenticidad. Una selección cuidada, atención personalizada y una experiencia de compra
              sencilla.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
