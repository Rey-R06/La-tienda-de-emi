import { useState, useEffect } from 'react'
import { RiSearchLine, RiUserLine, RiShoppingBagLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'

const links = [
  { label: 'categoria 1', href: '#products' },
  { label: 'categoria 2', href: '#promotions' },
  { label: 'categoria 3',      href: '#bags' },
  { label: 'categoria 4',    href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          <a href="#" className="navbar__logo">
            <div className="navbar__logo-circle"><span>E</span></div>
            <span className="navbar__logo-name">La Tienda de Emi</span>
          </a>

          <nav className="navbar__nav">
            {links.map(l => (
              <a key={l.label} href={l.href} className="navbar__link">{l.label}</a>
            ))}
          </nav>

          <div className="navbar__actions">
            <button className="navbar__icon-btn" aria-label="Buscar"><RiSearchLine /></button>
            <button className="navbar__hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Menú">
              {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={close}>{l.label}</a>
          ))}
        </nav>
        <p className="navbar__mobile-tagline">Moda con alma · Estilo con propósito</p>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={close} />}
    </>
  )
}