
import React from 'react'
import {Link} from 'react-router-dom'
import c2 from './assets/c2.jpeg'
import fp2 from './assets/fp2.jpeg'
import rose from './assets/flowers/rose.jpeg'
import fr1 from './assets/fr1.jpeg'
import fr2 from './assets/fr2.jpeg'
import h1 from './assets/h1.jpeg'
import h2 from './assets/h2.jpeg'
import m1 from './assets/m1.jpeg'
import m2 from './assets/m2.jpeg'
import p1 from './assets/p1.jpeg'
import p2 from './assets/p2.jpeg'
import s1 from './assets/s1.jpeg'
import v1 from './assets/v1.jpeg'
import v2 from './assets/v2.jpeg'

export const Shop = () => {

  const products = [
    {image:rose,name:"Rose",category:"Flowers",price:"₹150",description:"A beautiful flowering plant with vibrant blooms, perfect for your home or garden."},
    {image:fp2,name:"Lavender",category:"Flowers",price:"₹130"},
    {image:fr1,name:"Dragon Fruit",category:"Fruits",price:"₹220"},
    {image:fr2,name:"Apple",category:"Fruits",price:"₹180"},
    {image:v1,name:"Carrot",category:"Vegetables",price:"₹100"},
    {image:v2,name:"Bittergourd",category:"Vegetables",price:"₹90"},
    {image:h1,name:"Rosemary",category:"Herbs",price:"₹130"},
    {image:h2,name:"Eucalyptus",category:"Herbs",price:"₹150"},
    {image:c2,name:"Morning Glory",category:"Climbers",price:"₹120"},
    {image:c2,name:"Money Plant",category:"Climbers",price:"₹100"},
    {image:m1,name:"Tulsi",category:"Medical",price:"₹80"},
    {image:m2,name:"Turmeric",category:"Medical",price:"₹110"},
    {image:p1,name:"Areca Palm",category:"Palm Plants",price:"₹250"},
    {image:p2,name:"Sago Palm",category:"Palm Plants",price:"₹300"},
    {image:s1,name:"Marigold",category:"Seasonal Plants",price:"₹90"}
  ]

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="flex gap-8">

        <aside className="w-52 h-fit bg-green-100 p-5 rounded-xl border border-green-200">
          <h1 className="text-xl font-bold mb-5">Categories</h1>

          <Link className="block p-2 mb-2 rounded-lg text-green-900 no-underline hover:bg-green-200" to="/Shop">
            All
          </Link>

          <ul className="space-y-4">
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/flowers">Flowers</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/fruits">Fruits</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/vegetables">Vegetables</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/herbs">Herbs</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/climbers">Climbers</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/medical">Medical</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/palm">Palm Plants</Link>
            </li>
            <li className="p-2 rounded-lg hover:bg-green-200 cursor-pointer">
              <Link className="block text-green-900 no-underline" to="/Shop/seasonal">Seasonal Plants</Link>
            </li>
          </ul>
        </aside>

        <section className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Our Products</h1>

          <div className="grid grid-cols-5 gap-5">

            {products.map((product,index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-3 hover:shadow-lg hover:shadow-green-200">

                <div className="relative">

                  <Link to="/Shop/products" state={product}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-65 object-cover rounded-lg"
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

                <Link to="/Shop/products" state={product}>
                  <h2 className="font-semibold mt-3">{product.name}</h2>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-lg font-bold text-green-700 mt-2">{product.price}</p>
                </Link>

              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  )
}
