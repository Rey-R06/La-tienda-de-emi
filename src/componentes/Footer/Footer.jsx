import {
  RiInstagramLine,
  RiWhatsappLine,
  RiFacebookCircleLine,
  RiPinterestLine,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import './Footer.css'

const tiendaLinks = ['Nueva Colección', 'Mujeres', 'Hombres', 'Bodywear', 'Bolsos']
const infoLinks   = ['Sobre Nosotros', 'Cómo Comprar', 'Cambios y Devoluciones', 'Cuidado de Prendas']
const legalLinks  = ['Términos y Condiciones', 'Política de Privacidad', 'Cookies']

export default function Footer() {
  return (
    <footer className="footer">

      {/* ── Newsletter ── */}
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__newsletter-inner">
            <div>
              <h3 className="footer__news-title">Únete a la familia Emi</h3>
              <p className="footer__news-sub">Primeras en saber de ofertas, lanzamientos y novedades.</p>
            </div>
            <div className="footer__news-form">
              <input
                type="email"
                className="footer__news-input"
                placeholder="Tu correo electrónico"
                aria-label="Email"
              />
              <button className="btn btn-dark">
                Suscribirse <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main ── */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">

            {/* Marca */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-circle"><span>E</span></div>
                <span className="footer__logo-name">La Tienda de Emi</span>
              </div>
              <p className="footer__brand-desc">
                Moda con alma. Cada prenda cuenta una historia, la tuya.
                Visítanos y encuentra tu estilo.
              </p>
              <div className="footer__socials">
                <a href="#" className="footer__soc" aria-label="Instagram"><RiInstagramLine /></a>
                <a href="#" className="footer__soc" aria-label="WhatsApp"><RiWhatsappLine /></a>
                <a href="#" className="footer__soc" aria-label="Facebook"><RiFacebookCircleLine /></a>
                <a href="#" className="footer__soc" aria-label="Pinterest"><RiPinterestLine /></a>
              </div>
              <div className="footer__contact">
                <div className="footer__contact-item"><RiMapPinLine /> Medellín, Colombia</div>
                <div className="footer__contact-item"><RiPhoneLine /> +57 300 000 0000</div>
                <div className="footer__contact-item"><RiMailLine /> hola@latiendadeemi.co</div>
              </div>
            </div>

            {/* Tienda */}
            <div>
              <h4 className="footer__col-title">Tienda</h4>
              <ul className="footer__links">
                {tiendaLinks.map(l => <li key={l}><a href="#" className="footer__link">{l}</a></li>)}
              </ul>
            </div>

            {/* Información */}
            <div>
              <h4 className="footer__col-title">Información</h4>
              <ul className="footer__links">
                {infoLinks.map(l => <li key={l}><a href="#" className="footer__link">{l}</a></li>)}
              </ul>
            </div>

            {/* Legal + Pagos */}
            <div>
              <h4 className="footer__col-title">Legal</h4>
              <ul className="footer__links">
                {legalLinks.map(l => <li key={l}><a href="#" className="footer__link">{l}</a></li>)}
              </ul>
              <div className="footer__payment">
                <p className="footer__payment-label">Pagos seguros con</p>
                <div className="footer__payment-badges">
                  {['Visa', 'MC', 'PSE', 'Nequi'].map(p => (
                    <span key={p} className="footer__payment-badge">{p}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom ── */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">© 2025 La Tienda de Emi. Todos los derechos reservados.</p>
            <p className="footer__made">Hecho con <span className="footer__heart">♥</span> en Medellín, Colombia</p>
          </div>
        </div>
      </div>

    </footer>
  )
}