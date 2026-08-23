import Image from "next/image";

interface BlogContentProps {
  blog: {
    description: string;
    quote?: string;
    images?: string[];
  };
}

export default function BlogContent({
  blog,
}: BlogContentProps) {
  return (
    <section className="mt-10">

      <p className="text-gray-600 leading-8">
        {blog.description}
      </p>

      {blog.quote && (
        <div className="mt-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-8">
          <p className="text-lg italic leading-8 text-gray-700">
            "{blog.quote}"
          </p>
        </div>
      )}

      {blog.images && blog.images.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {blog.images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg"
            >
              <Image
                src={image}
                alt={`Blog Image ${index + 1}`}
                width={600}
                height={400}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

    </section>
  );
}