function Mains() {
  return (
    <>
      <section className="menu-header">
        <h1>Platos Principales</h1>
        <p>Nuestras especialidades más deliciosas para tu paladar</p>
      </section>

      <div className="menu-category-nav-wrapper">
        <h4>Explorar categorías</h4>
        <ul id="menu-category-nav">
          <li><a href="/starters">Entrantes</a></li>
          <li className="current-page"><a href="/mains">Principales</a></li>
          <li><a href="/desserts">Postres</a></li>
          <li><a href="/drinks">Bebidas</a></li>
        </ul>
      </div>

      <section className="menu-items">
        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/principal1.jpg" alt="Plato Principal" />
          </div>
          <div className="menu-item-info">
            <h3>Paella Valenciana</h3>
            <p>Arroz tradicional con mariscos frescos, pollo y azafrán</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">18,50€</span>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button className="quantity-btn minus-btn" disabled>-</button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn plus-btn">+</button>
              </div>
              <button className="add-to-cart">Añadir</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/principal2.jpg" alt="Plato Principal" />
          </div>
          <div className="menu-item-info">
            <h3>Solomillo al Roquefort</h3>
            <p>Solomillo de ternera con salsa de queso roquefort y patatas</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">22,00€</span>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button className="quantity-btn minus-btn" disabled>-</button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn plus-btn">+</button>
              </div>
              <button className="add-to-cart">Añadir</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/principal3.jpg" alt="Plato Principal" />
          </div>
          <div className="menu-item-info">
            <h3>Merluza a la Vasca</h3>
            <p>Merluza fresca con salsa verde y almejas</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">19,50€</span>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button className="quantity-btn minus-btn" disabled>-</button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn plus-btn">+</button>
              </div>
              <button className="add-to-cart">Añadir</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/principal4.jpg" alt="Plato Principal" />
          </div>
          <div className="menu-item-info">
            <h3>Lasaña Casera</h3>
            <p>Lasaña de pasta fresca con boloñesa y bechamel gratinada</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">15,00€</span>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button className="quantity-btn minus-btn" disabled>-</button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn plus-btn">+</button>
              </div>
              <button className="add-to-cart">Añadir</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/principal5.jpg" alt="Plato Principal" />
          </div>
          <div className="menu-item-info">
            <h3>Cordero Asado</h3>
            <p>Paletilla de cordero asada con hierbas aromáticas</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">24,00€</span>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button className="quantity-btn minus-btn" disabled>-</button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn plus-btn">+</button>
              </div>
              <button className="add-to-cart">Añadir</button>
            </div>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/principal6.jpg" alt="Plato Principal" />
          </div>
          <div className="menu-item-info">
            <h3>Risotto de Setas</h3>
            <p>Risotto cremoso con setas de temporada y parmesano</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">16,50€</span>
            <div className="cart-controls">
              <div className="quantity-selector">
                <button className="quantity-btn minus-btn" disabled>-</button>
                <span className="quantity-display">1</span>
                <button className="quantity-btn plus-btn">+</button>
              </div>
              <button className="add-to-cart">Añadir</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mains
