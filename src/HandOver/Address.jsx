import { Link } from "react-router-dom"
import address from "../assets/Images/address.png"
const Address = () => {
  return (
    <div className="bg-[#ABCABF] px-4 pb-4 pt-8">
      <div className="mx-auto w-full max-w-[1100px]">
        <h3 className="pb-8 text-4xl font-bold text-center lg:text-left lg:ml-8">ADDRESS DETAILS</h3>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="w-full rounded-lg bg-white p-6 shadow-sm lg:w-[62%]">
            <form className="flex flex-col">
              <label className="font-semibold">Full Name:</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="h-10 rounded-lg border border-[#C0C6C4] pl-5 text-black placeholder:text-black/60"
              />
              <label className="mt-4 font-semibold">Email:</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="h-10 rounded-lg border border-[#C0C6C4] pl-5 text-black placeholder:text-black/60"
              />
              <label className="mt-4 font-semibold">Address:</label>
              <textarea
                type="text"
                placeholder="Enter No. of Quantity"
                className="h-24 rounded-lg border border-[#C0C6C4] p-3 text-black placeholder:text-gray-500"
              />
              <label className="mt-4 font-semibold">City:</label>
              <input
                type="text"
                placeholder="Enter Your City"
                className="h-10 rounded-lg border border-[#C0C6C4] pl-5 text-black placeholder:text-black/60"
              />
              <label className="mt-4 font-semibold">Enter Your State:</label>
              <input
                type="text"
                placeholder="Enter Your State"
                className="h-10 rounded-lg border border-[#C0C6C4] pl-5 text-black placeholder:text-black/60"
              />
              <label className="mt-4 font-semibold">Enter Your pin Code:</label>
              <input
                type="text"
                placeholder="Enter Your Pin Code"
                className="h-10 rounded-lg border border-[#C0C6C4] pl-5 text-black placeholder:text-black/60"
              />

              <Link
                to="/Handover/Payment"
                className="mt-6 h-15 w-30 self-center rounded-lg bg-[#064E3B] pt-4 text-center text-lg font-bold text-white"
              >
                Next
              </Link>
            </form>
          </div>
          <div className="flex w-[50%] justify-center">
            <img src={address} alt="Address illustration" className="ml-6 h-[420px] w-full max-w-[360px] object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address
