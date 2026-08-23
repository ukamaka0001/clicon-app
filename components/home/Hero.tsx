"use client";

import Image from "next/image";
import { FaArrowRight, FaMinus } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 h-full grid grid-cols-1 lg:grid-cols-3 gap-6">
     <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="lg:col-span-2 rounded-xl w-full">
     <SwiperSlide>
    <div className="bg-gray-200 rounded-xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between relative gap-6">

      <div className="flex-1">
        <div className="flex items-center gap-2 text-blue-600 text-sm uppercase">
          <FaMinus />
          <span>The best place to play</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold my-3">
          Xbox Consoles
        </h1>

        <p className="text-gray-600 mb-4">
          Save up to 50% on select Xbox games.
          Get 3 months of PC Game Pass for $2 USD.
        </p>

        <button className="bg-orange-500 text-white px-5 py-3 rounded-md flex items-center gap-2 hover:bg-orange-600">
          Shop Now
          <FaArrowRight />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Image src="/images/Image-44.png" alt="Hero" width={600} height={400} className="w-full max-h-[380px] object-contain"/>
      </div>

      <div className="absolute top-5 right-5 w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold shadow-md">
        $299
      </div>

    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-blue-100 rounded-xl p-6 md:p-10 flex items-center justify-center h-full">
      <h1 className="text-5xl font-bold">
        Slide 2
      </h1>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-green-100 rounded-xl p-6 md:p-10 flex items-center justify-center h-full">
      <h1 className="text-5xl font-bold">
        Slide 3
      </h1>
    </div>
  </SwiperSlide>
</Swiper>
      <div className="flex flex-col gap-6 h-full w-full">
        <div className="bg-black rounded flex-1 flex flex-col sm:flex-row overflow-hidden w-full">
         <div className="w-full sm:w-[55%] p-5 flex flex-col justify-center">
            <p className="text-yellow-400 text-sm">Summer Sales</p>
             <h3 className="text-white font-bold text-lg">New Google Pixel 6 Pro</h3>
             <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600 mt-3 w-fit">
              Shop Now <FaArrowRight />
            </button>
          </div>

          <div className="w-full sm:w-[45%] relative">
            <Image src="/images/image-5.png" alt="product" width={300} height={200} className="w-full h-full object-cover py-5"/>
            <span className="absolute top-3 right-3 bg-yellow-600 text-xs px-2 py-1 rounded-full font-bold">
              29% OFF
            </span>
          </div>

        </div>
        <div className="bg-gray-200 rounded flex-1 flex flex-col sm:flex-row overflow-hidden w-full">
          <div className="w-full sm:w-[45%]">
            <Image src="/images/image-4.png" alt="product" width={300} height={200} className="w-full h-full object-contain p-3"/>
          </div>
        <div className="w-full sm:w-1/2 p-5 flex flex-col justify-center">
            <h3 className="font-bold text-lg">Xiaomi FlipBuds Pro</h3>
            <p className="text-sm text-blue-600">$299 USD</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600 mt-3 w-fit">Shop Now 
              <FaArrowRight />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}