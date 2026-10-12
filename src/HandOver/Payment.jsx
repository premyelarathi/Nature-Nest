import { Link } from "react-router-dom"
import payment from "../assets/Images/payment.png"

const Payment = () => {
  return (
    <div className="bg-[#ABCABF] px-4 py-4">
      <h3 className="pt-4 text-center mt-20 text-4xl font-bold">PAYMENT DETAILS</h3>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex w-[50%] justify-center">
            <img src={payment} alt="Address illustration" className="h-[420px] w-full max-w-[360px] object-contain" />
        </div>
      <div className="mx-auto mr-25  w-full max-w-[800px] rounded-lg border border-white bg-white p-20">
        <form className="flex flex-col">
          <select required className="h-10 rounded-lg border border-[#C0C6C4] p-2">
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
          </select>

          <Link
            to="/Handover/Order"
            className="bg-[#064E3B] h-15 text-white font-bold text-lg mt-6 rounded-lg self-center justify-center text-center pt-4 w-30"
          >
            Submit
          </Link>
        </form>
      </div>
      
        </div>
    </div>
  )
}

export default Payment
