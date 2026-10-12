import { Link } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Order = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ABCABF] px-4">

      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-500 hover:scale-105">

        <div className="mb-4 flex justify-center">
          <FaCheckCircle
            className="text-5xl text-green-600 transition-transform duration-500 hover:scale-125"
          />
        </div>

        <h1 className="text-2xl font-bold text-[#064E3B] transition-all duration-500 hover:scale-105">
          Thank you!
        </h1>

        <div className="text-center">

  <p className="mt-3 text-lg font-medium text-gray-700">
    Your handover request has been submitted successfully.
  </p>

  <div className="mt-5 flex items-center justify-center gap-6 rounded-xl bg-green-50 px-6 py-4">

    <div className="flex items-center gap-2">
      <FaWhatsapp className="text-3xl text-green-600" />
      <span className="text-lg font-semibold text-green-700">
        WhatsApp
      </span>
    </div>

    <div className="h-8 w-px bg-gray-300"></div>

    <div className="flex items-center gap-2">
      <MdEmail className="text-3xl text-green-700" />
      <span className="text-lg font-semibold text-green-700">
        Email
      </span>
    </div>

    <div className="h-8 w-px bg-gray-300"></div>

    <p className="text-lg text-gray-700">
      Your details have been sent to
      <span className="ml-1 font-bold text-green-700">
        WhatsApp and Email.
      </span>
    </p>

  </div>

  <p className="mt-5 text-lg text-gray-600">
    We will contact you shortly with the handover details.
  </p>

</div>

        <Link
          to="/Home"
          className="mt-6 inline-block rounded-lg bg-[#064E3B] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-110 hover:bg-[#08634A] active:scale-95"
        >
          Back To Home
        </Link>

      </div>
    </div>
  )
}

export default Order