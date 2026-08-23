"use client";

import { useState } from "react";

import CartModal from "@/components/cart/CartModal";
import TopBanner from "./TopBanner";
import MainNav from "./MainNav";
import BottomNav from "./BottomNav";
import ShopTopNav from "../shop/ShopTopNav";

export default function Navbar() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="w-full">

      <div className="hidden lg:block">
        <TopBanner />
        <ShopTopNav />
      </div>

  
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