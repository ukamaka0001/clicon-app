import { FaChevronDown, FaPhone, FaMapMarkerAlt, FaExchangeAlt, FaHeadset, FaInfoCircle, } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="bg-white border-b text-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">

        <div className="flex flex-wrap items-center gap-6">
           <button className="flex items-center gap-2 font-semibold">
               All Category
               <FaChevronDown className="text-xs" />
           </button>
           <button className="flex items-center gap-2 text-orange-500 font-medium">
               <FaMapMarkerAlt />
               Track Order
           </button>

            <button className="flex items-center gap-2 hover:text-blue-600">
              <FaExchangeAlt />
              Compare
            </button>

           <button className="flex items-center gap-2 hover:text-blue-600">
              <FaHeadset />
              Customer Support
           </button>

           <button className="flex items-center gap-2 hover:text-blue-600">
              <FaInfoCircle />
               Need Help
           </button>

      </div>

        <div className="flex items-center gap-2 font-semibold">
          <FaPhone />
          +1-202-555-0104
        </div>

      </div>
    </div>
  );
}