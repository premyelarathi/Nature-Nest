
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log('MongoDB error:', error.message))

const User = mongoose.model('User', {
  firstname: String,
  lastname: String,
  age: String,
  gender: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  password: {
    type: String,
    required: true
  }
})

const Order = mongoose.model('Order', {
  name: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: String,
  address: String,
  items: Array,
  total: Number,
  date: {
    type: Date,
    default: Date.now
  }
})

app.get('/', (req, res) => {
  res.send('Nature Nest backend is running')
})

app.post('/register', async (req, res) => {
  try {
    const {
      firstname, lastname, age, gender, email,
      phone, address, city, state, pincode, password
    } = req.body

    if (!firstname || !email || !password) {
      return res.status(400).json({
        message: 'Please fill all required fields'
      })
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: 'Password must contain at least 8 characters'
      })
    }

    const userEmail = email.trim().toLowerCase()
    const existingUser = await User.findOne({ email: userEmail })

    if (existingUser) {
      return res.status(400).json({
        message: 'Email already registered'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      firstname,
      lastname,
      age,
      gender,
      email: userEmail,
      phone,
      address,
      city,
      state,
      pincode,
      password: hashedPassword
    })

    await user.save()

    res.status(201).json({
      message: 'Registration successful'
    })
  } catch (error) {
    console.log('Register error:', error.message)
    res.status(500).json({
      message: 'Registration failed'
    })
  }
})

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      })
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase()
    })

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(401).json({
        message: 'Invalid email or password'
      })
    }

    res.json({
      message: 'Login successful',
      email: user.email
    })
  } catch (error) {
    console.log('Login error:', error.message)
    res.status(500).json({
      message: 'Login failed'
    })
  }
})

app.get('/profile/:email', async (req, res) => {
  try {
    const email = req.params.email.trim().toLowerCase()

    const user = await User.findOne({ email }).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.json(user)
  } catch (error) {
    console.log('Profile error:', error.message)
    res.status(500).json({
      message: 'Unable to get profile'
    })
  }
})

app.put('/profile/:email', async (req, res) => {
  try {
    const email = req.params.email.trim().toLowerCase()

    const {
      firstname, lastname, age, gender,
      phone, address, city, state, pincode
    } = req.body

    const user = await User.findOneAndUpdate(
      { email },
      {
        firstname, lastname, age, gender,
        phone, address, city, state, pincode
      },
      { new: true, runValidators: true }
    ).select('-password')

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.json({
      message: 'Profile updated successfully',
      user
    })
  } catch (error) {
    console.log('Update profile error:', error.message)
    res.status(500).json({
      message: 'Unable to update profile'
    })
  }
})

app.post('/orders', async (req, res) => {
  try {
    console.log('Order data:', req.body)

    const { name, email, phone, address, items, total } = req.body

    if (!name || !email || !phone || !address) {
      return res.status(400).json({
        message: 'Please fill all order details'
      })
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: 'No products selected'
      })
    }

    const order = new Order({
      name,
      email: email.trim().toLowerCase(),
      phone,
      address,
      items,
      total
    })

    await order.save()

    res.status(201).json({
      message: 'Order placed successfully',
      order
    })
  } catch (error) {
    console.log('Order error:', error.message)
    res.status(500).json({
      message: 'Unable to place order'
    })
  }
})

app.get('/orders', async (req, res) => {
  try {
    const email = req.query.email

    if (!email) {
      return res.status(400).json({
        message: 'Email is required'
      })
    }

    const orders = await Order.find({
      email: email.trim().toLowerCase()
    }).sort({ date: -1 })

    res.json(orders)
  } catch (error) {
    console.log('Get orders error:', error.message)
    res.status(500).json({
      message: 'Unable to get orders'
    })
  }
})

const PORT = process.env.PORT || 2009

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
