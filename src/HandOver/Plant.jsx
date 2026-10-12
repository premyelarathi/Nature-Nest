import { Link } from "react-router-dom"
import plant1 from "../assets/Images/plant1.png"
const Plant = () => {
  return (
    <div className="bg-[#ABCABF] py-4">
      <h3 className="pt-4 text-center text-4xl pt-8 font-bold">PLANT DETAILS</h3>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex w-[50%] justify-center">
            <img src={plant1} alt="plant1" className="h-[420px] w-full max-w-[360px] object-contain" />
        </div>
      <div className="mx-auto mr-30 mt-10 w-full max-w-[800px] rounded-lg border border-white bg-white p-10">
        <form className="flex flex-col">
          <label className=" font-semibold">Plant Name:</label>
        <input 
          type="text"
          placeholder="Enter Plant Name"
          className=" h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60"
          />
          <label className="mt-4  font-semibold">Plant Type:</label>
          <input 
          type="number"
          placeholder="Enter Plant Type"
          className=" h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60"
          />
          <label className="mt-4 font-semibold">Plant Quantity:</label>
          <input 
          type="text"
          placeholder="Enter No. of Quantity"
          className="h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60"
          />
          <Link
            to="/Handover/Address"
            className="bg-[#064E3B] h-15 text-white font-bold text-lg mt-6 rounded-lg self-center justify-center text-center pt-4 w-30">
            Next
          </Link>
          </form>
      </div>

        </div>
    </div>
  )
}

export default Plant