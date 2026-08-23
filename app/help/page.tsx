import SimpleFooter from "@/components/footer/SimpleFooter";
import ContactSupport from "@/components/help/ContactSupport";
import HelpCategories from "@/components/help/HelpCategories";
import HelpHero from "@/components/help/HelpHero";
import PopularTopics from "@/components/help/PopularTopics";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";


export default function HelpPage() {
  return (
    <main className="bg-white">

      <SimpleNavbar />

      <HelpHero />

      <HelpCategories />

      <PopularTopics />

      <ContactSupport />

      <SimpleFooter />

    </main>
  );
}