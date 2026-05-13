import { FaChevronDown, FaPhone } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="bg-white border-b text-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">

        <div className="flex flex-wrap items-center gap-5">

          <button className="flex items-center gap-1 font-semibold">
            All Category <FaChevronDown className="text-xs" />
          </button>

          <span className="cursor-pointer hover:text-blue-600">
            Track Order
          </span>

          <span className="cursor-pointer hover:text-blue-600">
            Compare
          </span>

          <span className="cursor-pointer hover:text-blue-600">
            Customer Support
          </span>

          <span className="cursor-pointer hover:text-blue-600">
            Need Help
          </span>

        </div>

        <div className="flex items-center gap-2 font-semibold">
          <FaPhone />
          +1-202-555-0104
        </div>

      </div>
    </div>
  );
}