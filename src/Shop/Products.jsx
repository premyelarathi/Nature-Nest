import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddCart } from '../cart'
export const Products = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state

  const [quantity, setQuantity] = useState(1)

  const price = parseInt(product.price.replace("₹", ""))

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="min-h-screen bg-green-50 p-8">

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 xl:flex-row">
        <div className="w-full max-w-4xl rounded-xl bg-white p-6 shadow-lg xl:flex-1">

        <div className="grid grid-cols-2 gap-8">

          <div className="flex items-center justify-center bg-green-50 rounded-xl h-96">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center">

            <p className="text-green-700 mb-2">
              {product.category || "Flower Plant"}
            </p>

            <h1 className="text-3xl font-bold text-green-800 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-6">
              {product.description || "Fresh and naturally grown plant for your home and garden."}
            </p>

            <p className="text-2xl font-bold text-green-700 mb-6">
              ₹{price}
            </p>

            <p className="font-semibold text-gray-800 mb-2">
              Quantity
            </p>

            <div className="flex items-center border border-green-300 rounded-lg w-fit"> <button onClick={decreaseQuantity} className="px-4 py-2 text-xl cursor-pointer"> -
              </button>
              <span className="px-6 py-2">
                {quantity}
              </span>

              <button onClick={increaseQuantity} className="px-4 py-2 text-xl cursor-pointer" >
                +
              </button>

            </div>
            <div className="flex items-center justify-between bg-green-50 rounded-lg p-4 mt-6">

              <span className="font-semibold text-gray-800">
                Total Price
              </span>

              <span className="text-2xl font-bold text-green-700">
                ₹{price * quantity}
              </span>

            </div>

            <button
              onClick={() => {
                AddCart(product)
                navigate('/Cart')
              }}
              className="bg-green-700 text-white py-3 rounded-lg mt-6 cursor-pointer"
            >
              Add to Cart
            </button>

          </div>

        </div>

        </div>

        <div className="w-full rounded-2xl border border-green-200 bg-white p-6 xl:w-80 xl:shrink-0">

          <h2 className="text-2xl font-bold text-green-800 mb-5">
            Health Benefits
          </h2>

          <div className="border-b border-green-200 pb-4 mb-4">
            <h3 className="font-bold text-green-800">
              Boosts Immunity
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Rich in vitamin C and antioxidants.
            </p>
          </div>

          <div className="border-b border-green-200 pb-4 mb-4">
            <h3 className="font-bold text-green-800">
              Supports Heart Health
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Helps maintain healthy cholesterol levels.
            </p>
          </div>

          <div className="border-b border-green-200 pb-4 mb-4">
            <h3 className="font-bold text-green-800">
              Improves Digestion
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              High in fiber and supports a healthy gut.
            </p>
          </div>

          <div className="border-b border-green-200 pb-4 mb-4">
            <h3 className="font-bold text-green-800">
              Good for Skin
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Contains antioxidants that support healthy skin.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-green-800">
              Helps Regulate Blood Sugar
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Low glycemic index and helps maintain energy levels.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}