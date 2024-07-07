'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

const CardWidget = () => {
  const { items } = useCart()
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4 text-zinc-500" />
      <span className="text-sm text-zinc-500">Cart ({items.length})</span>
    </div>
  )
}

export default CardWidget
