import { RiArrowRightLine, RiStarFill } from 'react-icons/ri'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-text" aria-hidden="true">EMI</div>

      <div className="hero__inner container">
        {/* Contenido */}
        <div className="hero__content">
          <div className="hero__badge">
            <RiStarFill />
            Nueva Colección 2025
          </div>

          <h1 className="hero__title">
            Viste tu<br />
            <em>mejor versión</em>
          </h1>

          <p className="hero__sub">
            Prendas curadas con amor para mujeres y hombres que saben que
            la moda es una forma de expresión. Descubre nuestra colección exclusiva.
          </p>

          <div className="hero__btns">
            <a href="#products" className="btn btn-dark">
              Ver Colección <RiArrowRightLine />
            </a>
            <a href="#promotions" className="btn btn-outline">
              Promociones
            </a>
          </div>

        </div>

        {/* Visual */}
        <div className="hero__visual">
          <div className="hero__img-wrap">
            <img
              src="/hero.jpg"
              alt="Moda femenina elegante"
            />
            <div className="hero__card">
              <div className="hero__card-dot" />
              <div>
                <span className="hero__card-title">Tendencia del momento</span>
                <span className="hero__card-sub">Colección Primavera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}