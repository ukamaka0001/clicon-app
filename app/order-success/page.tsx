import OrderSuccess from "@/components/order/OrderSuccess";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";

export default function OrderSuccessPage() {
  return (
    <main className="bg-white min-h-screen">
          <SimpleNavbar />
    
          <OrderSuccess />
          
    
          <SimpleFooter />
        </main>
  );
}