import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css"
import "./styles/reset.css"
import "./styles/variables.css"
import Navbar from './componentes/NavBar/Navbar.jsx'
import Hero from './componentes/Hero/Hero.jsx'
import Products from './componentes/productos/Productos.jsx'
import Nosotros from './componentes/Nosotros/Nosotros.jsx'
import Footer from './componentes/Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Products />
    <Nosotros />
    <Footer />
  </StrictMode>,
)
