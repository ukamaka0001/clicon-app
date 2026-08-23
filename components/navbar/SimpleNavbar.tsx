"use client";

import { useState } from "react";

import BottomNav from "./BottomNav";
import MainNav from "./MainNav";

import CartModal from "@/components/cart/CartModal";

export default function SimpleNavbar() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <div>

      <MainNav openCart={() => setOpenCart(true)} />

      <div className="hidden lg:block">
        <BottomNav />
      </div>

      {openCart && (
        <CartModal closeModal={() => setOpenCart(false)} />
      )}

    </div>
  );
}