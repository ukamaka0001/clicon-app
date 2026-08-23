"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaUser, FaBars } from "react-icons/fa";
import Link from "next/link";



type MainNavProps = {
  openCart: () => void;
}



export default function MainNav({ openCart }: MainNavProps) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);


  const updateWishlist = () => {
  const wishlist = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );
  
  setWishlistCount(wishlist.length);
};

useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const totalItems = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );

    setCartCount(totalItems);
  };

  updateCart();
  updateWishlist();

  window.addEventListener(
    "cartUpdated",
    updateCart
  );

  window.addEventListener(
    "wishlistUpdated",
    updateWishlist
  );

  return () => {
    window.removeEventListener(
      "cartUpdated",
      updateCart
    );

    window.removeEventListener(
      "wishlistUpdated",
      updateWishlist
    );
  };
}, []);

  return (
    <div className="bg-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <button 
          aria-label="Open menu"
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        <Link href="/" className="flex items-center justify-center gap-3">
        <div className="size-12 bg-white rounded-full flex items-center justify-center">
        <div className="size-6 rounded-full border-4 border-blue-500"></div>
       </div>

      <h1 className="text-2xl font-bold text-white">
        CLICON
      </h1>
       </Link>

        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="search"
            className="w-full rounded-lg bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search for anything..."
          />
        </div>

        <div className="hidden lg:flex items-center gap-3 mr-4">

          <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
            <span className="w-5 h-5 rounded-full overflow-hidden">
              🇺🇸
            </span>

            ENG
          </div>

          <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            USD
          </div>

        </div>

        <div className="flex items-center gap-5 text-xl">

          <Link href="/wishlist" className="relative hover:text-yellow-300  transition-colors">
              <FaHeart />
              
               {wishlistCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                 </span>
                )}
         </Link>

          <button  aria-label="Open shopping cart" onClick={openCart} className="relative cursor-pointer hover:text-yellow-300  transition-colors">
             <FaShoppingCart />

            {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
           )}
         </button>



           <Link href="/sign-in" className="hover:text-yellow-300 transition-color">
            <FaUser />
           </Link>

        </div>

      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed top-0 left-0 w-[300px] h-full bg-white text-black z-50 p-5 space-y-4 shadow-xl transition-transform duration-300">
          <div className="flex justify-between items-center  pb-4 mb-4 border-b">
           <h2 className="text-xl font-bold">Menu</h2>
           <button onClick={() => setMenuOpen(false)} className="text-2xl hover:text-orange-500 transition">
            ×
           </button>
           </div>

            <input
              className="w-full px-4 py-2 rounded border"
              placeholder="Search for anything..."
            />
            <div className="flex flex-col space-y-4 mt-6">
              <Link href="/" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
                Home
              </Link>
              
              <Link href="/shop-grid" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
               Shop
              </Link>

              <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
               About
              </Link>

              <Link href="/faq" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
               FAQ
              </Link>

              <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
               Contact
              </Link>

              <hr />
              <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
                Wishlist
              </Link>

               <Link href="/shopping-cart" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
                 Shopping Cart
               </Link>
               
               <Link href="/sign-in" onClick={() => setMenuOpen(false)} className="py-2 border-b hover:text-orange-500">
                 Sign In
               </Link>

            </div>
          </div>
        </>
      )}

  </div>

  );
}