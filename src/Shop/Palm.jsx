import React from 'react'
import { Link } from 'react-router-dom'

import acera from './palm/acera.jpeg'
import bamboo from './palm/bamboo.jpeg'
import bottle from './palm/bottle.jpeg'
import coconut from './palm/cocnut.jpeg'
import date from './palm/date.jpeg'
import fan from './palm/fan.jpeg'
import foxtail from './palm/foxtail.jpeg'
import lady from './palm/lady.jpeg'
import parlor from './palm/parlor.jpeg'
import sago from './palm/sago.jpeg'

export const Palm = () => {

  const palms = [
    { image: acera, name: "Areca Palm", price: "₹250", category: "Palm Plant" },
    { image: bamboo, name: "Bamboo Palm", price: "₹220", category: "Palm Plant" },
    { image: bottle, name: "Bottle Palm", price: "₹300", category: "Palm Plant" },
    { image: coconut, name: "Coconut Palm", price: "₹180", category: "Palm Plant" },
    { image: date, name: "Date Palm", price: "₹350", category: "Palm Plant" },
    { image: fan, name: "Fan Palm", price: "₹280", category: "Palm Plant" },
    { image: foxtail, name: "Foxtail Palm", price: "₹320", category: "Palm Plant" },
    { image: lady, name: "Lady Palm", price: "₹240", category: "Palm Plant" },
    { image: parlor, name: "Parlor Palm", price: "₹200", category: "Palm Plant" },
    { image: sago, name: "Sago Palm", price: "₹300", category: "Palm Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="mb-7">

        <h2 className="text-3xl font-bold text-green-800">
          Bring Tropical Beauty Home
        </h2>

        <p className="text-gray-600 mt-2">
          Explore our collection of elegant palm plants that add
          a fresh tropical touch to your home and garden.
        </p>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {palms.map((palm, index) => (

          <div
            key={index}
            className="block transition duration-200 hover:-translate-y-1"
          >

            <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

              <div className="relative">
                <Link to="/Shop/products" state={palm}>
                  <img
                    src={palm.image}
                    alt={palm.name}
                    className="w-full h-74 object-cover rounded-lg"
                  />
                </Link>
                <Link
                  to="/Wishlist"
                  aria-label="Go to wishlist"
                  title="Wishlist"
                  className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-green-700 shadow-md hover:bg-green-50"
                >
                  ♡
                </Link>
              </div>

              <Link to="/Shop/products" state={palm} className="text-inherit no-underline">
                <h2 className="font-semibold text-gray-800 mt-3">
                  {palm.name}
                </h2>

                <p className="text-green-700 font-bold mt-1">
                  {palm.price}
                </p>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}