import {
  FiTruck,
  FiLock,
  FiCreditCard,
  FiUser,
  FiLayers,
  FiFileText,
  FiShoppingCart,
  FiShoppingBag,
} from "react-icons/fi";

const categories = [
  {
    title: "Track Order",
    icon: <FiTruck size={22} />,
  },
  {
    title: "Reset Password",
    icon: <FiLock size={22} />,
  },
  {
    title: "Payment Option",
    icon: <FiCreditCard size={22} />,
  },
  {
    title: "User & Account",
    icon: <FiUser size={22} />,
  },
  {
    title: "Wishlist & Compare",
    icon: <FiLayers size={22} />,
  },
  {
    title: "Shipping & Billing",
    icon: <FiFileText size={22} />,
  },
  {
    title: "Shopping Cart & Wallet",
    icon: <FiShoppingCart size={22} />,
  },
  {
    title: "Sell on Clicon",
    icon: <FiShoppingBag size={22} />,
  },
];

export default function HelpCategories() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          What can we assist you with today?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 border rounded-md p-5 cursor-pointer transition-all hover:shadow-md hover:border-orange-500 ${
                index === 0 ? "border-orange-500" : "border-gray-200"
              }`}
            >
              <div className="text-orange-500">{item.icon}</div>

              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}