"use client";

import { useState } from "react";

import Hero from "@/components/home/Hero";
import FeaturesBar from "@/components/home/FeaturesBar";
import ProductModal from "@/components/product/ProductModal";
import Navbar from "@/components/navbar/Navbar";

export default function ProductPage() {

  const [openModal, setOpenModal] = useState(true);

  const product = {
  id: 1,
  image: "/images/Main Image.png",
  name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
  price: 1500,
  oldPrice: 1900,
  discount: 21,
  category: "Best Sellers",
};

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <div>

        <Hero />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <FeaturesBar />
        </div>

      </div>
      {openModal && (
         <ProductModal product={product} closeModal={() => setOpenModal(false)}/>
      )}

    </main>
  );
}