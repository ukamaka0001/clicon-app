import SimpleFooter from "@/components/footer/SimpleFooter";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import ShoppingCartPage from "@/components/shopping-cart/ShoppingCartPage";

export default function Cart() {
  return (
    <>
      <SimpleNavbar />
      <ShoppingCartPage />
      <SimpleFooter />
    </>
  );
}