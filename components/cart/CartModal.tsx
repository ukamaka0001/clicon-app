"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

import { useRouter } from "next/navigation";


export default function CartModal({
  closeModal,
}: {
  closeModal: () => void;
}) {

const [cartItems, setCartItems] = useState<any[]>([]);


useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCartItems(cart);
  };

  updateCart();

  window.addEventListener(
    "cartUpdated",
    updateCart
  );

  return () => {
    window.removeEventListener(
      "cartUpdated",
      updateCart
    );
  };
}, []);

const router = useRouter();

const removeItem = (id: number) => {
  const updated = cartItems.filter(
    (item) => item.id !== id
  );

  setCartItems(updated);

  localStorage.setItem(
    "cart",
    JSON.stringify(updated)
  );

  window.dispatchEvent(
    new Event("cartUpdated")
  );
};

const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);

const subtotal = cartItems.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);


  return (
    <div className="fixed inset-0 z-[9999]">
      <div onClick={closeModal} className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-0 right-0 h-full w-[420px] bg-white shadow-2xl p-6 overflow-y-auto">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-2xl font-bold">
           Shopping Cart ({totalItems})
          </h2>

          <button
            onClick={closeModal}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-600 hover:text-white transition flex items-center justify-center">
            <FaTimes />
          </button>

        </div>
        <div className="space-y-5">

          {cartItems.length === 0 ? (
         <p className="text-center py-10 text-gray-500">
            Your cart is empty.
            </p>
            ) : (
        cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4 border-b pb-5">
              <div className="border border-gray-300 rounded-xl p-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

    
              <div className="flex-1">

                <p className="text-sm leading-relaxed mb-2">
                  {item.name}
                </p>

                <p className="text-orange-600 font-semibold">
                  {item.quantity} x ${item.price.toLocaleString()}
                </p>

              </div>
              <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 text-lg">
                  <FaTimes />
              </button>

            </div>
          ))
          )}

        </div>
        <div className="flex items-center justify-between mt-8 mb-6">

          <p className="text-lg font-medium">
            Sub-Total:
          </p>

          <h2 className="text-2xl font-bold">
            {/* ${subtotal.toLocaleString()}
            ${subtotal.toLocaleString()}.00 */}
            ${subtotal.toFixed(2)}
          </h2>

        </div>
        <div className="space-y-4">

          <button
          className="w-full bg-orange-600 text-white hover:bg-orange-700 py-4 rounded-xl font-semibold transition"
             onClick={() => { closeModal(); router.push("/checkout"); }}>
             CHECK OUT
          </button>

        
          <button className="w-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-4 rounded-xl font-semibold transition"
            onClick={() => { closeModal(); router.push("/cart");}}>
              VIEW CART
          </button>

        </div>

      </div>

    </div>
  );
}