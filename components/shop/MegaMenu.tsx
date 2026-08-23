"use client";

import Image from "next/image";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function MegaMenu() {

  const categories = [
    "Computer & Laptop",
    "Computer Accessories",
    "SmartPhone",
    "Headphone",
    "Gaming",
    "Camera",
    "TV",
    "Smart Watch",
    "Speaker",
    "Tablet",
    "Printer",
  ];

  const brands = [
    "All",
    "iPhone",
    "Samsung",
    "Realme",
    "Xiaomi",
    "Oppo",
    "Vivo",
    "OnePlus",
    "Huawei",
    "Infinix",
    "Tecno",
  ];

  const products = [
    {
      image: "/images/Image-1.png",
      title: "TOZO T6 Earbuds",
      price: "$70",
    },
    {
      image: "/images/Image-20.png",
      title: "Samsung Galaxy",
      price: "$2,300",
    },
    {
      image: "/images/Image-19.png",
      title: "Camera Tripod",
      price: "$1,200",
    },
  ];

  return (
    <section className="w-full px-6 pt-6">
      <div className="flex items-start gap-8">
        <div className="w-[270px] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 h-[520px] overflow-hidden">
          <div className="space-y-3">
            {categories.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm cursor-pointer hover:text-orange-600">
                <span>{item}</span>
                <FaChevronRight size={12} />
              </div>
            ))}
          </div>

        </div>
        <div className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-5 h-[520px] overflow-hidden">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-3">
              <div className="space-y-2">
                {brands.map((brand, i) => (
                  <button key={i} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition ${ i === 0? "bg-orange-600 text-white" : "hover:bg-gray-100"}`}>
                    {brand}
                  </button>
                ))}

              </div>

            </div>
            <div className="col-span-5 flex flex-col justify-between h-full">
              {products.map((product, i) => (
                <div key={i} className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 min-h-[110px]">
                  <Image src={product.image} alt="" width={80} height={80} className="object-contain"/>

                  <div>
                    <h3 className="text-sm font-medium">
                      {product.title}
                    </h3>

                    <p className="text-blue-600 font-bold mt-2">
                      {product.price}
                    </p>
                  </div>

                </div>
              ))}

            </div>
            <div className="col-span-4">

              <div className="bg-yellow-200 rounded p-5 h-full flex flex-col">

                <div className="flex justify-center mb-4">

                  <Image src="/images/image-29.png" alt="" width={180} height={180} className="object-contain"/>

                </div>

                <h2 className="text-3xl font-bold mb-3"> 21% Discount</h2>

                <p className="text-gray-600 text-sm mb-4"> Escape the noise, it is time to hear the magic with Xiaomi Earbuds. </p>

                <div className="mb-5">

                  <span className="text-sm text-gray-500"> Starting price:</span>

                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-2 rounded-md font-bold ml-2">
                    $99 USD
                  </div>

                </div>

                <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-md flex items-center gap-2 w-fit">

                  Shop Now

                  <FaArrowRight size={12} />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}