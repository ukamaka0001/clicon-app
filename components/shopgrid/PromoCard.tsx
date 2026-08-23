import Image from "next/image";
import { FaApple } from "react-icons/fa";

export default function PromoCard() {
  return (
    <div className="border-3 border-orange-400 p-6 text-black overflow-hidden">

      <div className="h-[300px] relative mb-5">
        <Image src="/images/image-7.png" alt="" fill className="object-contain"/>
      </div>
      <div className="flex flex-col items-center text-center">
      <h1 className="flex items-center gap-2 text-3xl font-bold">
        <FaApple />
        WATCH
      </h1>

      <p className="text-orange-400 text-sm mb-2">
        Series 7
      </p>

      <h2 className="text-2xl font-bold mb-3">
        Heavy on Features. Light on Price.
      </h2>
      <div className="flex items-center gap-2">
        <span>Only for:</span>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mb-2">
           $299 USD
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <button className="bg-orange-600 px-20 py-3 text-sm font-medium">
          Add To Cart
        </button>

        <button className="border border-orange-500 text-orange-400 px-20 py-3 text-sm">
          View Details →
        </button>
        </div>
      </div>

    </div>
  );
}