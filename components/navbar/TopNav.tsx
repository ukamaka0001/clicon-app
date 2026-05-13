import { FaFacebook, FaTwitter, FaPinterest, FaYoutube, FaChevronDown } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="bg-blue-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

        <div className="text-center md:text-left">
          Welcome to Clicon online eCommerce store.
        </div>

        <div className="flex items-center gap-3">
          <span>Follow us:</span>
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <FaYoutube />
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            ENG <FaChevronDown className="text-xs" />
          </span>
          <span className="flex items-center gap-1">
            USD <FaChevronDown className="text-xs" />
          </span>
        </div>

      </div>
    </div>
  );
}