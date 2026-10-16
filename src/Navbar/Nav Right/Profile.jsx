
import { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState(null)

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: ''
  })

  const [message, setMessage] = useState('Loading profile...')

  useEffect(() => {
    const email = localStorage.getItem('userEmail')

    if (!email) {
      setMessage('Please login first')
      return
    }

    fetch(`http://localhost:2009/profile/${encodeURIComponent(email)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load profile')
        }

        return response.json()
      })
      .then((data) => {
        setUser(data)

        setForm({
          firstname: data.firstname || '',
          lastname: data.lastname || '',
          email: data.email || '',
          phone: data.phone || '',
          address: data.address || ''
        })

        setMessage('')
      })
      .catch(() => {
        setMessage('Unable to load profile')
      })
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSave(e) {
    e.preventDefault()
    setMessage('')

    try {
      const response = await fetch(
        `http://localhost:2009/profile/${encodeURIComponent(form.email)}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: form.firstname,
            lastname: form.lastname,
            phone: form.phone,
            address: form.address
          })
        }
      )

      const data = await response.json()

      if (response.ok) {
        setUser(data.user)

        setForm({
          firstname: data.user.firstname || '',
          lastname: data.user.lastname || '',
          email: data.user.email || '',
          phone: data.user.phone || '',
          address: data.user.address || ''
        })

        setMessage('Profile updated successfully!')
      } else {
        setMessage(data.message || 'Update failed')
      }
    } catch {
      setMessage('Backend server is not running')
    }
  }

  if (!user) {
    return (
      <p className="p-8 text-center text-green-700">
        {message}
      </p>
    )
  }

  return (
    <div className="mx-auto p-5 max-w-5xl">
      <p className="text-center text-lg text-[#118032]">
        MY ACCOUNT
      </p>

      <h1 className="mt-2 text-center font-serif text-5xl font-bold text-[#075144]">
        My Profile
      </h1>

      <p className="mt-3 text-center text-gray-600">
        View and update your personal information.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg border-2 border-[#d5e5dc] p-6 md:p-10">
        <div className="text-left md:pl-10">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#d9f2e7] font-serif text-4xl font-bold text-[#118032] md:mx-0">
            {form.firstname.charAt(0).toUpperCase()}
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#174f43]">
            {form.firstname} {form.lastname}
          </h2>

          <p className="mt-2 text-gray-600">
            Your Nature Nest account information
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <p className="font-semibold text-[#075144]">Name</p>
              <p className="text-gray-600">
                {form.firstname} {form.lastname}
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#075144]">Email</p>
              <p className="text-gray-600">{form.email}</p>
            </div>

            <div>
              <p className="font-semibold text-[#075144]">Phone</p>
              <p className="text-gray-600">
                {form.phone || 'Not provided'}
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#075144]">Address</p>
              <p className="text-gray-600">
                {form.address || 'Not provided'}
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSave}
          className="rounded-lg bg-[#F2F9F5] p-6"
        >
          <h2 className="text-center font-serif text-2xl font-bold text-[#065949]">
            Edit Profile
          </h2>

          <label className="mt-5 block text-sm font-medium text-gray-700">
            First Name
          </label>

          <input
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
            className="mt-1 h-10 w-full rounded-lg border border-gray-300 bg-white px-3 outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Last Name
          </label>

          <input
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
            className="mt-1 h-10 w-full rounded-lg border border-gray-300 bg-white px-3 outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={form.email}
            readOnly
            className="mt-1 h-10 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Phone
          </label>

          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 h-10 w-full rounded-lg border border-gray-300 bg-white px-3 outline-none"
          />

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Address
          </label>

          <textarea
            name="address"
            rows="3"
            value={form.address}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#087f5b] py-2 font-semibold text-white hover:bg-[#066b4d]"
          >
            Save Changes
          </button>

          {message && (
            <p className="mt-3 text-center text-sm text-green-700">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Profile
