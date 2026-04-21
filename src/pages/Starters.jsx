function Starters() {
  return (
    <>
      <section className="menu-header">
        <h1>Entrantes</h1>
        <p>Comienza tu experiencia gastronómica con nuestras deliciosas entradas</p>
      </section>

      <div className="menu-category-nav-wrapper">
        <h4>Explorar categorías</h4>
        <ul id="menu-category-nav">
          <li className="current-page"><a href="/starters">Entrantes</a></li>
          <li><a href="/mains">Principales</a></li>
          <li><a href="/desserts">Postres</a></li>
          <li><a href="/drinks">Bebidas</a></li>
        </ul>
      </div>

      <section className="menu-items">
        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/entrante1.avif" alt="Entrante" />
          </div>
          <div className="menu-item-info">
            <h3>Croquetas Caseras</h3>
            <p>Croquetas cremosas de jamón ibérico elaboradas de forma artesanal</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">8,50€</span>
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
            <img src="/assets/entrante2.avif" alt="Entrante" />
          </div>
          <div className="menu-item-info">
            <h3>Ensalada de la Huerta</h3>
            <p>Verduras frescas de temporada con vinagreta casera</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">7,00€</span>
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
            <img src="/assets/entrante3.avif" alt="Entrante" />
          </div>
          <div className="menu-item-info">
            <h3>Tabla de Quesos</h3>
            <p>Selección de quesos artesanales con mermelada y frutos secos</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">12,00€</span>
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
            <img src="/assets/entrante4.avif" alt="Entrante" />
          </div>
          <div className="menu-item-info">
            <h3>Gazpacho Andaluz</h3>
            <p>Sopa fría de tomate con verduras frescas del día</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">6,50€</span>
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

export default Starters
