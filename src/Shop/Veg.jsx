import React from 'react'
import { Link } from 'react-router-dom'

import bittergourd from './vegetables/bittergourd.jpeg'
import brinjal from './vegetables/brinjal.jpeg'
import cabbage from './vegetables/cabbage.jpeg'
import carrot from './vegetables/carrot.jpeg'
import cauliflower from './vegetables/cauliflower.jpeg'
import lady from './vegetables/lady.jpeg'
import potato from './vegetables/potato.jpeg'
import radish from './vegetables/raddish.jpeg'
import spinach from './vegetables/spinach.jpeg'
import tomato from './vegetables/tomato.jpeg'

export const Veg = () => {

  const vegetables = [
    { image: bittergourd, name: "Bitter Gourd", price: "₹90", category: "Vegetable Plant" },
    { image: brinjal, name: "Brinjal", price: "₹80", category: "Vegetable Plant" },
    { image: cabbage, name: "Cabbage", price: "₹70", category: "Vegetable Plant" },
    { image: carrot, name: "Carrot", price: "₹100", category: "Vegetable Plant" },
    { image: cauliflower, name: "Cauliflower", price: "₹90", category: "Vegetable Plant" },
    { image: lady, name: "Lady Finger", price: "₹80", category: "Vegetable Plant" },
    { image: potato, name: "Potato", price: "₹70", category: "Vegetable Plant" },
    { image: radish, name: "Radish", price: "₹75", category: "Vegetable Plant" },
    { image: spinach, name: "Spinach", price: "₹60", category: "Vegetable Plant" },
    { image: tomato, name: "Tomato", price: "₹80", category: "Vegetable Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="mb-7">

        <h2 className="text-3xl font-bold text-green-800">
          Freshness Grown Naturally
        </h2>

        <p className="text-gray-600 mt-2">
          Explore our collection of fresh vegetables, naturally grown
          to bring healthy and wholesome greenery to your home.
        </p>

      </div>

      <div className="grid grid-cols-5 gap-5">

        {vegetables.map((vegetable, index) => (

          <div
            key={index}
            className="block transition duration-200 hover:-translate-y-1"
          >

            <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

              <div className="relative">
                <Link to="/Shop/products" state={vegetable}>
                  <img
                    src={vegetable.image}
                    alt={vegetable.name}
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

              <Link to="/Shop/products" state={vegetable} className="text-inherit no-underline">
                <h2 className="font-semibold text-gray-800 mt-3">
                  {vegetable.name}
                </h2>

                <p className="text-green-700 font-bold mt-1">
                  {vegetable.price}
                </p>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}