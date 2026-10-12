import React from 'react'
import { Link } from 'react-router-dom'

import apple from './fruits/apple.jpeg'
import dragon from './fruits/dragon.jpeg'
import grape from './fruits/grape.jpeg'
import guava from './fruits/guava.jpeg'
import mango from './fruits/mango.jpeg'
import orange from './fruits/orange.jpeg'
import papaya from './fruits/papaya.jpeg'
import pomegranate from './fruits/pom.jpeg'
import strawberry from './fruits/strawberry.jpeg'
import watermelon from './fruits/watermel.jpeg'

export const Fruits = () => {

  const fruits = [
    { image: apple, name: "Apple", price: "₹180", category: "Fruit Plant",  },
    { image: dragon, name: "Dragon Fruit", price: "₹220", category: "Fruit Plant" },
    { image: grape, name: "Grapes", price: "₹160", category: "Fruit Plant" },
    { image: guava, name: "Guava", price: "₹100", category: "Fruit Plant" },
    { image: mango, name: "Mango", price: "₹150", category: "Fruit Plant" },
    { image: orange, name: "Orange", price: "₹120", category: "Fruit Plant" },
    { image: papaya, name: "Papaya", price: "₹100", category: "Fruit Plant" },
    { image: pomegranate, name: "Pomegranate", price: "₹200", category: "Fruit Plant" },
    { image: strawberry, name: "Strawberry", price: "₹250", category: "Fruit Plant" },
    { image: watermelon, name: "Watermelon", price: "₹90", category: "Fruit Plant" }
  ]

  return (
    <div className="min-h-full">

      <div className="flex gap-8">

        <section className="flex-1">

          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Fruits
          </h2>

          <div className="mb-7">

            <h1 className="text-3xl font-bold text-green-800">
              Freshness Grown Naturally
            </h1>

            <p className="text-gray-600 mt-2">
              Explore our collection of fresh and naturally grown
              fruits, perfect for a healthy lifestyle.
            </p>

          </div>

          <div className="grid grid-cols-5 gap-5">

            {fruits.map((fruit, index) => (

              <div
                key={index}
                className="block transition duration-200 hover:-translate-y-1"
              >

                <div className="bg-white rounded-xl shadow-sm p-3 transition duration-200 hover:shadow-lg hover:shadow-green-200">

                  <div className="relative">
                    <Link to="/Shop/products" state={fruit}>
                      <img
                        src={fruit.image}
                        alt={fruit.name}
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

                  <Link to="/Shop/products" state={fruit} className="text-inherit no-underline">
                    <h2 className="font-semibold text-gray-800 mt-3">
                      {fruit.name}
                    </h2>

                    <p className="text-green-700 font-bold mt-1">
                      {fruit.price}
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