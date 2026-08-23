import { FaCheck, FaChevronDown } from "react-icons/fa";

export default function ShopTopNav() {
  return (
    <div className="bg-blue-800 text-white px-4 py-3">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm">
          Welcome to Clicon online eCommerce store.
        </p>
        <div className="flex items-center gap-6">
          <div className="relative group">

            <button className="flex items-center gap-2 text-sm">
              <img src="/images/us-flag.png" alt="" className="w-5 h-5 rounded-full object-cover"/>
               English
               <FaChevronDown size={10} />
            </button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-44 overflow-hidden z-50">

              <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center gap-2">
                  <img src="/images/us-flag.png" alt="" className="w-5 h-5 rounded-full"/>
                  English
                </div>

                <FaCheck className="text-green-600 text-xs" />
              </div>

              <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="/images/china-flag.png"
                  alt=""
                  className="w-5 h-5 rounded-full"
                />
                Mandarin
              </div>

              <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <img
                  src="/images/russia-flag.png"
                  alt=""
                  className="w-5 h-5 rounded-full"
                />
                Russian
              </div>

            </div>

          </div>
          <div className="relative group">

            <button className="flex items-center gap-2 text-sm">
              <span className="text-red-400 font-medium">
                USD
              </span>

              <FaChevronDown size={10} />
            </button>
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-28 overflow-hidden z-50">

              <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <span className="text-red-500 font-medium">
                  USD
                </span>

                <FaCheck className="text-green-600 text-xs" />
              </div>

              <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                EUR
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}