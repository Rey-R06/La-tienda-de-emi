import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri'
import './Nosotros.css'

export default function Team() {
  return (
    <section className="team section" id="team" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="team__grid">

          {/* Texto */}
          <div className="team__story">
            <span className="sec-label">Nuestra historia</span>
            <h2 className="team__title">
              Conoce a<br /><em>la jefa</em>
            </h2>
            <div className="divider-line" />
            <p className="team__text">
              Soy Emi, fundadora de La Tienda de Emi. Lo que comenzó como una
              pasión por la moda se convirtió en una empresa llena de amor,
              dedicación y muchísimo estilo.
            </p>
            <p className="team__text">
              Cada prenda ha sido seleccionada con cuidado para mujeres y hombres
              reales que quieren verse increíbles sin gastar una fortuna.
            </p>
            <blockquote className="team__quote">
              "La moda no es solo ropa, es una forma de decirle al mundo
              quién eres antes de abrir la boca."
            </blockquote>
            <div className="team__socials">
              <button className="team__soc-btn" aria-label="Instagram"><RiInstagramLine /></button>
              <button className="team__soc-btn" aria-label="WhatsApp"><RiWhatsappLine /></button>
            </div>
          </div>

          {/* Foto */}
          <div className="team__photo-area">
            <div className="team__photo">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Emi, fundadora"
                loading="lazy"
              />
              <div className="team__photo-badge">
                <div className="team__badge-dot" />
                <span>Fundadora & Directora Creativa</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}