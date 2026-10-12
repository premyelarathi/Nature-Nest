import React from 'react'
import { Link } from 'react-router-dom'

import crepe from './assets/flowers/crepe.jpeg'
import cros from './assets/flowers/cros.jpeg'
import cry from './assets/flowers/cry.jpeg'
import daisy from './assets/flowers/daisy.jpeg'
import fp2 from './assets/flowers/fp2.jpeg'
import hibis from './assets/flowers/hibis.jpeg'
import perw from './assets/flowers/perw.jpeg'
import rose from './assets/flowers/rose.jpeg'
import sun from './assets/flowers/sun.jpeg'
import tulip from './assets/flowers/tulip.jpeg'

export const Flowers = () => {

  const flowers = [
    { image: crepe, name: "Crepe Flower", price: "₹120", category: "Flower Plant" },
    { image: cros, name: "Crossandra", price: "₹150", category: "Flower Plant" },
    { image: cry, name: "Chrysanthemum", price: "₹180", category: "Flower Plant" },
    { image: daisy, name: "Daisy", price: "₹100", category: "Flower Plant" },
    { image: fp2, name: "Flower Plant", price: "₹130", category: "Flower Plant" },
    { image: hibis, name: "Hibiscus", price: "₹160", category: "Flower Plant" },
    { image: perw, name: "Periwinkle", price: "₹110", category: "Flower Plant" },
    { image: rose, name: "Rose", price: "₹150", category: "Flower Plant" },
    { image: sun, name: "Sunflower", price: "₹140", category: "Flower Plant" },
    { image: tulip, name: "Tulip", price: "₹200", category: "Flower Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="flex gap-8">

        <section className="flex-1">

          <div className="mb-7">

            <h1 className="text-3xl font-bold text-green-800">
              Bring Nature Home
            </h1>

            <p className="text-gray-600 mt-2">
              Explore our beautiful collection of flowering plants
              and add a touch of nature to your space.
            </p>

          </div>

          <div className="grid grid-cols-5 gap-5">

            {flowers.map((flower, index) => (

              <div
                key={index}
                className="block transition duration-200 hover:-translate-y-1"
              >

                <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

                  <div className="relative">
                    <Link to="/Shop/products" state={flower}>
                      <img
                        src={flower.image}
                        alt={flower.name}
                        className="w-full h-64 object-cover rounded-lg"
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

                  <Link to="/Shop/products" state={flower} className="text-inherit no-underline">
                    <h2 className="font-semibold text-gray-800 mt-3">
                      {flower.name}
                    </h2>

                    <p className="text-green-700 font-bold mt-1">
                      {flower.price}
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