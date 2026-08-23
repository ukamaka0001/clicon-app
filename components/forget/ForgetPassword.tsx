"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ForgetPasswordContent() {
  return (
    <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-8 space-y-4">

      <h2 className="text-2xl font-bold text-center mb-8">
        forget password
      </h2>

      <p className="max-w-xs mx-auto text-sm text-center">Enter the email address or mobile phone number associated with your clicon account.</p>
      <div className="mb-5">
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Email Address
        </label>

        <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"/>
      </div>
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-3">
         SEND CODE
          <FaArrowRight size={14} />
       </button>
      <div className="space-y-2">
        <p>
          Already have account?{""}   
        <span className="text-blue-500 font-medium cursor-pointer">
          sign in
        </span>
        </p>
        <p>
           Don't have account?{""}    
        <span className="text-blue-500 font-medium cursor-pointer">
            sign up
        </span>
        </p>
    </div>
    <div className="border-t border-gray-300 py-4">
        <p>You may contact <span className="text-orange-600">Customer Service</span> for help restoring access to your account.</p>
    </div>
    </div>
  );
}