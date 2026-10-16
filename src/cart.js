
export const AddCart = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  let found = cart.find(item => item.name === product.name)

  if (found) {
    found.quantity = found.quantity + (product.quantity || 1)
  } else {
    cart.push({ ...product, quantity: product.quantity || 1 })
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || []
}

export const removeCart = (name) => {
  let cart = getCart()
  cart = cart.filter(item => item.name !== name)
  localStorage.setItem('cart', JSON.stringify(cart))
}
