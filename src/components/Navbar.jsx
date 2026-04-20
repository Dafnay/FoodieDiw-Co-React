function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/assets/logo.png" className="navbar-logo-img" alt="Logo de Foodie Diw&Co" />
          <a href="/">Foodie Diw&amp;Co</a>
        </div>
        <button className="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="navbar-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about-us">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li>
            <a href="/cart" className="cart-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-badge">0</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
