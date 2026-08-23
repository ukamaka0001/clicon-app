import SignUpForm from "@/components/sign-up/SignUpForm";
import SimpleFooter from "@/components/footer/SimpleFooter";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";





export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SimpleNavbar />

      <div className="flex items-center justify-center py-20">
        <SignUpForm/>
      </div>

      <SimpleFooter />
    </main>
  );
}