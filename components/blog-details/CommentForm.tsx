"use client";

import { FiArrowRight } from "react-icons/fi";

export default function CommentForm() {
  return (
    <section className="mt-16 border border-gray-200 rounded-lg p-8 bg-white">

      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
        Leave a Comment
      </h2>

      <form className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-12 rounded-md border border-gray-300 px-4 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 rounded-md border border-gray-300 px-4 outline-none focus:border-orange-500"
            />
          </div>

        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>

          <input
            type="text"
            placeholder="Write Subject..."
            className="w-full h-12 rounded-md border border-gray-300 px-4 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>

          <textarea
            rows={7}
            placeholder="Write your comment here..."
            className="w-full rounded-md border border-gray-300 p-4 outline-none resize-none focus:border-orange-500"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-md transition"
        >
          POST COMMENT
          <FiArrowRight />
        </button>

      </form>

    </section>
  );
}