import React from 'react'
import { Link } from 'react-router-dom'

import basil from './herbs/basil.jpeg'
import coriander from './herbs/coriander.jpeg'
import curry from './herbs/curry.jpeg'
import dill from './herbs/dill.jpeg'
import eucalyptus from './herbs/eucaly.jpeg'
import mint from './herbs/mint.jpeg'
import origanum from './herbs/origanum.jpeg'
import parsley from './herbs/parsley.jpeg'
import rosemary from './herbs/rosemary.jpeg'
import thyme from './herbs/thyme.jpeg'

export const Herbs = () => {

  const herbs = [
    { image: basil, name: "Basil", price: "₹100", category: "Herb Plant" },
    { image: coriander, name: "Coriander", price: "₹80", category: "Herb Plant" },
    { image: curry, name: "Curry Leaves", price: "₹90", category: "Herb Plant" },
    { image: dill, name: "Dill", price: "₹100", category: "Herb Plant" },
    { image: eucalyptus, name: "Eucalyptus", price: "₹150", category: "Herb Plant" },
    { image: mint, name: "Mint", price: "₹80", category: "Herb Plant" },
    { image: origanum, name: "Oregano", price: "₹120", category: "Herb Plant" },
    { image: parsley, name: "Parsley", price: "₹100", category: "Herb Plant" },
    { image: rosemary, name: "Rosemary", price: "₹130", category: "Herb Plant" },
    { image: thyme, name: "Thyme", price: "₹120", category: "Herb Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="mb-7">

        <h2>
          Herbs
        </h2>

        <h2 className="text-3xl font-bold text-green-800">
          Nature's Fresh Herbs
        </h2>

        <p className="text-gray-600 mt-2">
          Discover fresh and aromatic herbs that bring natural
          flavour, freshness, and greenery to your home.
        </p>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {herbs.map((herb, index) => (

          <div
            key={index}
            className="block transition duration-200 hover:-translate-y-1"
          >

            <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

              <div className="relative">
                <Link to="/Shop/products" state={herb}>
                  <img
                    src={herb.image}
                    alt={herb.name}
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

              <Link to="/Shop/products" state={herb} className="text-inherit no-underline">
                <h2 className="font-semibold text-gray-800 mt-3">
                  {herb.name}
                </h2>

                <p className="text-green-700 font-bold mt-1">
                  {herb.price}
                </p>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}