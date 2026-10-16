
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { removeCart } from '../cart'

const Checkout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const items = location.state || []

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const getPrice = (price) => {
    return parseInt(String(price).replace('₹', '')) || 0
  }

  const total = items.reduce((sum, item) => {
    return sum + getPrice(item.price) * (item.quantity || 1)
  }, 0)

  const placeOrder = async (e) => {
    e.preventDefault()

    if (items.length === 0) {
      setMessage('No products selected')
      return
    }

    const email = localStorage.getItem('userEmail')

    if (!email) {
      setMessage('Please login before placing an order')
      return
    }

    try {
      setLoading(true)
      setMessage('')

      const orderData = {
        name,
        email,
        phone,
        address,
        items,
        total
      }

      const response = await fetch('http://localhost:2009/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      })

      const data = await response.json()

      if (response.ok) {
        items.forEach(item => {
          removeCart(item.name)
        })

        alert('Order placed successfully! 🌱')
        navigate('/Home')
      } else {
        setMessage(data.message || 'Order failed')
      }
    } catch (error) {
      setMessage('Server connection failed. Please check your backend.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-center text-4xl font-serif font-bold text-green-800 mb-8">
        CHECKOUT
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Order Summary
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-600">No products selected 🌱</p>
        ) : (
          items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex justify-between gap-4 border-b py-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity || 1}
                </p>
              </div>

              <p className="font-bold text-green-700">
                ₹{getPrice(item.price) * (item.quantity || 1)}
              </p>
            </div>
          ))
        )}

        <p className="text-right text-xl font-bold text-green-800 mt-4">
          Total: ₹{total}
        </p>

        <form onSubmit={placeOrder} className="mt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-green-800">
            Delivery Details
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full border rounded-lg p-3"
            rows="3"
          />

          {message && (
            <p className="text-red-600">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading || items.length === 0}
            className="w-full bg-green-700 text-white rounded-lg py-3 font-semibold hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Checkout
