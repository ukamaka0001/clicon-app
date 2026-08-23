import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import CompareContent from "@/components/compare/CompareContent";


export default function ComparePage() {
  return (
    <main className="bg-white min-h-screen">

      <SimpleNavbar />

      <CompareContent />

      <SimpleFooter />

    </main>
  );
}