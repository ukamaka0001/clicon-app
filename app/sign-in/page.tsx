import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import SignInOverlay from "@/components/auth/SignInOverlay";


export default function SignInPage() {
  return (
    <main>
      <Navbar />
      <div className="relative">

        <div className="h-[760px] overflow-hidden">
          <Hero />
        </div>

        <div className="absolute -top-2 right-[70px] z-40">
          <SignInOverlay />
        </div>

      </div>

    </main>
  );
}