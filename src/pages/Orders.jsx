
import React, { useEffect, useState } from 'react'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [message, setMessage] = useState('Loading orders...')

  useEffect(() => {
    const email = localStorage.getItem('userEmail')

    if (!email) {
      setMessage('Please login to view your orders')
      return
    }

    fetch(`http://localhost:2009/orders?email=${encodeURIComponent(email)}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Unable to load orders')
        }

        return res.json()
      })
      .then(data => {
        setOrders(data)
        setMessage(data.length === 0 ? 'No orders found 🌱' : '')
      })
      .catch(() => {
        setMessage('Unable to load orders. Please check the backend.')
      })
  }, [])

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="mb-6 text-3xl font-bold text-green-800">
        My Orders
      </h1>

      {message && (
        <p className="mb-4 text-gray-600">{message}</p>
      )}

      {orders.map(order => (
        <div
          key={order._id}
          className="mb-4 rounded-lg bg-white p-5 shadow"
        >
          <h2 className="text-xl font-bold text-green-800">
            {order.name}
          </h2>

          <p>Phone: {order.phone}</p>
          <p>Address: {order.address}</p>
          <p>Total: ₹{order.total}</p>
          <p>Date: {new Date(order.date).toLocaleString()}</p>

          <h3 className="mt-3 font-bold">Products:</h3>

          {order.items.map((item, index) => (
            <p key={`${item.name}-${index}`}>
              {item.name} - Quantity: {item.quantity || 1}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Orders
