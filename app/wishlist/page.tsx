"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };
  const moveToCart = (product: any) => {
  const cart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existing = cart.find(
    (item: any) => item.id === product.id
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  const updatedWishlist = wishlist.filter(
    (item) => item.id !== product.id
  );

  setWishlist(updatedWishlist);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(updatedWishlist)
  );

  window.dispatchEvent(
    new Event("cartUpdated")
  );

  window.dispatchEvent(
    new Event("wishlistUpdated")
  );

  alert("Moved to cart!");
};

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 mt-2">
            Add products to your wishlist.
          </p>
          <Link href="/shop"
           className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
              Continue Shopping
           </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 bg-white hover:shadow-lg transition" >
              <div className="h-48 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="max-h-full object-contain"/>
              </div>
              <h3 className="font-semibold mt-4">
                {product.name}
              </h3>

              <p className="text-blue-600 font-bold mt-2">
                ${product.price.toLocaleString()}
              </p>

              <button onClick={() => removeFromWishlist(product.id)}
                className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600" >
                Remove
              </button>

              <button onClick={() => moveToCart(product)}
               className="w-full mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                 Move to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}