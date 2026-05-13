import { FaArrowRight, FaStar, FaHeart, FaShoppingCart, FaEye,} from "react-icons/fa";

export default function FeaturedProducts() {
  const products = [
    {
      badge: "HOT",
      badgeColor: "bg-orange-600",
      image: "/images/Image-19.png",
      desc: "TOZO T6 True wireless Earbuds Bluetooth headphones",
      price: "$70",
      rating: "(526)",
    },
    {
      badge: "",
      badgeColor: "",
      image: "/images/Image-20.png",
      desc: "Samsung Electronics Samsung Galaxy S21 5G",
      price: "$2,300",
      rating: "(526)",
    },
    {
      badge: "BEST DEALS",
      badgeColor: "bg-blue-600",
      image: "/images/Image-21.png",
      desc: "Amazon Basics High-speed HDMI Cable(18 Gbps, 4k/6)",
      price: "$90",
      rating: "(526)",
    },
    {
      badge: "",
      badgeColor: "",
      image: "/images/Image23.png",
      desc: "Portable Washing Machine, 11lbs capacity Model 18NMF",
      price: "$80",
      rating: "(526)",
    },
    {
      
      badge: "",
      badgeColor: "",
      image: "/images/Image-25.png",
      desc: "Wired Over-Ear Gaming Headphones with USB",
      price: "$1,500",
      rating: "(526)",
    },
    
    {
      badge: "25% OFF",
      badgeColor: "bg-yellow-400",
      image: "/images/Image-18.png",
      desc: "polariod 57-inch photo/video Tripod with Deluxe Tripod card",
      oldPrice: "$1600",
      price: "$1,200",
      rating: "(526)",
    },
    {
      image: "/images/Image-28.png",
      desc: "Dell Optiplex 7000x7480 all-in-one Computer Monitor",
      price: "$250",
      rating: "(526)",
    },
    {
      badge: "SALE",
      badgeColor: "bg-green-400",
      image: "/images/Image-6.png",
      desc: "4k UHD LED Smart Tv with chromecast Built-in",
      price: "$220",
      rating: "(526)",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

        <div className="lg:col-span-3 border border-gray-200 rounded-2xl bg-yellow-200 overflow-hidden p-6 flex flex-col justify-between h-full">

          <div>
             <p className="text-red-500 text-sm font-medium mb-2">COMPUTER & ACCESSORIES</p>
             <h1 className="text-4xl font-bold mb-3 whitespace-nowrap">32% Discount</h1>
              <p className="text-gray-700 text-sm mb-6"> For all electronics products </p>
              
              <div className="flex items-center gap-1 mb-6">
              <p className="text-sm text-gray-600">Offers ends in:</p>
               <span className="bg-white px-3 py-2 rounded-md text-sm font-medium shadow-sm"> END OF CHRISTMAS</span>
            </div>
            <button className="flex items-center gap-4 bg-orange-600 hover:bg-orange-700 text-white px-9 py-3 font-medium">
              SHOP NOW
              <FaArrowRight size={12} />
            </button>
           </div>

          <div className="flex justify-center mt-8">
            <img src="/images/Image.jpg" alt="Featured" className="w-full max-w-[280px] object-contain" />
          </div>

        </div>
        <div className="lg:col-span-9">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
             <div className="flex flex-wrap items-center gap-6">
              <h2 className="text-2xl font-bold"> Featured Products </h2>
              <button className="text-orange-600 border-b-2 border-orange-600 pb-1 font-medium">All Product
              </button>
              <button className="text-gray-600 hover:text-orange-600"> SmartPhone
              </button>
              <button className="text-gray-600 hover:text-orange-600"> Laptop
              </button>
              <button className="text-gray-600 hover:text-orange-600"> Headphone
              </button>
              <button className="text-gray-600 hover:text-orange-600">TV
              </button>
         </div>
          <button className="flex items-center gap-2 text-orange-600 font-medium"> Browse All Product
              <FaArrowRight size={12} />
            </button>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {products.map((product, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-lg transition relative w-full">
                {product.badge && (
                  <span className={`${product.badgeColor} text-white text-xs px-2 py-1 rounded absolute top-3 left-3`} >
                    {product.badge}
                  </span>
                )}

                <div className="relative flex justify-center mb-4 mt-6">
                  <img src={product.image} alt={product.desc} className="w-full max-w-[150px] h-[150px] object-contain" />
                   {product.image === "/images/Image-28.png" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-2 rounded-lg">
                       <button className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                         <FaHeart size={14} />
                         </button>
                       <button className="bg-orange-600 text-white p-2 rounded-full">
                        <FaShoppingCart size={14} />
                        </button>
                        <button className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                           <FaEye size={14} />
                           </button>
                     </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-2 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-500 ml-1"> {product.rating || "(736)"}</span>
                </div>
                <h3 className="text-sm font-medium mb-3 line-clamp-2">
                  {product.desc}
                </h3>
                <div className="flex items-center gap-2">{product.oldPrice && (
                <span className="text-gray-400 line-through text-sm"> {product.oldPrice}</span>
                )}
                <p className="text-blue-600 font-bold">{product.price}</p>
                </div>
              </div>
             ))}
              </div>
              </div>
              </div>
              </section>
               );
               }