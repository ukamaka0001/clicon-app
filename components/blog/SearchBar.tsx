"use client";

import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full md:w-[420px]">

      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search articles..."
        className="h-12 w-full rounded-lg border border-gray-300 pl-12 pr-4 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      />

    </div>
  );
}