import Hero from "@/components/home/Hero";
import SignInOverlay from "@/components/auth/SignInOverlay";

export default function AuthPage() {
  return (
    <main className="relative min-h-screen">

      <div className="h-[760px] overflow-hidden">
        <Hero />
      </div>
      <div className="fixed inset-0 bg-black/60 z-40"></div>

      <div className="absolute top-[140px] left-1/2 -translate-x-1/2 z-50">
        <SignInOverlay />
      </div>

    </main>
  );
}