import SimpleFooter from "@/components/footer/SimpleFooter";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SignInForm from "@/components/page-16/SignInForm";


export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SimpleNavbar />

      <div className="flex items-center justify-center py-20">
        <SignInForm />
      </div>

      <SimpleFooter />
    </main>
  );
}