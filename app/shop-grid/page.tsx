import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import ProductGrid from "@/components/shopgrid/ProductGrid";
import ShopGridHeader from "@/components/shopgrid/ShopGridHeader";
import ShopGridSidebar from "@/components/shopgrid/ShopGridSidebar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import { FaHome } from "react-icons/fa";

export default function ShopGridPage() {
  return (
    <main className="bg-white min-h-screen">

      <SimpleNavbar />

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex items-center gap-2 text-sm mb-10">
          <span className="flex items-center gap-1">
            <FaHome />
             Home</span>
          <span>{">"}</span>
          <span>Shop</span>
          <span>{">"}</span>
          <span>Shop Grid</span>
          <span>{">"}</span>

          <span className="text-blue-600">
            Electronics Devices
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">

          <ShopGridSidebar />

          <div>
            <ShopGridHeader />
            <ProductGrid />

            <div className="flex justify-center items-center gap-3 mt-12">

              <button className="w-10 h-10 rounded-full border border-orange-500 text-orange-500">
                ←
              </button>

              <button className="w-10 h-10 rounded-full bg-orange-500 text-white">
                01
              </button>

              <button className="w-10 h-10 rounded-full border">
                02
              </button>

              <button className="w-10 h-10 rounded-full border">
                03
              </button>

              <button className="w-10 h-10 rounded-full border">
                04
              </button>

              <button className="w-10 h-10 rounded-full border border-orange-500 text-orange-500">
                →
              </button>

            </div>

          </div>

        </div>

      </div>

      <SimpleFooter />

    </main>
  );
}