"use client";

import { useState } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaBars } from "react-icons/fa";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        <div className="text-2xl font-bold">CLICON</div>

        <div className="hidden md:flex flex-1 mx-6">
          <input
            className="w-full px-4 py-2 rounded text-black"
            placeholder="Search for anything..."
          />
        </div>

        <div className="flex items-center gap-5 text-xl">
          <FaHeart className="cursor-pointer hover:text-yellow-300" />
          <FaShoppingCart className="cursor-pointer hover:text-yellow-300" />
          <FaUser className="cursor-pointer hover:text-yellow-300" />
        </div>

      </div>
        {menuOpen && (
        <>
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)}/>
        <div className="fixed top-0 left-0 w-[260px] h-full bg-white text-black z-50 p-5 space-y-4">

        <input className="w-full px-4 py-2 rounded border" placeholder="Search for anything..."/>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Shop</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      </>

     )}
    </div>
  );
}