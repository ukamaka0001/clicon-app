import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function HelpHero() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

          <div>
            <span className="inline-block bg-yellow-300 text-gray-900 text-xs font-bold px-3 py-1 uppercase rounded">
              Help Center
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mt-4">
              How can we help you?
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">

              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

                <input
                  type="text"
                  placeholder="Enter your question or keyword"
                  className="w-full h-14 border border-gray-300 rounded-md pl-12 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 rounded-md h-14 transition">
                SEARCH
              </button>

            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/Rectangle16.png"
              alt="Customer Support"
              width={600}
              height={550}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}