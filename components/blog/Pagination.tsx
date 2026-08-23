"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-3 py-12">

      {/* Previous */}
      <button
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition"
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-12 h-12 rounded-full text-sm font-semibold transition ${
            currentPage === page
              ? "bg-orange-500 text-white"
              : "border border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500"
          }`}
        >
          {page.toString().padStart(2, "0")}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() =>
          currentPage < pages.length && setCurrentPage(currentPage + 1)
        }
        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition"
      >
        <FiChevronRight size={20} />
      </button>

    </div>
  );
}