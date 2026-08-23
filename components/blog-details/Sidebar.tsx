import SearchBar from "@/components/blog/SearchBar";
import CategoryFilter from "@/components/blog/CategoryFilter";
import LatestBlog from "@/components/blog/LatestBlog";
import Gallery from "@/components/blog/Gallery";
import PopularTags from "@/components/blog/PopularTags";

export default function Sidebar() {
  return (
    <div className="space-y-8">

      <SearchBar
        value=""
        onChange={() => {}}
      />

      <CategoryFilter
        filters={{
          category: "All",
          tag: null,
        }}
        setFilters={() => {}}
      />

      <LatestBlog />

      <Gallery />

      <PopularTags
        filters={{
          category: "All",
          tag: null,
        }}
        setFilters={() => {}}
      />

    </div>
  );
}