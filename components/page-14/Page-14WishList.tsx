"use client";

import Link from "next/link";
import { FaHome, FaShoppingCart } from "react-icons/fa";


const wishlistItems = [
  {
    image: "/images/Image-3.png",
    name: "Bose Sport Earbuds - Wireless Earphones-Bluetooth in Ear Headphones for workouts and Running,Triple Black",
    price: "$1,500",
    status: "IN STOCK",
  },
  {
    image: "/images/Image-23.png",
    name: "Simple Mobile 5G LTE Gaming Phone",
    price: "$2,300",
    status: "IN STOCK",
  },
  {
    image: "/images/Image-21.png",
    name: "Portable Washing Machine",
    price: "$750",
    status: "IN STOCK",
  },
  {
    image: "/images/Image-1.png",
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphone Touch Control with Wireless charging case IPX8 Waterproof Stereo Earphone in-Ear",
    price: "$250",
    status: "OUT OF STOCK",
  },
  {
    image: "/images/Image-10.png",
    name: "Wyze Cam Pan v3 Indoor Camera",
    price: "$1,499",
    status: "IN STOCK",
  },
];

export default function WishlistPage() {
  return (
    <main>
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
            <FaHome size={16} className="text-gray-400" />
              <Link href="/" className="text-gray-500">
              Home
              </Link>
            <span className="text-gray-400">{">"}</span>
            <span className="text-sky-500">Wishlist</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">

          <div className="px-6 py-5 border-b border-gray-200">
            <h1 className="text-xl font-semibold">
              Wishlist
            </h1>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[950px]">

              <div className="grid grid-cols-12 bg-gray-200 border-b border-gray-200 px-6 py-4 text-xs font-semibold uppercase text-gray-600">

                <div className="col-span-6">
                  Products
                </div>

                <div className="col-span-2">
                  Price
                </div>

                <div className="col-span-2">
                  Stock Status
                </div>

                <div className="col-span-2">
                  Actions
                </div>

              </div>

              {wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-center px-6 py-5">

                  <div className="col-span-6 flex items-center gap-4">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"/>

                    <p className="text-sm text-gray-700">
                      {item.name}
                    </p>

                  </div>

                  <div className="col-span-2 font-medium">
                    {item.price}
                  </div>

                  <div className="col-span-2">

                    <span
                      className={
                        item.status === "IN STOCK"
                          ? "text-green-600 font-semibold text-sm"
                          : "text-red-500 font-semibold text-sm"
                      }>
                      {item.status}
                    </span>

                  </div>
                  <div className="col-span-2 flex items-center gap-3">

                    <button
                    disabled={item.status === "OUT OF STOCK"}
                      className={`flex items-center gap-4 px-4 py-2 rounded text-white text-xs font-medium ${
                        item.status === "OUT OF STOCK"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}>
                       ADD TO CART
                        <FaShoppingCart />
                    </button>

                    <button className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100">
                      ✕
                    </button>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

      </section>

    </main>
  );
}