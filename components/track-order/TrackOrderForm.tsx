"use client";

import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function TrackOrderForm() {

  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <div className="mb-12 pl-8">

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Track Order
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          To track your order please enter your Order ID and Billing Email in the input fields below and press the "Track Order" button. this was given to you on your receipt and in the confirmation email you should have received.
        </p>

      </div>

      <div className="p-8 shadow-sm">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Order ID
            </label>

            <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)}
              placeholder="ID..." className="w-full border border-gray-200 rounded px-4 py-3"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Billing Email
            </label>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}             placeholder="Email address" className="w-full border border-gray-200 rounded px-4 py-3" />
          </div>

        </div>

        <div className="p-4 mt-6">

          <p className="text-sm text-gray-600 flex items-center gap-3">
            <FaInfoCircle className="bg-white"/>
            Order ID was sent to your email address after successful purchase.
          </p>

        </div>

        <button
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium"
        >
          TRACK ORDER →
        </button>

      </div>

    </div>


         
  );
}
