"use client";

import { popularTags } from "@/data/blogData";

interface PopularTagsProps {
  filters: {
    category: string;
    tag: string | null;
  };

  setFilters: React.Dispatch<
    React.SetStateAction<{
      category: string;
      tag: string | null;
    }>
  >;
}

export default function PopularTags({
  filters,
  setFilters,
}: PopularTagsProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">

      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Popular Tags
      </h2>

      <div className="flex flex-wrap gap-3">

        {popularTags.map((tag) => (

          <button
            key={tag}
            type="button"
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                tag: prev.tag === tag ? null : tag,
              }))
            }
            className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
              filters.tag === tag
                ? "border-orange-500 bg-orange-500 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:border-orange-500 hover:text-orange-500"
            }`}
          >
            {tag}
          </button>

        ))}

      </div>

    </div>
  );
}