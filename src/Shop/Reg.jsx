
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

export function Reg() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage('')

    if (form.password !== form.confirmPassword) {
      setMessage('Passwords do not match')
      return
    }

    if (form.password.length < 8) {
      setMessage('Password must contain at least 8 characters')
      return
    }

    try {
      const response = await fetch('http://localhost:2009/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          age: form.age,
          gender: form.gender,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
          password: form.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        navigate('/Log')
      } else {
        setMessage(data.message || 'Registration failed')
      }
    } catch {
      setMessage('Backend server is not running')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstname" value={form.firstname} onChange={handleChange} placeholder="First Name" required className="border p-3 rounded-lg" />

          <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Last Name" required className="border p-3 rounded-lg" />

          <input name="age" value={form.age} onChange={handleChange} type="number" placeholder="Age" required className="border p-3 rounded-lg" />

          <select name="gender" value={form.gender} onChange={handleChange} required className="border p-3 rounded-lg">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" required className="border p-3 rounded-lg" />

          <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" required className="border p-3 rounded-lg" />

          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required className="border p-3 rounded-lg" />

          <input name="city" value={form.city} onChange={handleChange} placeholder="City" required className="border p-3 rounded-lg" />

          <input name="state" value={form.state} onChange={handleChange} placeholder="State" required className="border p-3 rounded-lg" />

          <input name="pincode" value={form.pincode} onChange={handleChange} inputMode="numeric" maxLength={6} placeholder="Pincode" required className="border p-3 rounded-lg" />

          <div className="flex items-center border rounded-lg md:col-span-2">
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
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

          <div className="flex items-center border rounded-lg md:col-span-2">
            <input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              required
              className="p-3 w-full outline-none rounded-lg"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="px-4 text-green-600"
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {message && (
            <p className="text-red-600 md:col-span-2">{message}</p>
          )}

          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold md:col-span-2">
            Register
          </button>
        </form>

        <p className="text-center mt-5">
          Already have an account?{' '}
          <Link to="/Log" className="text-green-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
