import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const CategoryLayout = () => {
  return (
    <div className="flex min-h-screen gap-8 bg-green-50 p-8">
      <aside className="w-52 h-fit bg-green-100 p-5 rounded-xl border border-green-200">
        <h1 className="text-xl font-bold mb-5">Categories</h1>
        <Link to="/Shop" className="block p-2 mb-2 rounded-lg text-green-900 hover:bg-green-200">
          All
        </Link>
        <div className="space-y-4">
          <Link to="/Shop/flowers" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Flowers
          </Link>
          <Link to="/Shop/fruits" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Fruits
          </Link>
          <Link to="/Shop/vegetables" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Vegetables
          </Link>
          <Link to="/Shop/herbs" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Herbs
          </Link>
          <Link to="/Shop/climbers" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Climbers
          </Link>
          <Link to="/Shop/medical" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Medical
          </Link>
          <Link to="/Shop/palm" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Palm Plants
          </Link>
          <Link to="/Shop/seasonal" className="block p-2 rounded-lg text-green-900 hover:bg-green-200">
            Seasonal Plants
          </Link>
        </div>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default CategoryLayout