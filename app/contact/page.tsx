import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import OfficeLocations from "@/components/contact/OfficeLocations";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <SimpleNavbar />

      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </section>

      <ContactMap />
      <OfficeLocations />

      <SimpleFooter />
    </main>
  );
}