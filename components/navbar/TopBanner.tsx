import { FaArrowRight, FaTimes } from "react-icons/fa";

export default function TopBanner() {
  return (
    <div className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="bg-yellow-300 text-black px-2 py-1 font-semibold">
            Black
          </span>
          <span>Friday</span>
        </div>

        <div className="hidden md:block">
          Up to 59% OFF
        </div>

        <button className="bg-yellow-300 text-black px-3 py-1 flex items-center gap-2">
          Shop Now <FaArrowRight />
        </button>

        <button className="ml-2">
          <FaTimes />
        </button>

      </div>
    </div>
  );
}