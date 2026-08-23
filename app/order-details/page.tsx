import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import OrderDetailsContent from "@/components/order-details/OrderDetailsContent";

export default function OrderDetailsPage() {
  return (
    <main className="bg-white min-h-screen">
      <SimpleNavbar />

      <OrderDetailsContent />

      <SimpleFooter />
    </main>
  );
}