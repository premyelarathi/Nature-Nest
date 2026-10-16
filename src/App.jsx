import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Handover from "./HandOver/Handover"
import AboutPage from "./About/AboutPage"
import Contact from "./Contact/Contact"
import ShopApp from "./Shop/App"
import Navbar from "./Navbar/Navbar"
import Cart from "./Navbar/Nav Right/Cart"
import Profile from "./Navbar/Nav Right/Profile"
import { Wel } from "./Shop/nature"
import { Sec } from "./Shop/sec"
import { Reg } from "./Shop/Reg"
import { Log } from "./Shop/Log"
import CartPage from "./Shop/CartPage"
import Checkout from "./Shop/checkout"
import Footer from "./footer/footer"

export function PagesWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<Wel />} />
        <Route path="/welcome" element={<Wel />} />
        <Route path="/sec" element={<Sec />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/Log" element={<Log />} />
        <Route element={<PagesWithNavbar />}>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Shop/*" element={<ShopApp />} />
          <Route path="/Handover/*" element={<Handover />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Wishlist" element={<main className="p-8 text-center"><h1 className="text-3xl font-bold">Wishlist</h1><p className="mt-4">No items added in wishlist</p></main>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Profile" element={<main className="p-8 text-center"><h1 className="text-3xl font-bold">Profile</h1><p className="mt-4">Your profile information will appear here.</p></main>} />
          <Route path="/Checkout" element={<Checkout />} />
        </Route>
    </Routes>
  )
}

export default App