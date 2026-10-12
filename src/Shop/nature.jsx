import React from 'react'
import { Link } from 'react-router-dom'

export const Wel = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 p-4">
    <div className="w-[420px] rounded-2xl border border-green-200 bg-white p-8 text-center shadow-xl">
      <h2 className="text-4xl font-extrabold tracking-wide text-green-800" style={{ fontFamily: 'Poppins, sans-serif' }}>NATURE NEST</h2>
      <p className="mt-2 text-base text-gray-600">Welcome to the NATURE NEST</p>
      <Link to="/sec">
        <button className="mt-6 w-full rounded-xl bg-green-700 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-green-800">Explore 🌱</button>
      </Link>
    </div>
  </div>
)