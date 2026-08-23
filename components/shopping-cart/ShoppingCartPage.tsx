import Link from "next/link";
import { House, Minus, Plus, X } from "lucide-react";

export default function ShoppingCartPage() {
  const cartItems = [
    {
      image: "/images/Image-18.png",
      name: "4K UHD LED Smart TV",
      price: 570,
      quantity: 1,
      status: "OUT OF STOCK",
    },
    {
      image: "/images/Image-23.png",
      name: "Wired Over-Ear Gaming Headphones",
      price: 250,
      quantity: 3,
      status: "IN STOCK",
    },
  ];
    const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
     0
    );

      const shipping = 0;
      const discount = 24;
      const tax = 61.99;

    const total = subtotal + shipping + tax - discount;

  return (
    <main>
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">

          <House size={14} className="text-gray-400" />

          <Link
            href="/"
            className="text-gray-500 hover:text-orange-500"
          >
            Home
          </Link>

          <span>{">"}</span>

          <span className="text-sky-500">
            Shopping Cart
          </span>

        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 border rounded-lg">

            <div className="p-5 border-b">
              <h2 className="font-semibold text-lg">
                Shopping Cart
              </h2>
            </div>

            <div className="grid grid-cols-12 px-5 py-3 border-b text-xs font-semibold uppercase text-gray-500">

              <div className="col-span-6">
                Products
              </div>

              <div className="col-span-2">
                Price
              </div>

              <div className="col-span-2">
                Quantity
              </div>

              <div className="col-span-2">
                Subtotal
              </div>

            </div>

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center px-5 py-5 border-b"
              >

            
                <div className="col-span-6 flex items-center gap-3">

                  <button>
                    <X size={16} className={`rounded-full ${item.status === "OUT OF STOCK" ? "text-gray-400" : "text-red-500"}`}></X>
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />

                  <p className="text-sm">
                    {item.name}
                  </p>

                </div>

                <div className="col-span-2">
                  ${item.price}
                </div>

                <div className="col-span-2">

                  <div className="flex items-center border rounded w-fit">

                    <button className="px-3 py-2">
                      <Minus size={14} />
                    </button>

                    <span className="px-3">
                      {item.quantity}
                    </span>

                    <button className="px-3 py-2">
                      <Plus size={14} />
                    </button>

                  </div>

                </div>
                <div className="col-span-2 font-medium">
                  ${item.price * item.quantity}
                </div>

              </div>
            ))}

            <div className="flex justify-between p-5">

              <button className="border border-sky-500 text-sky-500 px-5 py-3 rounded">
                ← RETURN TO SHOP
              </button>

              <button className="border border-sky-500 text-sky-500 px-5 py-3 rounded">
                UPDATE CART
              </button>

            </div>

          </div>
          <div className="space-y-5">

            <div className="border rounded-lg p-5">

              <h2 className="font-semibold mb-5">
                Cart Totals
              </h2>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span>Sub-total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>$24</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$61.99</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold">

                  <span>Total</span>

                  <span>${total.toFixed(2)} USD</span>

                </div>

              </div>

              <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded">
                PROCEED TO CHECKOUT →
              </button>

            </div>

            <div className="border rounded-lg p-5">

              <h2 className="font-semibold mb-4">
                Coupon Code
              </h2>

              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full border rounded px-4 py-3 mb-3"
              />

              <button className="bg-sky-500 text-white px-5 py-3 rounded">
                APPLY COUPON
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}