"use client";

import { categories } from "@/data/blogData";

interface CategoryFilterProps {
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

export default function CategoryFilter({
  filters,
  setFilters,
}: CategoryFilterProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">

      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Category
      </h2>

      <div className="space-y-4">

        {categories.map((category) => (

          <label
            key={category}
            className="flex cursor-pointer items-center gap-3"
          >

            <input
              type="radio"
              name="category"
              checked={filters.category === category}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  category,
                }))
              }
              className="h-4 w-4 accent-orange-500"
            />

            <span
              className={`text-sm transition ${
                filters.category === category
                  ? "font-semibold text-orange-500"
                  : "text-gray-600"
              }`}
            >
              {category}
            </span>

          </label>

        ))}

      </div>

    </div>
  );
}