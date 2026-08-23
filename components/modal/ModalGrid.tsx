"use client";

import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaFacebookF,
  FaHeart,
  FaPinterestP,
  FaShoppingCart,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";

export default function ModalGrid() {
  return (
    <section className="bg-white rounded-3xl shadow-sm p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div>

          <div className="flex justify-center bg-gray-50 rounded-2xl p-8 mb-8">
            <Image
              src="/images/Main Image.png"
              alt="MacBook"
              width={450}
              height={350}
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-4">

            <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <FaArrowLeft />
            </button>

            <div className="grid grid-cols-6 gap-3 flex-1">

              {[
                "/images/Main Image.png",
                "/images/02.png",
                "/images/03.png",
                "/images/04.png",
                "/images/05.png",
                "/images/06.png",
              ].map((image, index) => (
                <div
                  key={index}
                  className={`border rounded-xl p-2 h-[80px] flex items-center justify-center cursor-pointer ${
                    image === "/images/Main Image.png"
                      ? "border-orange-500 border-2"
                      : "hover:border-orange-500"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>

            <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <FaArrowRight />
            </button>

          </div>

        </div>
        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={14} />
              ))}
            </div>

            <p className="text-sm text-gray-500">
              4.7 Star Rating (21,671 User Feedback)
            </p>

          </div>

          <h1 className="text-3xl font-bold mb-6">
            2025 Apple MacBook Pro with Apple M2 Max Chip
          </h1>

          <div className="grid grid-cols-2 gap-y-4 text-sm mb-8">

            <p>
              <span className="font-semibold">SKU:</span> A264671
            </p>

            <p>
              <span className="font-semibold">Availability:</span>
              <span className="text-green-600 ml-2">In Stock</span>
            </p>

            <p>
              <span className="font-semibold">Brand:</span> Apple
            </p>

            <p>
              <span className="font-semibold">Category:</span> Electronics
            </p>

          </div>

          <div className="flex items-center gap-4 mb-8">

            <h2 className="text-3xl font-bold text-blue-600">
              $1699
            </h2>

            <span className="line-through text-gray-400">
              $1999
            </span>

            <span className="bg-yellow-400 px-3 py-1 rounded-md text-sm font-semibold">
              21% OFF
            </span>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div>

              <p className="font-medium mb-3">
                Color
              </p>

              <div className="flex gap-3 mb-6">

                <div className="w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                </div>

                <div className="w-6 h-6 rounded-full bg-gray-600"></div>

              </div>

              <p className="font-medium mb-3">
                Memory
              </p>

              <button className="w-full border rounded-lg px-4 py-3 flex items-center justify-between">
                16GB Unified Memory
                <FaChevronDown />
              </button>

            </div>

            <div>

              <p className="font-medium mb-3">
                Size
              </p>

              <button className="w-full border rounded-lg px-4 py-3 flex items-center justify-between mb-6">
                14-inch Liquid Retina XDR
                <FaChevronDown />
              </button>

              <p className="font-medium mb-3">
                Storage
              </p>

              <button className="w-full border rounded-lg px-4 py-3 flex items-center justify-between">
                1TB SSD Storage
                <FaChevronDown />
              </button>

            </div>

          </div>

          <div className="flex flex-wrap gap-4 mb-8">

            <div className="flex items-center border rounded-lg overflow-hidden">

              <button className="px-4 py-3">-</button>

              <div className="px-5">01</div>

              <button className="px-4 py-3">+</button>

            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-3">
              <FaShoppingCart />
              Add To Cart
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white">
              Buy Now
            </button>

          </div>

          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">

            <button className="flex items-center gap-2">
              <FaHeart />
              Add to Wishlist
            </button>

            <button className="flex items-center gap-2">
              <MdCompareArrows />
              Add to Compare
            </button>

            <div className="flex items-center gap-3">
              <span>Share Product:</span>
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
            </div>

          </div>

          <div className="border rounded-2xl p-5">

            <p className="font-semibold mb-5">
              100% Guarantee Safe Checkout
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">

              {[
                "/payment/visa.png",
                "/payment/verve.png",
                "/payment/paypal.png",
                "/payment/mastercard.png",
                "/payment/stripe.png",
                "/payment/applepay.png",
                "/payment/amex.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="border rounded-lg h-[55px] flex items-center justify-center bg-white"
                >
                  <Image
                    src={logo}
                    alt=""
                    width={60}
                    height={30}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}