import Image from "next/image";
import Link from "next/link";
import { latestBlogs } from "@/data/blogData";
import { FiCalendar } from "react-icons/fi";

export default function LatestBlog() {
  return (
    <div className="bg-white border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Latest Blog
      </h2>

      <div className="space-y-6">
        {latestBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="group flex gap-4 border-b-gray-100 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={blog.image}
                alt={blog.title}
                width={90}
                height={90}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-orange-500 mb-2">
                <FiCalendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>

              <h3 className="text-sm font-medium text-gray-800 leading-6 group-hover:text-orange-500 transition-colors line-clamp-2">
                {blog.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}