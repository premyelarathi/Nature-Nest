import React from 'react'
import { Link } from 'react-router-dom'

export const Log = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-100 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-green-100">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue to Nature Nest
          </p>
        </div>

        <form>

          <div className="mb-5">
            <label className="block text-green-900 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-green-200 rounded-lg px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="mb-5">
            <label className="block text-green-900 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              required
              className="w-full border border-green-200 rounded-lg px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="mb-6">
            <label className="block text-green-900 font-medium mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full border border-green-200 rounded-lg px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <Link to="/Home">
            <button
              type="button"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
            >
              Login
            </button>
          </Link>

        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Welcome to <span className="text-green-700 font-semibold">Nature Nest</span>
        </p>

      </div>

    </div>
  )
}