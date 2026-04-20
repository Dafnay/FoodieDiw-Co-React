function Cart() {
  return (
    <>
      <section className="cart-header">
        <h1>Mi Carrito</h1>
      </section>

      <section className="cart-container">
        <div className="cart-items">
          <div id="empty-cart" className="empty-cart">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h3>Tu carrito está vacío</h3>
            <p>Añade productos desde nuestro menú</p>
          </div>

          <div id="cart-items-list" className="cart-items-list"></div>
        </div>

        <div className="cart-summary">
          <h2>Resumen del Pedido</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span id="subtotal">0,00€</span>
          </div>
          <div className="summary-row">
            <span>Envío:</span>
            <span id="shipping">5,00€</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span id="total">0,00€</span>
          </div>
          <button id="checkout-btn" className="checkout-btn" disabled>Proceder al Pago</button>
          <button id="clear-cart-btn" className="clear-cart-btn">Vaciar Carrito</button>
        </div>
      </section>
    </>
  )
}

export default Cart
