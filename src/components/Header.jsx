import { useEffect, useState } from 'react'
import { whatsappLink, generalMessage } from '../utils/whatsapp'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="logo" aria-label="Maxi Fragancias, inicio">
          <img
            className="logo__mark"
            src={`${import.meta.env.BASE_URL}img/logo-256.webp`}
            width="44"
            height="44"
            alt=""
            decoding="async"
          />
          <span className="logo__text">
            MAXI<span> FRAGANCIAS</span>
          </span>
        </a>

        <nav
          id="menu-principal"
          className={`nav ${open ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="nav__wa"
            href={whatsappLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
