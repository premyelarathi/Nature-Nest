let cart = []

export const AddCart = (product) => {
  cart.push(product)
}

export const getCart = () => {
  return cart
}