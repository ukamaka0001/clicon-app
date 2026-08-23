import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function Breadcrumb() {
  return (
    <section className="bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm">

          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition"
          >
            <FiHome className="text-base" />
            Home
          </Link>

          <FiChevronRight className="text-gray-400 text-sm" />

          <span className="text-gray-500">
            Pages
          </span>

          <FiChevronRight className="text-gray-400 text-sm" />

          <span className="text-orange-500 font-medium">
            Blog Details
          </span>

        </div>
      </div>
    </section>
  );
}