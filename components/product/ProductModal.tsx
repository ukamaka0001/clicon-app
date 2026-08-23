"use client";


import { useState } from "react";

import Image from "next/image";

import { FaArrowLeft, FaArrowRight, FaChevronDown, FaFacebookF, FaHeart, FaPinterestP, FaShoppingCart, FaStar,
  FaTimes, FaTwitter,} from "react-icons/fa";

import { MdCompareArrows } from "react-icons/md";

export default function ProductModal({
  product,
  closeModal,
}: {
  product: any;
  closeModal: () => void;
}) {
  

  const addToCart = () => {
  const cart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existing = cart.find(
    (item: any) => item.id === product.id
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  window.dispatchEvent(
    new Event("cartUpdated")
  );

  alert("Added to cart!");
};

const addToWishlist = () => {
  const wishlist = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  const exists = wishlist.find(
    (item: any) => item.id === product.id
  );

  if (!exists) {
    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

    alert("Added to wishlist!");
    } else {
    alert("Already in wishlist!");
  }
};

const images = [
  product.image,
  "/images/05.png",
  "/images/03.png",
  "/images/04.png",
  "/images/02.png",
  "/images/06.png",
];

const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      ></div>

      <div className="relative bg-white w-full max-w-6xl rounded-3xl shadow-2xl p-8 max-h-[92vh] overflow-y-auto">

        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-600 hover:text-white transition flex items-center justify-center"
        >
          <FaTimes />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div>

    
            <div className="flex justify-center mb-8 bg-gray-50 rounded-2xl p-6">
              <Image src={images[currentImage]} alt={product.name} width={450} height={320} className="object-contain"/>
            </div>

            <div className="flex items-center gap-4">

              <button className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center">
                <FaArrowLeft />
              </button>

              <div className="grid grid-cols-6 gap-3 flex-1">

                {[
                  "/images/Main Image.png",
                  "/images/05.png",
                  "/images/03.png",
                  "/images/04.png",
                  "/images/02.png",
                  "/images/06.png",
                ].map((image, i) => (
                  <div key={i} onClick={() => setCurrentImage(i)} className={`p-2 h-[80px] flex items-center justify-center cursor-pointer ${
                     currentImage === i  ? "border-2 border-orange-500"  : "hover:border-orange-500" }`}>
                    <Image src={image} alt="" width={65} height={65} className="object-contain" />
                  </div>
                ))}

              </div>

              <button className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center">
                <FaArrowRight />
              </button>

            </div>

          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="flex items-center text-yellow-400 gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <FaStar key={item} size={14} />
                ))}
              </div>

              <p className="text-sm text-gray-600">
                4.7 Star Rating (21,671 User feedback)
              </p>

            </div>
            <h2 className="text-3xl font-bold leading-snug mb-6">
              {product.name}
            </h2>
            <div className="grid grid-cols-2 gap-y-4 mb-6 text-sm">

              <p>
                <span className="font-semibold">Sku:</span> A264671
              </p>

              <p>
                <span className="font-semibold">Availability:</span>
                <span className="text-green-600 ml-2">In Stock</span>
              </p>

              <p>
                <span className="font-semibold">Brand:</span> Apple
              </p>

              <p>
                <span className="font-semibold">Category:</span> {product.category}
              </p>

            </div>
            <div className="flex items-center gap-4 mb-8">

              <h2 className="text-3xl font-bold text-blue-600">
                ${product.price.toLocaleString()}
              </h2>

              <p className="line-through text-gray-400">
                ${product.oldPrice}
              </p>

              <div className="bg-yellow-400 px-3 py-1 rounded-md text-sm font-semibold">
                {product.discount}% OFF
              </div>

            </div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>

                <p className="font-medium mb-3">
                  Color
                </p>

                <div className="flex items-center gap-3 mb-6">

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
              <button onClick={addToCart} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg flex items-center gap-3">
                <FaShoppingCart />
                 Add To Cart
              </button>

              <button className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg">
                Buy Now
              </button>

            </div>
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">

              <button onClick={addToWishlist} className="flex items-center gap-2">
                <FaHeart />
                Add to Wishlist
              </button>

              <button className="flex items-center gap-2">
                <MdCompareArrows />
                Add to Compare
              </button>

              <div className="flex items-center gap-3">

                <span>Share product:</span>

                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />

              </div>

            </div>

            <div className="border rounded-2xl p-5">

              <p className="font-medium mb-5">
                100% Guarantee Safe Checkout
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-7 gap-4">

                {[
                  "/payment/visa.png",
                  "/payment/verve.png",
                  "/payment/paypal.png",
                  "/payment/mastercard.png",
                  "/payment/stripe.png",
                  "/payment/applepay.png",
                  "/payment/amex.png",
                ].map((logo, i) => (
                  <div key={i} className="h-[55px] flex items-center justify-center bg-white shadow-sm">
                    <Image src={logo} alt="" width={60} height={30} className="object-contain"/>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}