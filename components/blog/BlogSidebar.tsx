import CategoryFilter from "./CategoryFilter";
import LatestBlog from "./LatestBlog";
import Gallery from "./Gallery";
import PopularTags from "./PopularTags";

interface BlogSidebarProps {
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

export default function BlogSidebar({
  filters,
  setFilters,
}: BlogSidebarProps) {
  return (
    <div className="space-y-8">

      <CategoryFilter
        filters={filters}
        setFilters={setFilters}
      />

      <LatestBlog />

      <Gallery />

      <PopularTags
        filters={filters}
        setFilters={setFilters}
      />

    </div>
  );
}