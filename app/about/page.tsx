import Link from "next/link";
import { ChevronRight } from "lucide-react";

import SimpleNavbar from "@/components/navbar/SimpleNavbar";

import AboutSection from "@/components/about/AboutSection";
import PromoBanner from "@/components/about/PromoBanner";
import TeamSection from "@/components/about/TeamSection";
import ProductColumns from "@/components/about/ProductColums";
import Footer from "@/components/footer/Footer";



export default function AboutPage() {
  return (
    <main className="bg-white">


      {/* Breadcrumb */}
      <section className="border-y bg-gray-50">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-4 text-sm">
          <Link
            href="/"
            className="text-gray-500 hover:text-orange-500 transition"
          >
            Home
          </Link>

          <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />

          <span className="text-gray-500">
            Pages
          </span>

          <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />

          <span className="font-medium text-orange-500">
            About Us
          </span>
        </div>
      </section>
      <SimpleNavbar />

      {/* Sections */}
      <AboutSection />

      <TeamSection />

      <PromoBanner />

      <ProductColumns />

      <Footer />


    </main>
  );
}