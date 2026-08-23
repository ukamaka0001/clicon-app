"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import CartModal from "@/components/cart/CartModal";
import Navbar from "@/components/navbar/Navbar";

export default function CartPage() {
  const [openCart, setOpenCart] = useState(true);

  return (
    <main className="relative">
      <Navbar />
      <div className="h-[760px] overflow-hidden">
        <Hero />
      </div>
      {openCart && (
        <CartModal closeModal={() => setOpenCart(false)} />
      )}

    </main>
  );
}