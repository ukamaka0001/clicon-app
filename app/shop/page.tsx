import Navbar from "@/components/navbar/Navbar";
import MegaMenu from "@/components/shop/MegaMenu";
import Hero from "@/components/home/Hero";
import FastedDeliver from "@/components/shop/FastedDelivery";

export default function ShopPage() {
  return (
    <main>

      <div className="relative">

        <div className="h-[760px] overflow-hidden">
          <Hero />
        </div>

        <div className="absolute top-[-210px] right-[20px] z-40">
          <MegaMenu />
        </div>

      </div>
      <div>
        <FastedDeliver />
      </div>
    </main>
  );
}