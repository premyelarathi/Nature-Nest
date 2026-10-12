import React from 'react'
import { Link } from 'react-router-dom'

import aster from './season/aster.jpeg'
import celosia from './season/celosia.jpeg'
import cosmos from './season/cosmos.jpeg'
import daffodils from './season/daffodils.jpeg'
import dahlia from './season/dahlia.jpeg'
import marigold from './season/marigold.jpeg'
import pansy from './season/pansy.jpeg'
import petunia from './season/petunia.jpeg'
import snapdragon from './season/snap.jpeg'
import zinnia from './season/zin.jpeg'

export const Seas = () => {

  const seasonalPlants = [
    { image: aster, name: "Aster", price: "₹120", category: "Seasonal Plant" },
    { image: celosia, name: "Celosia", price: "₹130", category: "Seasonal Plant" },
    { image: cosmos, name: "Cosmos", price: "₹100", category: "Seasonal Plant" },
    { image: daffodils, name: "Daffodil", price: "₹180", category: "Seasonal Plant" },
    { image: dahlia, name: "Dahlia", price: "₹150", category: "Seasonal Plant" },
    { image: marigold, name: "Marigold", price: "₹90", category: "Seasonal Plant" },
    { image: pansy, name: "Pansy", price: "₹120", category: "Seasonal Plant" },
    { image: petunia, name: "Petunia", price: "₹110", category: "Seasonal Plant" },
    { image: snapdragon, name: "Snapdragon", price: "₹140", category: "Seasonal Plant" },
    { image: zinnia, name: "Zinnia", price: "₹100", category: "Seasonal Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="mb-7">

        <h2 className="text-3xl font-bold text-green-800">
          Seasonal Beauty in Every Bloom
        </h2>

        <p className="text-gray-600 mt-2">
          Discover beautiful seasonal plants that bring vibrant
          colours and fresh natural beauty to your garden.
        </p>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {seasonalPlants.map((plant, index) => (

          <div
            key={index}
            className="block transition duration-200 hover:-translate-y-1"
          >

            <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

              <div className="relative">
                <Link to="/Shop/products" state={plant}>
                  <img
                    src={plant.image}
                    alt={plant.name}
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

              <Link to="/Shop/products" state={plant} className="text-inherit no-underline">
                <h2 className="font-semibold text-gray-800 mt-3">
                  {plant.name}
                </h2>

                <p className="text-green-700 font-bold mt-1">
                  {plant.price}
                </p>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}