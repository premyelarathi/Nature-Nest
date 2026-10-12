import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <details className="group relative">
      <summary
        aria-label="User menu"
        title="User menu"
        className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-white text-black transition hover:bg-[#e5f4ec] hover:text-[#064e3b]"
      >
        <FiUser className="text-xl" />
      </summary>
      <div className="absolute right-0 z-20 mt-2 w-36 rounded-md bg-white py-1 text-sm shadow-lg">
        <Link to="/Profile" className="block px-4 py-2 text-black hover:bg-[#e5f4ec]">
          Profile
        </Link>
        <Link to="/Log" className="block px-4 py-2 text-black hover:bg-[#e5f4ec]">
          Logout
        </Link>
      </div>
    </details>
  )
}

export default Login