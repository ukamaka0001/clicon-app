"use client";

import { useState } from "react";

import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";

import Breadcrumb from "@/components/blog/Breadcrumb";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogGrid from "@/components/blog/BlogGrid";
import SearchBar from "@/components/blog/SearchBar";
import SortDropdown from "@/components/blog/SortDropdown";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("newest");

  const [filters, setFilters] = useState({
    category: "All",
    tag: null as string | null,
  });

  return (
    <>
      <SimpleNavbar />

      <main className="bg-white min-h-screen">

        <Breadcrumb />

        {/* Hero */}
        <section className="border-b bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">

            <h1 className="text-5xl font-bold text-gray-900">
              Our Blog
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-500">
              Discover the latest technology news, product reviews,
              buying guides, and expert tips from the CLICON team.
            </p>

          </div>
        </section>

        {/* Blog */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

            {/* Sidebar */}

            <aside className="lg:sticky lg:top-24 h-fit">

              <BlogSidebar
                filters={filters}
                setFilters={setFilters}
              />

            </aside>

            {/* Content */}

            <div className="lg:col-span-3">

              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <SearchBar
                  value={search}
                  onChange={setSearch}
                />

                <SortDropdown
                  value={sort}
                  onChange={setSort}
                />

              </div>

              <BlogGrid
                search={search}
                sort={sort}
                filters={filters}
              />

            </div>

          </div>

        </section>

      </main>

      <SimpleFooter />
    </>
  );
}