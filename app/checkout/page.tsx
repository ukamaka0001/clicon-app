import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import CheckoutContent from "@/components/checkout/CheckoutContent";


export default function CheckoutPage() {
  return (
    <main className="bg-white min-h-screen">
      <SimpleNavbar />

      <CheckoutContent />

      <SimpleFooter />
    </main>
  );
}