const Profile = () => {
  return (
      <div className="mx-auto p-5 max-w-5xl">
        <p className="text-center text-lg text-[#118032]">MY ACCOUNT</p>
        <h1 className="mt-2 text-center font-serif text-5xl font-bold text-[#075144]">My Profile</h1>
        <p className="mt-3 text-center text-gray-600">View and update your personal information.</p>

        <div className="mt-8 grid gap-8 rounded-lg border-2 border-[#d5e5dc] grid-cols-2 p-10">
          <div className="text-center pl-10 text-left">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#d9f2e7] font-serif text-4xl font-bold text-[#118032] md:mx-0">
              N
            </div>
            <h2 className="mt-5 font-serif text-3xl font-bold text-[#174f43]">Your Profile</h2>
            <p className="mt-2 text-gray-600">Your Nature Nest account information</p>

            <div className="mt-8 space-y-5 text-left">
              <div>
                <p className="font-semibold text-[#075144]">Name</p>
                <p className="text-gray-600">Your Name</p>
              </div>
              <div>
                <p className="font-semibold text-[#075144]">Email</p>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-[#075144]">Phone</p>
                <p className="text-gray-600">1800-1800-1800</p>
              </div>
            </div>
          </div>

          <form className="rounded-lg bg-[#F2F9F5] p-6">
            <h2 className="text-center font-serif text-2xl font-bold text-[#065949]">Edit Profile</h2>

            <label className="mt-5 block text-sm font-medium text-gray-700">Name</label>
            <input type="text" 
                placeholder="Enter your name" 
                className="bg-white outline-none h-8 pl-7 w-100 rounded-lg " />

            <label className="mt-4 block text-sm font-medium text-gray-700">Email</label>
            <input type="email" 
                placeholder="Enter your email" 
                className="bg-white outline-none h-8 pl-7 w-100 rounded-lg " />

            <label className="mt-4 block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" 
                placeholder="Enter your phone number" 
                className="bg-white outline-none h-8 pl-7 w-100 rounded-lg "/>

            <label className="mt-4 block text-sm font-medium text-gray-700">Address</label>
            <textarea
                rows="4"
                placeholder="Enter your Address"
                className="w-100 pl-7 rounded-lg border border-gray-300 outline-none"
            ></textarea>
            <button type="button" className="mt-5 w-full rounded-md bg-[#087f5b] py-2 font-semibold text-white hover:bg-[#066b4d]">
              Save Changes
            </button>
          </form>
        </div>
      </div>
  )
}

export default Profile