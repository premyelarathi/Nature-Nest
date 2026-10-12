import { Routes , Route } from "react-router-dom"
import Hand from "./Hand"
import Plant from "./Plant"
import Address from "./Address"
import Payment from "./Payment"
import Order from "./Order" 
const Handover = () => {
  return (
    <div className="bg-[#ABCABF] h-[665px]">
      <Routes>
        <Route path="/" element={<Hand />} />
        <Route path="Plant" element={<Plant />} />
        <Route path="Address" element={<Address />} />
        <Route path="Payment" element={<Payment />} />
        <Route path="Order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default Handover