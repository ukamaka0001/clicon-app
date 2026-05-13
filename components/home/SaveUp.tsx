import { FaArrowRight } from "react-icons/fa";

export default function SaveUp() {
  return (
    <section className="w-full mx-auto px-8 py-8">

      <div className="relative bg-orange-200 px-10 py-12 flex flex-col lg:flex-row items-center justify-between overflow-hidden min-h-[420px]">
        <div className="max-w-[500px] z-10">
          <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded mb-6 shadow-sm">
            SAVE UP TO $200.00
          </button>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Macbook Pro
          </h2>
          <p className="text-gray-700 text-base mb-8">Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage.</p>
          <button className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 font-medium">
            Shop Now
            <FaArrowRight size={14} />
          </button>

        </div>
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="absolute left-0 top-10 w-24 h-24 rounded-full bg-orange-200 border-4 border-white text-black flex items-center justify-center text-2xl font-bold shadow-lg z-10">
            $1999
          </div>
          <img src="/images/Image-35.png" alt="Macbook Pro" className="w-full max-w-[500px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}