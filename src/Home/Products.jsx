import p1 from "../assets/Images/p1.jpg"
import p2 from "../assets/Images/p2.jpg"
import p3 from "../assets/Images/p3.jpg"
import p4 from "../assets/Images/p4.jpg"
import p5 from "../assets/Images/p5.jpg"
import p6 from "../assets/Images/p6.jpg"
import p7 from "../assets/Images/p7.jpg"
import p8 from "../assets/Images/p8.jpg"
import p9 from "../assets/Images/p9.jpg"
import p10 from "../assets/Images/p10.jpg"
import style1 from "../assets/Images/style 1.png"

const Products = () => {
  return (
    <section className="p-5">
      <div className="text-4xl relative ml-10 text-center text-[#0D3D37] mt-5 font-bold">
        Popular Products
        <img 
        src={style1}
        className="object-contain ml-68 -mt-8 w-[900px] h-[120px]"
        />
      </div>
      
      
      <div className="grid grid-cols-5 gap-8">

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p1} alt="" className="w-full h-full  object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Calathea Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹499</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p2} alt="" className="w-full h-full  object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Money Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹399</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p3} alt="" className="w-full h-full  object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Snake Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹599</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p4} alt="" className="w-full h-full  object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Peace Lily Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹699</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p5} alt="" className="w-full h-full  object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Tulasi Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹299</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p6} alt="" className="w-full h-full  object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Cactus Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹349</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p7} alt="" className="w-full h-full  object-cover"  />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Lavender Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹449</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p8} alt="" className="w-full h-full  object-cover"  />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Mint Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹249</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p9} alt="" className="w-full h-full  object-cover"  />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Rose Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹549</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
          <div className="h-[200px] bg-gray-100 flex items-center justify-center">
            <img src={p10} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="p-4">
            <h2 className="font-bold text-lg">Bamboo Plant</h2>
            <p className="text-green-700 font-bold mt-2">₹499</p>

            <button className="bg-green-700 text-white w-full mt-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
