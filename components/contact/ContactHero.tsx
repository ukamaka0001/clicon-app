import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <>
      <section className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center text-sm text-gray-500">
          Home
          <ChevronRight className="mx-2 h-4 w-4" />
          Contact Us
        </div>
      </section>

      <section className="text-center py-16 bg-white">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about
          products, pricing, shipping or anything else, our team is ready to
          answer all your questions.
        </p>
      </section>
    </>
  );
}