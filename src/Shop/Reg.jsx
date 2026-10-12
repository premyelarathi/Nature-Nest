import React from 'react'
import { Link } from 'react-router-dom'

export const Reg = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center p-4">

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-green-100 p-6">

        <h1 className="text-2xl font-bold text-green-800 text-center mb-5">
          Create Your Account 🌿
        </h1>

        <form className="grid grid-cols-2 gap-x-4 gap-y-3">

          <div>
            <label className="text-green-900 font-medium">Firstname</label>
            <input
              type="text"
              placeholder="Firstname"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Lastname</label>
            <input
              type="text"
              placeholder="Lastname"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Age</label>
            <input
              type="number"
              placeholder="Age"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Gender</label>
            <input
              type="text"
              placeholder="Gender"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone number"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Address</label>
            <input
              type="text"
              placeholder="Address"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">City</label>
            <input
              type="text"
              placeholder="City"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">State</label>
            <input
              type="text"
              placeholder="State"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="text-green-900 font-medium">Pincode</label>
            <input
              type="number"
              placeholder="Pincode"
              required
              className="w-full border border-green-200 rounded-lg px-3 py-2 mt-1 outline-none focus:border-green-600"
            />
          </div>

          <div className="col-span-2 mt-2">
            <Link to="/Log">
              <button
                type="button"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-lg cursor-pointer"
              >
                Register
              </button>
            </Link>
          </div>

        </form>

      </div>

    </div>
  )
}