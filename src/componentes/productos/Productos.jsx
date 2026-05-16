import { useState } from "react";
import { RiArrowRightLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import "./Productos.css";

const categories = [
  {
    id: "women",
    label: "Mujeres",
    tag: "Nueva Llegada",
    title: "Colección Femenina",
    desc: "Prendas que celebran la feminidad en todas sus formas. Desde lo casual hasta lo sofisticado.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    items: [
      {
        name: "Vestido Lino",
        price: "$89.900",
        img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80",
      },
      {
        name: "Blusa Seda",
        price: "$65.000",
        img: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=300&q=80",
      },
      {
        name: "Conjunto Verano",
        price: "$120.000",
        img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&q=80",
      },
    ],
  },
  {
    id: "body",
    label: "Ropa de Cuerpo",
    tag: "Tendencia",
    title: "Bodywear & Íntimos",
    desc: "Comodidad y estilo para el día a día. Prendas que se sienten tan bien como lucen.",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
    items: [
      {
        name: "Set Yoga",
        price: "$78.000",
        img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&q=80",
      },
      {
        name: "Bodysuit",
        price: "$54.000",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80",
      },
      {
        name: "Legging Comfort",
        price: "$62.000",
        img: "https://images.unsplash.com/photo-1620176043988-e39bb43d26ca?w=300&q=80",
      },
    ],
  },
  {
    id: "men",
    label: "Hombres",
    tag: "Destacado",
    title: "Colección Masculina",
    desc: "Estilo contemporáneo para el hombre moderno. Diseños limpios con materiales premium.",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80",
    items: [
      {
        name: "Camisa Oxford",
        price: "$72.000",
        img: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=300&q=80",
      },
      {
        name: "Pantalón Slim",
        price: "$95.000",
        img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&q=80",
      },
      {
        name: "Blazer Casual",
        price: "$145.000",
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80",
      },
    ],
  },
];

function ProductCard({ item }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="pcard">
      <div className="pcard__img-wrap">
        <img src={item.img} alt={item.name} loading="lazy" />
        <button
          className="pcard__heart"
          onClick={() => setLiked((v) => !v)}
          aria-label="Favorito"
        >
          {liked ? (
            <RiHeartFill style={{ color: "#e05a5a" }} />
          ) : (
            <RiHeartLine />
          )}
        </button>
        <div className="pcard__overlay">
          <button className="pcard__add">Agregar al carrito</button>
        </div>
      </div>
      <div className="pcard__info">
        <span className="pcard__name">{item.name}</span>
        <span className="pcard__price">{item.price}</span>
      </div>
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState("women");
  const cat = categories.find((c) => c.id === active);

  return (
    <section
      className="products section"
      id="products"
      style={{ background: "var(--color-white)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="products__header">
          <div>
            <span className="sec-label">Colecciones</span>
            <h2 className="sec-title">Nuestras categorías</h2>
          </div>
          <a href="#" className="btn btn-outline products__view-all">
            Ver todo <RiArrowRightLine />
          </a>
        </div>

        {/* Tabs */}
        <div className="products__tabs">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`products__tab ${active === c.id ? "products__tab--active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="products__grid" key={active}>
          {/* Featured */}
          <div className="products__featured">
            <img src={cat.img} alt={cat.title} loading="lazy" />
            <div className="products__feat-overlay" />
            <div className="products__feat-info">
              <span className="products__feat-tag">{cat.tag}</span>
              <h3 className="products__feat-title">{cat.title}</h3>
              <p className="products__feat-desc">{cat.desc}</p>
              <button className="btn btn-gold">
                Explorar <RiArrowRightLine />
              </button>
            </div>
          </div>

          {/* Mini cards */}
          <div className="products__cards">
            {cat.items.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
