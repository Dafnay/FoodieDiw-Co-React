import { useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'

const fmt = (num) => num.toFixed(2).replace('.', ',') + '€'

function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, shipping, total } = useCart()
  const clearDialogRef = useRef(null)
  const checkoutDialogRef = useRef(null)
  const clearCartRef = useRef(clearCart)
  const totalRef = useRef(total)

  useEffect(() => { clearCartRef.current = clearCart }, [clearCart])
  useEffect(() => { totalRef.current = total }, [total])

  useEffect(() => {
    const $ = window.$

    const clearEl = document.createElement('div')
    clearEl.innerHTML = '<p>¿Estás seguro de que quieres vaciar el carrito?</p>'
    document.body.appendChild(clearEl)
    clearDialogRef.current = clearEl

    const checkoutEl = document.createElement('div')
    document.body.appendChild(checkoutEl)
    checkoutDialogRef.current = checkoutEl

    $(clearEl).dialog({
      autoOpen: false,
      modal: true,
      title: 'Vaciar carrito',
      width: 350,
      buttons: {
        'Confirmar': function () {
          clearCartRef.current()
          $(this).dialog('close')
        },
        'Cancelar': function () {
          $(this).dialog('close')
        },
      },
    })

    $(checkoutEl).dialog({
      autoOpen: false,
      modal: true,
      title: 'Confirmar pedido',
      width: 350,
      buttons: {
        'Confirmar': function () {
          clearCartRef.current()
          $(this).dialog('close')
        },
        'Cancelar': function () {
          $(this).dialog('close')
        },
      },
    })

    return () => {
      $(clearEl).dialog('destroy')
      clearEl.remove()
      $(checkoutEl).dialog('destroy')
      checkoutEl.remove()
    }
  }, [])

  const handleClearCart = () => window.$(clearDialogRef.current).dialog('open')

  const handleCheckout = () => {
    checkoutDialogRef.current.innerHTML = `<p>Total del pedido: <strong>${fmt(totalRef.current)}</strong></p><p>¿Confirmas que quieres proceder al pago?</p>`
    window.$(checkoutDialogRef.current).dialog('open')
  }

  return (
    <>
      <section className="cart-header">
        <h1>Mi Carrito</h1>
      </section>

      <section className="cart-container">
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h2>Tu carrito está vacío</h2>
              <p>Añade productos desde nuestro menú</p>
            </div>
          ) : (
            <div className="cart-items-list active">
              {items.map(item => (
                <div key={item.title} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.title}</span>
                    <span className="cart-item-price">{fmt(item.price)} / ud.</span>
                  </div>
                  <div className="cart-item-right">
                    <div className="cart-item-quantity">
                      <button className="cart-qty-btn" onClick={() => updateQuantity(item.title, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                      <span className="cart-qty-display">{item.quantity}</span>
                      <button className="cart-qty-btn" onClick={() => updateQuantity(item.title, item.quantity + 1)}>+</button>
                    </div>
                    <span className="cart-item-total">{fmt(item.price * item.quantity)}</span>
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.title)} title="Eliminar">
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-summary">
          <h2>Resumen del Pedido</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>{fmt(subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Envío:</span>
            <span>{fmt(shipping)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>{fmt(total)}</span>
          </div>
          <button className="checkout-btn" disabled={items.length === 0} onClick={handleCheckout}>Proceder al Pago</button>
          <button className="clear-cart-btn" onClick={handleClearCart} disabled={items.length === 0}>Vaciar Carrito</button>
        </div>
      </section>
    </>
  )
}

export default Cart
