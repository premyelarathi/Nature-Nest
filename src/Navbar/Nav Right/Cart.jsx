import { Link } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti"

const Cart = () => {
  return (
    <Link to="/Cart" aria-label="Cart" title="Cart" className="cursor-pointer text-2xl text-black transition hover:text-[#064e3b]" >
      <TiShoppingCart />
    </Link>
  )
}

export default Cart
