import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({
  title,
}: BreadcrumbProps) {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-sm">

        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 transition hover:text-orange-500"
        >
          <FiHome />
          Home
        </Link>

        <FiChevronRight className="text-gray-400" />

        <Link
          href="/blog"
          className="text-gray-500 transition hover:text-orange-500"
        >
          Blog
        </Link>

        <FiChevronRight className="text-gray-400" />

        <span className="font-medium text-orange-500">
          {title}
        </span>

      </div>
    </section>
  );
}