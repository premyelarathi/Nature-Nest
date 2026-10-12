import { Link } from "react-router-dom"

const Hand = () => {
  return (
    <div className="bg-[#ABCABF] py-4">
      <h3 className="pt-4 mt-10 text-center text-4xl font-bold font-serif text-[#084137]">HAND OVER FORM</h3>
      <div className="mx-auto mt-6 w-full max-w-[800px] rounded-lg border border-white bg-white p-8">
        <form className="flex flex-col">
          <label className="">First Name:</label>
        <input 
          type="text"
          placeholder="Enter Your First Name"
          className=" h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60 required"
          />
          <label className="mt-4">Second Name:</label>
          <input 
          type="text"
          placeholder="Enter Your Second Name"
          className=" h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60 required"
          />
          <label className="mt-4">Email:</label>
          <input 
          type="text"
          placeholder="Enter Your Email"
          className="h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60 required"
          />
          <label className="mt-4">Phone no:</label>
          <input 
          type="text"
          placeholder="Enter Your Phone no."
          required
          className=" h-10 rounded-lg pl-5 text-black border-1 border-[#C0C6C4] placeholder:text-black/60 "
          />
          <Link
            to="/Handover/Plant"
            className="bg-[#064E3B] h-15 text-white font-bold text-lg mt-6 rounded-lg self-center justify-center text-center pt-4 w-30">
            Next
          </Link>
          </form>
      </div>
    </div>
  )
}

export default Hand