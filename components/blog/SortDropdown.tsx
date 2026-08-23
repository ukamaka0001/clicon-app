"use client";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">

      <span className="whitespace-nowrap font-medium text-gray-600">
        Sort by:
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-lg border border-gray-300 bg-white px-4 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      >
        <option value="popular">Most Popular</option>

        <option value="newest">Newest</option>

        <option value="oldest">Oldest</option>
      </select>

    </div>
  );
}