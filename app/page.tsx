import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturesBar from "@/components/home/FeaturesBar";
import FlashSaleSection from "@/components/home/FlashSaleSection";
import Hero from "@/components/home/Hero";
import IntroducingPro from "@/components/home/IntroducingPro";
import LatestNews from "@/components/home/LatestNews";
import NewProductsSection from "@/components/home/NewProductsSection";
import ProductGrid from "@/components/home/ProductGrid";
import SaveUp from "@/components/home/SaveUp";
import ShopCategories from "@/components/home/ShopCategories";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Link href="/shop"> Go to Shop Page</Link>
      <FeaturesBar />
      <ProductGrid />
      <ShopCategories />
      <FeaturedProducts />
      <IntroducingPro />
      <NewProductsSection />
      <SaveUp />
      <FlashSaleSection />
      <LatestNews />
      <Footer />
    </main>
  );
}