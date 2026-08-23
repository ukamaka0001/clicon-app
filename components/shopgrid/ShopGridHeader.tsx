export default function ShopGridHeader() {
  return (
    <div className="space-y-5 mb-8">

      <div className="flex flex-col lg:flex-row gap-4 justify-between">

        <input
          type="text"
          placeholder="Search for anything..."
          className="border rounded-lg px-4 py-3 w-full lg:w-[350px]"
        />

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            Sort by:
          </span>

          <select className="border rounded-lg px-4 py-3">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Low Price</option>
            <option>High Price</option>
          </select>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

        <div className="border rounded-lg px-4 py-3 flex flex-wrap gap-3">

          <span className="font-medium">
            Active Filters:
          </span>

          <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            Electronics Devices ✕
          </button>

          <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            5 Star Rating ✕
          </button>

        </div>

        <p className="text-gray-500 text-sm">
          65,867 Results Found
        </p>

      </div>

    </div>
  );
}