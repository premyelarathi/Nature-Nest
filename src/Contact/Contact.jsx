import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  return (
      <div className="">
        <div className="text-[#118032] mt-5 text-lg text-center">GET IN TOUCH</div>
        <h1 className="text-[#075144] font-bold text-5xl font-serif text-center">Contact Us</h1>
        <p className="text-[#7A8391] text-md mt-2 text-center">Have a question or need help? We Would love to hear from you.</p>
        <div className="border-2 rounded-lg border-[#7A8391] h-[500px] mt-3 w-[1100px] mx-auto">
            <div className="grid grid-cols-2 mx-auto ">
                <div>
                    <h2 className="font-serif pr-50 text-4xl mt-10 text-center font-bold text-[#174f43]">
                        Let's Talk
                    </h2>
                <div>
                    <p className="mt-5 text-gray-600 text-center pr-7">Whether you have a question about our products,</p>
                    <p className="mt-0 text-gray-600 text-center pr-6">orders, delivery, or anything else, our team is ready</p>
                    <p className="mt-0 text-gray-600 pl-21">to help.</p>
                </div>

                <div className="mt-8 ml-21 flex items-center gap-4 text-left">
                    <div className="rounded-full bg-[#d9f2e7] p-3 text-[#118032]">
                        <IoCallOutline className="text-xl" />
                    </div>
                    <div>
                        <p className="font-semibold text-[#075144]">Phone</p>
                        <p className="text-gray-600">1800-1800-1800</p>
                    </div>
                </div>
                <div className="mt-8 ml-21 flex items-center gap-4 text-left">
                    <div className="rounded-full bg-[#d9f2e7] p-3 text-[#118032]">
                        <IoMailOutline className="text-xl" />
                    </div>
                    <div>
                        <p className="font-semibold text-[#075144]">Email</p>
                        <p className="text-gray-600">support@naturenest.com</p>
                    </div>
                </div>
                <div className="mt-8 ml-21 flex items-center gap-4 text-left">
                    <div className="rounded-full bg-[#d9f2e7] p-3 text-[#118032]">
                        <IoLocationOutline className="text-xl" />
                    </div>
                    <div>
                        <p className="font-semibold text-[#075144]">Address</p>
                        <p className="text-gray-600">Nature Nest, India</p>
                    </div>
                </div>
                </div>
                <div>
                    <form className="border border-[#F1F8F5] bg-[#F2F9F5] w-[500px] h-[450px] mx-auto mt-7 text-center rounded-lg">
                        <p className="text-[#065949] font-serif font-bold text-lg mt-5">Send Us a Message</p>
                        <label className="block mb-1 pr-85 mt-3 text-base">Name:</label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="bg-white h-8 pl-7 w-100 rounded-lg"
                            />
                            <label className="block mb-1 pr-85 mt-2 text-base">Email:</label>
                        <input
                            type="Email"
                            placeholder="Enter your Email"
                            className="bg-white outline-none h-8 pl-7 w-100 rounded-lg "
                            />
                            <label className="block mb-1 pr-67 mt-2 text-base">Phone Number:</label>
                        <input
                            type="text"
                            placeholder="Enter your Number"
                            className="bg-white h-8 pl-7 w-100 rounded-lg"
                            />
                            <label className="block mb-1 pr-80 mt-2 text-base">Message:</label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            className="w-100 pl-7 rounded-lg border border-gray-300 outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-100 py-2 rounded-lg bg-[#087f5b] text-white font-semibold hover:bg-[#066b4d]"
                            >Send Message</button>
                    </form>

                </div>

            </div>
        </div>
      </div>
  )
}

export default Contact
