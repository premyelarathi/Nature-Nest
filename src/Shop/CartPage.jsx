
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCart, removeCart } from '../cart'

const CartPage = () => {
  const [items, setItems] = useState(getCart())
  const navigate = useNavigate()

  const handleRemove = (name) => {
    removeCart(name)
    setItems(getCart())
  }

  const getPrice = (price) => {
    return parseInt(String(price).replace('₹', '')) || 0
  }

  const total = items.reduce((sum, item) => {
    return sum + getPrice(item.price) * (item.quantity || 1)
  }, 0)

  return (
    <div className="min-h-screen bg-green-50 p-5 md:p-8">
      <h1 className="mb-8 text-center text-4xl md:text-5xl font-serif font-bold text-green-800">
        CART
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty 🌱
        </p>
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="mb-5 flex flex-col sm:flex-row sm:items-center gap-5 rounded-xl bg-white p-5 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-28 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h2>

                <p className="text-gray-500">{item.category}</p>

                <p className="mt-1 font-bold text-green-700">
                  ₹{getPrice(item.price) * (item.quantity || 1)}
                </p>

                <p className="mt-1 mb-3 text-sm text-gray-600">
                  Quantity: {item.quantity || 1}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => navigate('/Checkout', { state: [item] })}
                    className="rounded-lg bg-green-700 px-5 py-2 font-semibold text-white hover:bg-green-800"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => handleRemove(item.name)}
                    className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 rounded-xl bg-white p-5 text-right shadow-sm">
            <p className="text-lg text-gray-600">Total Amount</p>
            <h2 className="text-2xl font-bold text-green-800">
              ₹{total}
            </h2>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
