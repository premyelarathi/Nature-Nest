import React from 'react'
import { getCart } from '../cart'

const CartPage = () => {
  const items = getCart()

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="mb-6 text-center gap-2 text-5xl font-serif font-bold text-green-800">
        CART
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-600 text-center text-base">Your cart is empty 😭.</p>
      ) : (
        items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="mb-4 flex items-center gap-5 rounded-xl bg-white p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.category}</p>
              <p className="font-bold text-green-700">{item.price}</p>
              <div className="ml-auto flex gap-3">
            <button className="bg-green-700 text-white px-5 py-2 rounded-lg cursor-pointer">
              Buy Now
            </button>

            <button className="bg-red-500 text-white px-5 py-2 rounded-lg cursor-pointer">
              Remove
            </button>
          </div>

            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default CartPage
