import { FaArrowRight, FaStar, } from "react-icons/fa";

export default function NewProductsSection() {
  const products = [
    {
      badge: "BEST DEALS",
      badgeColor: "bg-blue-600",
      image: "/images/Image-14.png",
      desc: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4k/6)",
      price: "$360",
      rating: "(994)",
    },
    {
      image: "/images/Image-23.png",
      desc: "Gaming Headphones USB",
      price: "$80",
      rating: "(798)",
    },
    {
      badge: "HOT",
      badgeColor: "bg-red-600",
      image: "/images/Image-16.png",
      desc: "TOZO T6 True wireless Earbuds Bluetooth headphones",
      price: "$70",
      rating: "(600)",
    },
    {
      image: "/images/Image-30.png",
      desc: "Portable Washing Machine",
      price: "$250",
      rating: "(492)",
    },
    {
      image: "/images/Image-11.png",
      desc: "Samsung Electronics Samsung Galaxy S21 5G",
      price: "$2,300",
      rating: "(700)",
    },
    {
      badge: "SALE",
      badgeColor: "bg-green-600",
      image: "/images/Image-31.png",
      desc: "Professional Camera Tripod",
      price: "$220",
      rating: "(556)",
    },
    {
      image: "/images/Image-32.png",
      desc: "Dell Optiplex Monitor",
      price: "$1,500",
      rating: "(536)",
    },
    { 
      badge: "25% OFF",
      badgeColor: "bg-yellow-400",
      image: "/images/Image-1.png",
      desc: "Portable Washing Machine 4K UHD Smart TV",
      oldPrice: "$1600",
      price: "$1,200",
      rating: "(423)",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

            <div className="flex flex-wrap items-center gap-6">

              <h2 className="text-2xl font-bold">
                Featured Products
              </h2>

              <button className="text-orange-600 border-b-2 border-orange-600 pb-1 font-medium">
                All Product
              </button>

              <button className="text-gray-600 hover:text-orange-600">
                SmartPhone
              </button>

              <button className="text-gray-600 hover:text-orange-600">
                Laptop
              </button>

              <button className="text-gray-600 hover:text-orange-600">
                Headphone
              </button>

              <button className="text-gray-600 hover:text-orange-600">
                TV
              </button>

            </div>

            <button className="flex items-center gap-2 text-orange-600 font-medium">
              Browse All Product
              <FaArrowRight size={12} />
            </button>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {products.map((product, i) => (
              <div key={i} className="relative border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition">
                {product.badge && (
                  <span className={`${product.badgeColor} text-white text-xs px-2 py-1 rounded absolute top-3 left-3`} >
                    {product.badge}
                  </span>
                )}

                <div className="flex justify-center mb-4">
                  <img src={product.image} alt={product.desc} className="w-full max-w-[140px] h-[140px] object-contain"/>
                </div>

                <div className="flex items-center gap-1 text-yellow-400 text-xs mb-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-500 ml-1">{product.rating || "(736)"} </span>
                </div>

                <h3 className="text-sm font-medium mb-3 line-clamp-2">
                  {product.desc}
                </h3>

                <div className="flex items-center gap-2">{product.oldPrice && (
                <span className="text-gray-400 line-through text-sm"> {product.oldPrice}</span>
                )}
                <p className="text-blue-600 font-bold">
                  {product.price}
                </p>
                </div>

              </div>
            ))}

          </div>

        </div>
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-yellow-200 p-6 min-h-[300px] flex flex-col justify-between">

            <div className="flex flex-col items-center justify-center text-center">
            <div className="flex justify-center mb-4 overflow-hidden">
             <img src="/images/Image-34.png" alt="Promo" className="w-[110px] h-[110px] object-contain"/>
            </div>
            <h2 className="text-3xl font-bold mb-4">Xiaomi True WIreless Earbuds</h2>
              <p className="text-sm text-gray-500 font-medium mb-2">Escape the noise, It's time to hear the magic with Xiaomi Earbuds.</p>
              <div className="flex items-center gap-1 mb-6">
              <p className="text-sm text-gray-600">Only for:</p>
               <span className="bg-white px-3 py-2 rounded-md text-sm font-medium shadow-sm">$299 USD</span>
            </div>
              <button className="flex items-center gap-2 bg-orange-600 text-white px-5 py-3 rounded-md font-medium">
                Shop Now
                <FaArrowRight size={12} />
              </button>

            </div>
          </div>
          <div className="bg-gray-800 p-6 min-h-[180px] flex flex-col justify-center items-center">
            <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium mb-1">SUMMER SALE</button>
           <h2 className="text-white text-2xl font-bold mb-2">37% DISCOUNT</h2>

            <p className="text-gray-300 text-sm mb-3">only for <span className="text-yellow-600">SmartPhone</span> product.</p>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-10 py-2 font-medium w-fit">
              Shop Now
              <FaArrowRight size={12} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}