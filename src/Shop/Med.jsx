import React from 'react'
import { Link } from 'react-router-dom'

import aloe from './medicalplants/aloe.jpeg'
import amla from './medicalplants/amla.jpeg'
import ashwagandha from './medicalplants/aswagand.jpeg'
import brahmi from './medicalplants/brahmi.jpeg'
import giloy from './medicalplants/giloy.jpeg'
import ginger from './medicalplants/ginger.jpeg'
import garlic from './medicalplants/gralic.jpeg'
import neem from './medicalplants/neem.jpeg'
import tulsi from './medicalplants/tulasi.jpeg'
import turmeric from './medicalplants/turmeric.jpeg'

export const Med = () => {

  const medicalPlants = [
    { image: aloe, name: "Aloe Vera", price: "₹120", category: "Medical Plant" },
    { image: amla, name: "Amla", price: "₹150", category: "Medical Plant" },
    { image: ashwagandha, name: "Ashwagandha", price: "₹180", category: "Medical Plant" },
    { image: brahmi, name: "Brahmi", price: "₹130", category: "Medical Plant" },
    { image: giloy, name: "Giloy", price: "₹140", category: "Medical Plant" },
    { image: ginger, name: "Ginger", price: "₹100", category: "Medical Plant" },
    { image: garlic, name: "Garlic", price: "₹90", category: "Medical Plant" },
    { image: neem, name: "Neem", price: "₹120", category: "Medical Plant" },
    { image: tulsi, name: "Tulsi", price: "₹80", category: "Medical Plant" },
    { image: turmeric, name: "Turmeric", price: "₹110", category: "Medical Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="mb-7">

        <h2 className="text-3xl font-bold text-green-800">
          Nature's Healing Plants
        </h2>

        <p className="text-gray-600 mt-2">
          Explore our collection of traditional medicinal plants
          that bring natural wellness and greenery to your home.
        </p>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {medicalPlants.map((plant, index) => (

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