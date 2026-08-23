"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ShopCategories() {
  const [page, setPage] = useState(0);

  const categories = [
    {
      id: 1,
      image: "/images/Image-12.png",
      name: "Computer & Laptop",
    },
    {
      id: 2,
      image: "/images/Image-13.png",
      name: "SmartPhone",
    },
    {
      id: 3,
      image: "/images/Image-14.png",
      name: "Headphones",
    },
    {
      id: 4,
      image: "/images/Image-16.png",
      name: "Accessories",
    },
    {
      id: 5,
      image: "/images/Image-17.png",
      name: "Camera & Photo",
    },
    {
      id: 6,
      image: "/images/Image-18.png",
      name: "TV & Homes",
    },
  ];

  const pages = [
    categories.slice(0, 3),
    categories.slice(3, 6),
  ];

  const previousPage = () => {
    setPage((prev) => (prev === 0 ? 1 : 0));
  };

  const nextPage = () => {
    setPage((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-2xl font-bold text-center mb-8">
        Shop with Categories
      </h2>

      <div className="flex items-center gap-4">

        <button
          onClick={previousPage}
          className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition shrink-0">
          <FaArrowLeft />
        </button>

        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pages[page].map((category) => (
            <div
              key={category.id}
              className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center text-center hover:shadow-lg hover:border-orange-500 cursor-pointer transition"
            >
              <div className="w-full h-[140px] flex items-center justify-center mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-full object-contain"
                />
              </div>

              <p className="font-medium text-gray-800">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPage}
          className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition shrink-0"
        >
          <FaArrowRight />
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => setPage(0)}
          className={`w-3 h-3 rounded-full ${
            page === 0 ? "bg-orange-600" : "bg-gray-300"
          }`}
        />

        <button
          onClick={() => setPage(1)}
          className={`w-3 h-3 rounded-full ${
            page === 1 ? "bg-orange-600" : "bg-gray-300"
          }`}
        />
      </div>

    </section>
  );
}