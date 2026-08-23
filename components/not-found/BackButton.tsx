"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-orange-600"
    >
      <FaArrowLeft />
      Go Back
    </button>
  );
}