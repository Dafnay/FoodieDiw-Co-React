function Drinks() {
  return (
    <>
      <section className="menu-header">
        <h1>Bebidas</h1>
        <p>Refrescantes bebidas para acompañar tu comida</p>
      </section>

      <div className="menu-category-nav-wrapper">
        <h4>Explorar categorías</h4>
        <ul id="menu-category-nav">
          <li><a href="/starters">Entrantes</a></li>
          <li><a href="/mains">Principales</a></li>
          <li><a href="/desserts">Postres</a></li>
          <li className="current-page"><a href="/drinks">Bebidas</a></li>
        </ul>
      </div>

      <section className="menu-items">
        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/bebida1.avif" alt="Bebida" />
          </div>
          <div className="menu-item-info">
            <h3>Vino Tinto Reserva</h3>
            <p>Selección de vinos tintos de la casa</p>
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
            <img src="/assets/bebida2.avif" alt="Bebida" />
          </div>
          <div className="menu-item-info">
            <h3>Cerveza Artesanal</h3>
            <p>Cerveza artesanal de producción local</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">4,50€</span>
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
            <img src="/assets/bebida3.avif" alt="Bebida" />
          </div>
          <div className="menu-item-info">
            <h3>Zumo Natural</h3>
            <p>Zumo recién exprimido de naranja o limón</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">3,50€</span>
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
            <img src="/assets/bebida4.avif" alt="Bebida" />
          </div>
          <div className="menu-item-info">
            <h3>Sangría de la Casa</h3>
            <p>Sangría tradicional con frutas frescas</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">8,00€</span>
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
            <img src="/assets/bebida5.avif" alt="Bebida" />
          </div>
          <div className="menu-item-info">
            <h3>Agua Mineral</h3>
            <p>Agua mineral con o sin gas</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">2,50€</span>
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

export default Drinks
