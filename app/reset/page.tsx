import SimpleFooter from "@/components/footer/SimpleFooter";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import ResetPassword from "@/components/reset/ResetPassword";



export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SimpleNavbar />

      <div className="flex items-center justify-center py-20">
        <ResetPassword />
      </div>

      <SimpleFooter />
    </main>
  );
}