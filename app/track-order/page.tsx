import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import { FaHome } from "react-icons/fa";
import TrackOrderForm from "@/components/track-order/TrackOrderForm";

export default function TrackOrderPage() {
  return (
    <main className="bg-white min-h-screen">

      <SimpleNavbar />

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex items-center gap-2 text-sm mb-10">
          <span className="flex items-center gap-1">
            <FaHome />
            Home
          </span>

          <span>{">"}</span>

          <span>Pages</span>

          <span>{">"}</span>

          <span className="text-blue-600">
            Track Order
          </span>
        </div>

        <TrackOrderForm />

      </div>

      <SimpleFooter />

    </main>
  );
}