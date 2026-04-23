import { useState } from 'react'

function MenuItem({ img, imgAlt, title, description, price }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={img} alt={imgAlt} />
      </div>
      <div className="menu-item-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="menu-item-footer">
        <span className="price">{price}</span>
        <div className="cart-controls">
          <div className="quantity-selector">
            <button className="quantity-btn minus-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity === 1}>-</button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-btn plus-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button className="add-to-cart">Añadir</button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
