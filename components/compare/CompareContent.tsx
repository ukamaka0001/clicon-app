"use client";

import Image from "next/image";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

export default function ComparePage() {
  const products = [
    {
      image: "/images/Image-53.png",
      name: "Gaming Keyboard & Mouse",
      price: "$899.00",
      soldBy: "Clicon",
      brand: "ARES",
      model: "ARES M2",
      stock: "IN STOCK",
      size: "67 x 105 cm",
      weight: "650 g",
      rating: "5.0",
    },

    {
      image: "/images/Image-54.png",
      name: "Apple iMac 24",
      price: "$1,699.00",
      soldBy: "Apple",
      brand: "Apple",
      model: "iMac 24",
      stock: "IN STOCK",
      size: "67 x 103 cm",
      weight: "3.4 kg",
      rating: "5.0",
    },

    {
      image: "/images/Image-55.png",
      name: "Samsung Galaxy S21",
      price: "$699.00",
      soldBy: "Clicon",
      brand: "Samsung",
      model: "S21 FE",
      stock: "OUT OF STOCK",
      size: "6.4 inches",
      weight: "177 g",
      rating: "4.8",
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-7xl mx-auto px-4 pb-16 py-12">
        <div className="border-gray-200 rounded overflow-x-auto">

          <table className="w-full min-w-[1100px] border-collapse">

            <thead>
              <tr>
                <th className="border border-gray-200 p-4 w-[220px]"></th>

                {products.map((product, index) => (
                  <th
                    key={index}
                    className="border border-gray-200 p-6 align-top"
                  >
                    <div className="flex flex-col items-center">

                      <Image
                        src={product.image}
                        alt={product.name}
                        width={180}
                        height={180}
                        className="object-contain"
                      />

                      <h3 className="font-medium mt-4 text-center">
                        {product.name}
                      </h3>

                      <div className="flex gap-3 mt-4">

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                          <FaShoppingCart />
                          Add To Cart
                        </button>

                        <button className="border p-3 rounded-lg hover:bg-gray-100">
                          <FaHeart />
                        </button>

                      </div>

                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="bg-gray-200 font-medium p-4">
                  Customer Feedback
                </td>

                {products.map((p, i) => (
                  <td key={i} className="bg-gray-200 p-4 text-center">

                    <div className="flex justify-center gap-1 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                      ))}
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                      ({p.rating})
                    </p>

                  </td>
                ))}
              </tr>
              <tr>
                <td className="font-medium p-4">
                  Price
                </td>

                {products.map((p, i) => (
                  <td key={i} className="p-4 text-center">
                    <span className="text-blue-600 font-bold">
                      {p.price}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-gray-200 font-medium p-4">
                  Sold By
                </td>

                {products.map((p, i) => (
                  <td key={i} className="bg-gray-200 p-4 text-center">
                    {p.soldBy}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="font-medium p-4">
                  Brand
                </td>

                {products.map((p, i) => (
                  <td key={i} className="p-4 text-center">
                    {p.brand}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="bg-gray-200 font-medium p-4">
                  Model
                </td>

                {products.map((p, i) => (
                  <td key={i} className="bg-gray-200 p-4 text-center">
                    {p.model}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="font-medium p-4">
                  Stock Status
                </td>

                {products.map((p, i) => (
                  <td key={i} className="p-4 text-center">

                    <span
                      className={
                        p.stock === "IN STOCK"
                          ? "text-green-600 font-semibold"
                          : "text-red-500 font-semibold"
                      }
                    >
                      {p.stock}
                    </span>

                  </td>
                ))}
              </tr>

              <tr>
                <td className="bg-gray-200 font-medium p-4">
                  Size
                </td>

                {products.map((p, i) => (
                  <td key={i} className="bg-gray-200 p-4 text-center">
                    {p.size}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="font-medium p-4">
                  Weight
                </td>

                {products.map((p, i) => (
                  <td key={i} className="p-4 text-center">
                    {p.weight}
                  </td>
                ))}
              </tr>

            </tbody>

          </table>

        </div>
      </div>
    </main>
  );
}