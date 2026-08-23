import { SiSamsung } from "react-icons/si";
import { FaArrowRight, FaBars, FaGoogle } from "react-icons/fa";

export default function Footer() {
  const brands = [
    "Google",
    "Amazon",
    "Phillips",
    "Toshiba",
    "Samsung",
  ];

  return (
    <footer className="w-full">
      <div className="bg-blue-900 py-12 px-4">

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Present fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2 rounded-lg w-full max-w-2xl">

            <input type="email" placeholder="Enter your email" className="px-4 py-3 text-black w-full outline-none"/>

            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto">
              Subscribe
            </button>

          </div>
          <div className="flex flex-wrap justify-center gap-4">

            {brands.map((brand, i) => (
              <div key={i} className="border border-white rounded-full px-5 py-2" >
                <h2 className="text-white text-sm md:text-base font-medium">
                  {brand}
                </h2>
              </div>
            ))}

          </div>

        </div>

      </div>
      <div className="bg-black py-14 px-4">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
          <div className="size-12 bg-orange-600 rounded-full flex items-center justify-center">
            <div className="size-6 rounded-full border-4 border-black bg-transparent"></div>
          </div>
            <h2 className="text-3xl font-bold text-white mb-4">CLICON</h2>
            </div>
            <div className="mt-4 space-y-2">
               <p className="text-gray-400 text-sm"> Customer Supports:</p>
               <h2 className="text-white font-bold text-xl">(629) 555-0129</h2>
               <p className="text-gray-400 text-sm">4517 Washington Ave.</p>
               <h4 className="text-white text-sm">info@Kinbo.com</h4>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Top Category</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Computer & Laptop</li>
              <li>SmartPhone</li>
              <li>Headphone</li>
              <li className="flex items-center gap-2 text-white">
                <span className="w-6 h-[2px] bg-yellow-500"></span>
                Accessories</li>
                <li>camera & photo</li>
                <li>TV & Homes</li>
              <li className="flex items-center gap-2 text-yellow-500">Browse ALL Products
                <FaArrowRight/>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4"> Quick Links</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Shop Product</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>+234 800 000 0000</li>
              <li>support@clicon.com</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

        </div>

      </div>
      <div className="bg-black border-t border-gray-800 py-5 px-4">

        <div className="text-center text-gray-500 text-sm">
          Kinbo - eCommerce Template © 2021
        </div>

      </div>

    </footer>
  );
}