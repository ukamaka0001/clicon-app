import Image from "next/image";
import { Play } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="relative h-[550px] overflow-hidden">

      <Image  src="/images/promo-banner.png" alt="Promo Banner" fill priority className="object-cover"/>

      <div className="absolute inset-0 bg-white/6" />

      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto w-full px-6">

          <div className="max-w-xl">

            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Your trusted and
              <br />
              reliable retail shop
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              We bring you premium electronics from trusted brands
              worldwide. Shop confidently with secure payments,
              unbeatable prices, fast delivery, and excellent customer
              support.
            </p>

            <div className="mt-10 flex items-center gap-5">

              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 transition hover:bg-orange-600">
                <Play size={24} fill="white" className="ml-1 text-white" />
              </button>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Watch Video
                </h4>

                <p className="text-gray-600">
                  Discover why customers trust CLICON
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}