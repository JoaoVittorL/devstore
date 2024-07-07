'use client'
import { createContext, useContext, useState } from 'react'
interface CartItem {
  productId: number
  quantity: number
}
interface CardContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CardContext = createContext({} as CardContextType)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CardContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCart = () => useContext(CardContext)
