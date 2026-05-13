import TopBanner from "./TopBanner";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import BottomNav from "./BottomNav";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <TopBanner />
        <TopNav />
      </div>
      <MainNav />
      <div className="hidden lg:block">
        <BottomNav />
      </div>

    </div>
  );
}