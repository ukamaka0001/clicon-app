export default function SimpleFooter() {
  return (
    <footer className="bg-black py-14 px-4 mt-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-5">

            <div className="size-12 bg-orange-600 rounded-full flex items-center justify-center">
              <div className="size-6 rounded-full border-4 border-black"></div>
            </div>

            <h2 className="text-3xl font-bold text-white">
              CLICON
            </h2>

          </div>

          <p className="text-gray-400 text-sm mb-2">
            Customer Supports:
          </p>

          <h2 className="text-white font-bold mb-2">
            (629) 555-0129
          </h2>

          <p className="text-gray-400 text-sm mb-2">
            4517 Washington Ave.
          </p>

          <p className="text-gray-400 text-sm">
            info@Kinbo.com
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Top Category
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li>Accessories</li>
            <li>Camera & Photo</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>+234 800 000 0000</li>
            <li>support@clicon.com</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        Kinbo - eCommerce Template © 2021
      </div>

    </footer>
  );
}