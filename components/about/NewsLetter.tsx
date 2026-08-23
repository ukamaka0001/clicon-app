import { ArrowRight } from "lucide-react";
import Image from "next/image";

const brands = [
  "/brands/google.png",
  "/brands/amazon.png",
  "/brands/philips.png",
  "/brands/toshiba.png",
  "/brands/samsung.png",
];

export default function Newsletter() {
  return (
    <section className="bg-[#0F4C81] py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">
            Subscribe to our newsletter
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          {/* Input */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-lg shadow-lg">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 outline-none rounded-md"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 font-semibold transition">
              SUBSCRIBE
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-14"></div>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <Image
                src={brand}
                alt="Brand Logo"
                width={120}
                height={40}
                className="object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}