import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FAQHero() {
  return (
    <>
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>

          <ChevronRight className="mx-2 h-4 w-4" />

          <span>Pages</span>

          <ChevronRight className="mx-2 h-4 w-4" />

          <span className="text-orange-500 font-medium">
            FAQs
          </span>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-8">
            Everything you need to know about shopping with
            Clicon. Can't find your answer? Contact our support
            team.
          </p>
        </div>
      </section>
    </>
  );
}