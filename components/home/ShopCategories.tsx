import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ShopCategories() {
  const categories = [
    {
      image: "/images/Image-12.png",
      name: "Computer & Laptop",
    },
    {
      image: "/images/Image-13.png",
      name: "SmartPhone",
    },
    {
      image: "/images/Image-14.png",
      name: "Headphones",
    },
    {
      image: "/images/Image-16.png",
      name: "Accessories",
    },
    {
      image: "/images/Image-17.png",
      name: "Camera & Photo",
    },
    {
      image: "/images/Image-18.png",
      name: "TV & Homes ",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Shop with Categories
      </h2>
      <div className="relative">
       <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-md z-10">
            <FaArrowLeft size={12} />
       </button>

       <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-md z-10">
         <FaArrowRight size={12} />
        </button>   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

        {categories.map((category, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-full h-[120px] flex items-center justify-center mb-4">
              <img src={category.image} alt={category.name} className="max-h-full object-contain"/>
            </div>
            <p className="text-sm font-medium">
              {category.name}
            </p>

          </div>
        ))}
        </div>
      </div>
    </section>
  );
}