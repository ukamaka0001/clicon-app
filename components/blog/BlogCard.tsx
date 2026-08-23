import Image from "next/image";
import Link from "next/link";
import {
  FiUser,
  FiCalendar,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";

interface BlogCardProps {
  id: number;
  image: string;
  author: string;
  date: string;
  comments: number;
  title: string;
  description: string;
}

export default function BlogCard({
  id,
  image,
  author,
  date,
  comments,
  title,
  description,
}: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={700}
          height={420}
          className="h-64 w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">

        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <FiUser className="text-orange-500" />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiCalendar className="text-orange-500" />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiMessageCircle className="text-orange-500" />
            <span>{comments}</span>
          </div>

        </div>

        <h2 className="mt-5 text-2xl font-semibold leading-8 text-gray-900 hover:text-orange-500">
          {title}
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>

        <Link
          href={`/blog/${id}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
        >
          READ MORE
          <FiArrowRight />
        </Link>

      </div>
    </article>
  );
}