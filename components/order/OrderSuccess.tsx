"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import {
  FiCheck,
  FiArrowRight,
  FiGrid,
  FiHome,
  FiChevronRight,
} from "react-icons/fi";

export default function OrderSuccess() {

const [order, setOrder] = useState<any>(null);

useEffect(() => {
  const savedOrder =
    localStorage.getItem("latestOrder");

  if (savedOrder) {
    setOrder(JSON.parse(savedOrder));
  }
}, []);

  if (!order) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      Loading order...
    </div>
  );
}

  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-y bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500">
          <FiHome size={16} />

          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>

          <FiChevronRight size={14} />

          <Link
            href="/cart"
            className="hover:text-orange-500"
          >
            Shopping Cart
          </Link>

          <FiChevronRight size={14} />

          <span className="font-medium text-orange-600">
            Order Success
          </span>
        </div>
      </div>

      {/* Success Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-28 h-28 mx-auto rounded-full bg-green-50 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center">
              <FiCheck
                size={40}
                className="text-green-500"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mt-8">
            Your Order Has Been Placed Successfully!
          </h1>

          {/* Description */}
           <p className="text-gray-500 mt-4 leading-relaxed">
             Thank you {order.customerName}. Your order has
              been received and is currently being processed.
              A confirmation email has been sent to {order.email}.
            </p>

          <div className="mt-10 border rounded-xl p-6 bg-gray-50">
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-gray-500 text-sm">
                  Order Number
                </p>
                <h4 className="font-semibold"> {order.orderNumber} </h4>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                   Customer
                </p>
                 <h4 className="font-semibold">
                     {order.customerName}
                 </h4>
                 </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Status
                </p>
                <h4 className="font-semibold text-green-600">
                   {order.orderStatus}
                </h4>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Payment
                </p>
                <h4 className="font-semibold">
                  {order.paymentStatus}
                </h4>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Estimated Delivery
                </p>
                <h4 className="font-semibold">
                  {order.estimatedDelivery}
                </h4>
              </div>

                <div>
                   <p className="text-gray-500 text-sm">
                      Total Amount
                   </p>
                   <h4 className="font-semibold">
                     ${order.total.toFixed(2)}
                   </h4>
                </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <Link
              href="/"
              className="border border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-50 transition"
            >
              <FiGrid />
              GO TO DASHBOARD
            </Link>

            <Link
              href="/orders"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition"
            >
              VIEW ORDER
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}