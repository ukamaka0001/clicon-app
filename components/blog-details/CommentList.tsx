import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { comments } from "@/data/blogDetailsData";

export default function CommentList() {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">
        Comments ({comments.length})
      </h2>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-5 border-b border-gray-200 pb-8 last:border-b-0"
          >
            <Image
              src={comment.avatar}
              alt={comment.name}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-gray-900">
                  {comment.name}
                </h3>

                <span className="text-sm text-gray-500">
                  {comment.date}
                </span>
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                {comment.comment}
              </p>

              <button className="mt-4 inline-flex items-center gap-2 font-medium text-orange-500 transition hover:text-orange-600">
                Reply
                <FiArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="rounded-md border border-orange-500 px-8 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
          Load More
        </button>
      </div>
    </section>
  );
}