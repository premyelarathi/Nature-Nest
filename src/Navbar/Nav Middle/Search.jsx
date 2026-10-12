import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="relative w-full">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black/70" size={"19"}/>
        <input
        type="text"
        placeholder="Search Fresh Fruits"
        className="h-10 w-full rounded-full border border-black/20 bg-white/70 pl-11 pr-4 text-sm text-black  placeholder:text-black/60 focus:border-[#064e3b]"
        />
    </div>
  )
}

export default Search