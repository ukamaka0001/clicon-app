import SimpleFooter from "@/components/footer/SimpleFooter";
import ForgetPasswordContent from "@/components/forget/ForgetPassword";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";



export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SimpleNavbar />

      <div className="flex items-center justify-center py-20">
        <ForgetPasswordContent />
      </div>

      <SimpleFooter />
    </main>
  );
}