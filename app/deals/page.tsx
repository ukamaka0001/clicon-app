import Hero from "@/components/home/Hero";
import FeaturesBar from "@/components/home/FeaturesBar";
import TodayBestDeals from "@/components/deals/TodayBestDeals";
import Navbar from "@/components/navbar/Navbar";

export default function DealsPage() {
  return (
    <main className="relative min-h-screen">

      <Navbar />
      <div>

        <Hero />

        <div className="max-w-7xl mx-auto px-4 mt-8">
          <FeaturesBar />
        </div>

        <TodayBestDeals />

      </div>

      <div className="fixed inset-0 bg-black/75"></div>

    </main>
  );
}