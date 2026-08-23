import SimpleFooter from "@/components/footer/SimpleFooter";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import ResendCode from "@/components/resend/ResendCode";



export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SimpleNavbar />

      <div className="flex items-center justify-center py-20">
        <ResendCode />
      </div>

      <SimpleFooter />
    </main>
  );
}