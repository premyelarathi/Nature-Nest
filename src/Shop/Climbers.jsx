import React from 'react'
import { Link } from 'react-router-dom'

import rangoon from './climbers/rangoon.jpeg'
import morningGlory from './climbers/morn.jpeg'
import moneyPlant from './climbers/Money.jpeg'
import jasmine from './climbers/jasmine.jpeg'
import ivy from './climbers/ivy.jpeg'
import flameVine from './climbers/flame.jpeg'
import cucumber from './climbers/cucumber.jpeg'
import bougainvillea from './climbers/bougain.jpeg'
import bottleGourd from './climbers/bottle.jpeg'
import aparajitha from './climbers/aparajitha.jpeg'

export const Climbers = () => {

  const climbers = [
    { image: rangoon, name: "Rangoon Creeper", price: "₹150", category: "Climber Plant" },
    { image: morningGlory, name: "Morning Glory", price: "₹120", category: "Climber Plant" },
    { image: moneyPlant, name: "Money Plant", price: "₹100", category: "Climber Plant" },
    { image: jasmine, name: "Jasmine", price: "₹140", category: "Climber Plant" },
    { image: ivy, name: "Ivy", price: "₹130", category: "Climber Plant" },
    { image: flameVine, name: "Flame Vine", price: "₹180", category: "Climber Plant" },
    { image: cucumber, name: "Cucumber Vine", price: "₹110", category: "Climber Plant" },
    { image: bougainvillea, name: "Bougainvillea", price: "₹160", category: "Climber Plant" },
    { image: bottleGourd, name: "Bottle Gourd Vine", price: "₹100", category: "Climber Plant" },
    { image: aparajitha, name: "Aparajitha", price: "₹130", category: "Climber Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="flex gap-8">

        <section className="flex-1">

          <div className="mb-7">

            <h1 className="text-3xl font-bold text-green-800">
              Grow Up, Grow Beautiful
            </h1>

            <p className="text-gray-600 mt-2">
              Discover beautiful climbing plants that bring greenery
              and natural charm to your home and garden.
            </p>

          </div>

          <div className="grid grid-cols-5 gap-5">

            {climbers.map((climber, index) => (

              <div
                key={index}
                className="block transition duration-200 hover:-translate-y-1"
              >

                <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

                  <div className="relative">
                    <Link to="/Shop/products" state={climber}>
                      <img
                        src={climber.image}
                        alt={climber.name}
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

                  <Link to="/Shop/products" state={climber} className="text-inherit no-underline">
                    <h2 className="font-semibold text-gray-800 mt-3">
                      {climber.name}
                    </h2>

                    <p className="text-green-700 font-bold mt-1">
                      {climber.price}
                    </p>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </div>
  )
}