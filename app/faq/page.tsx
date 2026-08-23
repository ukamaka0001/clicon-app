import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";

import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import FAQContactCard from "@/components/faq/FAQContactCard";
import FAQSidebar from "@/components/faq/FAQSidebar";

export default function FAQPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <SimpleNavbar />

      <FAQHero />

      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            <FAQAccordion />
          </div>

          <div>
            <FAQContactCard />

            <FAQSidebar />
          </div>

        </div>

      </section>

      <SimpleFooter />

    </main>
  );
}