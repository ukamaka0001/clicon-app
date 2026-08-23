"use client";

import { Eye } from "lucide-react";
import { FaApple, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignInForm() {
  return (
    <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-8">

      <div className="relative border-b border-gray-200 mb-4">
        <div className="grid grid-cols-2 text-center">
          <button className="py-5 text-2xl font-semibold">
            Sign in 
          </button>

          <button className="py-5 text-2xl font-semibold text-gray-400">
            Sign Up
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-[52%] h-1 bg-orange-500"></div>
      </div>
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
       <div className="relative">
       <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-6"/>
       <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cusor-pointer" />
        </div>
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-3">
         SIGN IN
          <FaArrowRight size={14} />
       </button>
      <div className="flex items-center gap-3 my-7">
        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="text-sm text-gray-500">
          or
        </span>

        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-4 border border-gray-300 rounded-md py-4 hover:bg-gray-50 transition relative">
            <FcGoogle className="text-3xl absolute left-6" />
            <span className="text-lg font-medium text-gray-700">
              Login with Google
            </span>
          </button>

          <button className="w-full flex items-center justify-center gap-4 border border-gray-300 rounded-md py-4 hover:bg-gray-50 transition relative">
            <FaApple className="text-3xl absolute left-6 text-black"/>
            <span className="text-lg font-medium text-gray-700">Login with Apple</span>
          </button>
        </div>

    </div>
  );
}