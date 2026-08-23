import ModalGrid from "@/components/modal/ModalGrid";
import SimpleFooter from "@/components/footer/SimpleFooter";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import { FaHome } from "react-icons/fa";
import ModalDescription from "@/components/modal/ModalDescription";
import ModalCard from "@/components/modal/ModalCards";

export default function ModalPage() {
  return (
    <main className="bg-white min-h-screen">

      <SimpleNavbar />

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center gap-2 text-sm mb-10">
          <span className="flex items-center gap-1">
            <FaHome />
            Home
          </span>

          <span>{">"}</span>
          <span>Shop</span>

          <span>{">"}</span>
          <span>Shop Grid</span>

          <span>{">"}</span>
        </div>

        <ModalGrid />

        <ModalDescription />
        <ModalCard />

      </div>

      <SimpleFooter />

    </main>
  );
}