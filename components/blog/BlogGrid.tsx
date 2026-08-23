import { blogs } from "@/data/blogData";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

interface BlogGridProps {
  search: string;
  sort: string;
  filters: {
    category: string;
    tag: string | null;
  };
}

export default function BlogGrid({
  search,
  sort,
  filters,
}: BlogGridProps) {

  let filteredBlogs = blogs.filter((blog) => {

    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      filters.category === "All" ||
      blog.category === filters.category;

    const matchesTag =
      !filters.tag ||
      blog.tags.includes(filters.tag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  if (sort === "newest") {
    filteredBlogs.reverse();
  }

  return (
    <div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            author={blog.author}
            date={blog.date}
            comments={blog.comments}
            title={blog.title}
            description={blog.description}
          />
        ))}

      </div>

      <div className="mt-14">
        <Pagination />
      </div>

    </div>
  );
}