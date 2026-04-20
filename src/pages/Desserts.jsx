function Desserts() {
  return (
    <>
      <section className="menu-header">
        <h1>Postres</h1>
        <p>El dulce final perfecto para tu comida</p>
      </section>

      <div className="menu-category-nav-wrapper">
        <h4>Explorar categorías</h4>
        <ul id="menu-category-nav">
          <li><a href="/starters">Entrantes</a></li>
          <li><a href="/mains">Principales</a></li>
          <li className="current-page"><a href="/desserts">Postres</a></li>
          <li><a href="/drinks">Bebidas</a></li>
        </ul>
      </div>

      <section className="menu-items">
        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/postre1.jpg" alt="Postre" />
          </div>
          <div className="menu-item-info">
            <h3>Tarta de Queso</h3>
            <p>Cheesecake cremoso con base de galleta y coulis de frutos rojos</p>
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

        <div className="menu-item">
          <div className="menu-item-image">
            <img src="/assets/postre2.jpg" alt="Postre" />
          </div>
          <div className="menu-item-info">
            <h3>Tiramisú Italiano</h3>
            <p>Postre tradicional italiano con mascarpone y café</p>
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
            <img src="/assets/postre3.jpg" alt="Postre" />
          </div>
          <div className="menu-item-info">
            <h3>Brownie con Helado</h3>
            <p>Brownie de chocolate caliente con helado de vainilla</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">6,00€</span>
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
            <img src="/assets/postre4.jpg" alt="Postre" />
          </div>
          <div className="menu-item-info">
            <h3>Flan Casero</h3>
            <p>Flan tradicional con caramelo líquido hecho en casa</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">5,00€</span>
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
            <img src="/assets/postre5.jpg" alt="Postre" />
          </div>
          <div className="menu-item-info">
            <h3>Tarta de Chocolate</h3>
            <p>Tarta de chocolate negro con ganache y decoración de fresas</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">7,50€</span>
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
            <img src="/assets/postre6.webp" alt="Postre" />
          </div>
          <div className="menu-item-info">
            <h3>Crema Catalana</h3>
            <p>Crema catalana tradicional con azúcar caramelizado</p>
          </div>
          <div className="menu-item-footer">
            <span className="price">5,50€</span>
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

export default Desserts
