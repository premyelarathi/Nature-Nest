
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineShoppingBag, MdCollectionsBookmark } from "react-icons/md";
import { FiPhone, FiInfo } from "react-icons/fi";
import Logo from "./Nav Left/logo";
import Search from "./Nav Middle/Search";
import Whistlist from "./Nav Right/Whistlist";
import Cart from "./Nav Right/Cart";
import Login from "./Nav Right/login";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  function handleLogout() {
    localStorage.removeItem('userEmail');
    navigate('/sec');
  }

  return (
    <nav className="flex h-20 items-center bg-[#D4E9D9] px-5 text-black">
      <div className="flex w-full items-center gap-6">
        <Logo />

        <ul className="flex items-center gap-5 font-medium">
          <li>
            <Link to="/Home" className={`flex cursor-pointer items-center gap-1.5 ${isActive('/Home') ? 'text-green-800 underline' : 'text-black'}`}>
              <AiFillHome className="text-base" />
              Home
            </Link>
          </li>

          <li>
            <Link to="/Shop" className={`flex items-center gap-1.5 ${isActive('/Shop') ? 'text-green-800 underline' : 'text-black'}`}>
              <MdOutlineShoppingBag className="text-base" />
              Shop
            </Link>
          </li>

          <li>
            <Link to="/Handover" className={`flex items-center gap-1 ${isActive('/Handover') ? 'text-green-800 underline' : 'text-black'}`}>
              <MdCollectionsBookmark className="text-base" />
              Hand Over
            </Link>
          </li>

          <li>
            <Link to="/Contact" className={`flex items-center gap-1 ${isActive('/Contact') ? 'text-green-800 underline' : 'text-black'}`}>
              <FiPhone className="text-base" />
              Contact
            </Link>
          </li>

          <li>
            <Link to="/About" className={`flex items-center gap-1 ${isActive('/About') ? 'text-green-800 underline' : 'text-black'}`}>
              <FiInfo className="text-base" />
              About
            </Link>
          </li>
        </ul>

        <div className="ml-auto w-80">
          <Search />
        </div>

        <ul className="ml-6 flex items-center gap-5">
          <li><Whistlist /></li>
          <li><Cart /></li>
          <li><Login /></li>

          <li>
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
