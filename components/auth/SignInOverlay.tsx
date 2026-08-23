"use client";

import { FaArrowRight } from "react-icons/fa";

export default function SignInOverlay() {
  return (
    <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-8">

      <h2 className="text-2xl font-bold text-center mb-8">
        Sign in to your account
      </h2>
      <div className="mb-5">
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Email Address
        </label>

        <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"/>
      </div>
      <div className="flex items-center justify-between mb-2">
         <label className="text-sm font-medium text-gray-700">
             Password
          </label>
           <button className="text-blue-600 text-sm hover:underline">
              Forgot Password
           </button>
       </div>
       <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-6"/>
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-3">
         LOGIN
          <FaArrowRight size={14} />
       </button>
      <div className="flex items-center gap-3 my-7">
        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="text-sm text-gray-500">
          Don't have account
        </span>

        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      <button className="w-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 rounded-lg font-medium transition">
        CREATE ACCOUNT
      </button>

    </div>
  );
}