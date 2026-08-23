"use client";
import { useState } from "react";

import { Eye, Check } from "lucide-react";
import { FaApple, FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {

    const [checked, setChecked] = useState(false);
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
        <div className="absolute bottom-0 right-0 w-[52%] h-1 bg-orange-500"></div>
      </div>
      <div className="mb-5">
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Name
        </label>

        <input type="name" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"/>
      </div>

        <label className="text-sm font-medium text-gray-700 block mb-2">
          Email Address
        </label>

        <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"/>

         <label className="text-sm font-medium text-gray-700">
             Password
          </label>
       <div className="relative">
       <input type="password" placeholder="8+ character" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-6"/>
       <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cusor-pointer" />
        </div>

        <label className="text-sm font-medium text-gray-700">
             Confirm Password
          </label>
       <div className="relative">
       <input type="password"className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-6"/>
       <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cusor-pointer" />
        </div>
        <div className="flex items-start gap-3">
            <input id="terms" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="hidden"/>
            <label htmlFor="terms" className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded border transition-all ${ checked
               ? "bg-orange-500 border-orange-500"
               : "border-gray-300 bg-white"}`}>
             {checked && (
             <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            )}
             </label>

             <label htmlFor="terms" className="cursor-pointer text-sm text-gray-600 leading-6">
               I agree to{" "}
             <span className="text-sky-500 hover:underline">
               Clicon Terms of Condition
             </span>{" "}
               and{" "}
             <span className="text-sky-500 hover:underline">
                Privacy Policy
             </span>
                 .
             </label>
             </div>
        
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-3">
         SIGN UP
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