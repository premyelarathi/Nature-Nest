
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

export function Log() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage('')

    try {
      const response = await fetch('http://localhost:2009/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('userEmail', email)
        navigate('/Home')
      } else {
        setMessage(data.message || 'Login failed')
      }
    } catch {
      setMessage('Backend server is not running')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          Welcome to Nature Nest
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="border p-3 rounded-lg w-full"
          />

          <div className="flex items-center border rounded-lg">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-3 w-full outline-none rounded-lg"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-4 text-green-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {message && (
            <p className="text-red-600">{message}</p>
          )}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg w-full font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5">
          Don't have an account?{' '}
          <Link to="/Reg" className="text-green-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
