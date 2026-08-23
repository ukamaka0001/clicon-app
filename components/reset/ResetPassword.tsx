"use client";

import { Eye } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

export default function ResetPassword() {
  return (
    <div className="w-[420px] bg-white rounded-2xl shadow-xl p-8 space-y-4">

        <h2 className="text-2xl font-bold text-center mb-8">
        Reset Password
      </h2>

      <p className="mx-auto mt-4 w-[380px] text-center text-gray-500 leading-7">Duis sagittis molestie tellus, at eleifend sapien pellque quis.Fusce lorem nunc, fringilla sit amet nunc.</p>

      <div className="mb-5">
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Password
        </label>
        <div className="relative">
        <input type="password" placeholder="8+ characters" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"/>
        <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cusor-pointer" />
        </div>
      </div>
      <div className="mb-5">
         <label className="text-sm font-medium text-gray-700">
             Comfirm Password
          </label>
       <div className="relative">
       <input type="comfirm password" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-6"/>
       <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cusor-pointer" />
        </div>
       </div>
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-3">
         RESET PASSWORD
          <FaArrowRight size={14} />
       </button>

    </div>
  );
}