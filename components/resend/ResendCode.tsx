"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ResendCode() {
  return (
    <div className="w-[420px] bg-white rounded-2xl shadow-xl p-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Verify Your Email
      </h2>

      {/* Description */}
      <p className="mt-4 text-center text-gray-500 leading-7">
        We've sent a verification code to your email address.
        Enter the code below to verify your account.
      </p>

      {/* Verification Code */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">
            Verification Code
          </label>

          <button
            type="button"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Resend Code
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter verification code"
          className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-orange-500"
        />
      </div>

      <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-3">
        VERIFY EMAIL
        <FaArrowRight size={14} />
      </button>
    </div>
  );
}