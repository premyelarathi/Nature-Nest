import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Whistlist = () => {
  return (
    <Link to="/Wishlist" aria-label="Wishlist" title="Wishlist" className="cursor-pointer text-2xl text-black transition hover:text-[#064e3b]">
        <FaHeart />
    </Link>
  )
}

export default Whistlist