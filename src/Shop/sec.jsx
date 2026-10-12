import React from 'react'
import { Link } from 'react-router-dom'

export const Sec = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center border border-green-100">

        <h1 className="text-2xl font-bold text-green-800">
          Hi 👋, I'm Nest 🌿
        </h1>

        <p className="text-gray-600 text-sm mt-2">
          Happy to see you here!
        </p>

        <p className="text-gray-500 text-sm mt-3">
          New here? Register to create an account.
        </p>

        <p className="text-gray-500 text-sm mt-1">
          Already registered? Login to continue.
        </p>

        <div className="flex gap-3 mt-5 justify-center">

          <Link to="/Reg">
            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg cursor-pointer">
              Register
            </button>
          </Link>

          <Link to="/Log">
            <button className="border border-green-700 text-green-700 hover:bg-green-50 px-5 py-2 rounded-lg cursor-pointer">
              Login
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}