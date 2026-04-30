import { createContext, useCallback, useContext, useState } from 'react'

const CartContext = createContext()

const parsePrice = (priceStr) => parseFloat(priceStr.replace('€', '').replace(',', '.'))

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = useCallback(({ title, price, quantity }) => {
    const numPrice = parsePrice(price)
    setItems(prev => {
      const existing = prev.find(item => item.title === title)
      if (existing) {
        return prev.map(item =>
          item.title === title ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prev, { title, price: numPrice, quantity }]
    })
  }, [])

  const removeFromCart = useCallback((title) => {
    setItems(prev => prev.filter(item => item.title !== title))
  }, [])

  const updateQuantity = useCallback((title, quantity) => {
    if (quantity < 1) return
    setItems(prev => prev.map(item =>
      item.title === title ? { ...item, quantity } : item
    ))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? 5 : 0
  const total = subtotal + shipping

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, shipping, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
