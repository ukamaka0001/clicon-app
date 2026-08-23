import Image from "next/image";
import {
  FiCalendar,
  FiMessageCircle,
  FiUser,
  FiTag,
} from "react-icons/fi";

interface BlogHeroProps {
  blog: {
    image: string;
    title: string;
    author: string;
    category: string;
    date: string;
    comments: number;
  };
}

export default function BlogHero({
  blog,
}: BlogHeroProps) {
  return (
    <section>

      {/* Hero Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={700}
          className="h-auto w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Meta */}
      <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">

        <div className="flex items-center gap-2">
          <FiTag className="text-orange-500" />
          <span>{blog.category}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiUser className="text-orange-500" />
          <span>{blog.author}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiCalendar className="text-orange-500" />
          <span>{blog.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiMessageCircle className="text-orange-500" />
          <span>{blog.comments} Comments</span>
        </div>

      </div>

      <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
        {blog.title}
      </h1>

    </section>
  );
}