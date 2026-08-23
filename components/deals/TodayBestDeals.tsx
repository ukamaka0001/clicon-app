import { FaArrowRight } from "react-icons/fa";

export default function TodayBestDeals() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* LEFT */}
        <div className="flex flex-wrap items-center gap-4">

          <h2 className="text-2xl font-bold text-black">
            Today Best Deals
          </h2>

          <div className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold">
            Deals ends in 16d : 21h : 57m : 23s
          </div>

        </div>

        {/* RIGHT */}
        <button className="flex items-center gap-3 text-orange-400 font-medium hover:text-orange-500">
          Browse All Product
          <FaArrowRight size={14} />
        </button>

      </div>

    </section>
  );
}