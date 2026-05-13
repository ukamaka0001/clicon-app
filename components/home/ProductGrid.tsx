import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

export default function ProductGrid() {
  const products = [
    {
      price: 2300,
      image: "/images/Image-3.png",
      badge: "sold out",
      desc: "Sony DSCHX8 High Zoom Point & Shoot camera",
    },
    {
      price: 220,
      image: "/images/Image-6.png",
      desc: "simple mobile 4G LTE prepaid smartphone",
    },
    {
      oldPrice: 865,
      price: 300,
      image: "/images/Image-2.png",
      badge: "19% OFF",
      desc: "4K UHD LED Smart TV with Chromecast Built-in",
    },
    {
      price: 1200,
      image: "/images/Image-23.png",
      desc: "Bose sport Earbuds-Wireless Earphones-Bluetooth in Ear",
    },
    {
      price: 299,
      image: "/images/Image-20.png",
      desc: "Dell Optiplex 7000x7480 All-in-one Computer Monitor",
    },
    {
      oldPrice: 865.99,
      price: 70,
      image: "/images/Image-25.png",
      desc: "Portable Washing machine, 11lbs capacity Model 18NMFIAM",
    },
    {
      price: 160,
      image: "/images/Image-10.png",
      badge: "HOT",
      desc: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    },
    {
      oldPrice:360,
      price: 250,
      image: "/images/Image-11.png",
      badge: "32% OFF",
      desc: "JBL FLIP 4-Waterproof portable Bluetooth speaker-black",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-bold">Best Deals</h2>

        <p className="text-sm text-gray-500">
          Deals ends in 16d : 21h : 57m : 23s
        </p>
      </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-2 gap-0 border border-gray-200 rounded-xl overflow-hidden">
         <div className="col-span-2 row-span-2 bg-white p-6 border-r border-gray-200 flex flex-col justify-between">
          <span className="bg-yellow-400 text-white text-xs px-3 py-1 w-fit">
            32% OFF
          </span>
          <span className="bg-orange-500 text-white text-xs px-3 py-1 mt-3 w-fit">
            HOT
          </span>
          <div className="my-6 flex justify-center">
            <img src="/images/Image-1.png" alt="Featured Product" className="w-full max-w-[220px] object-contain"/>
          </div>
          <div className="text-yellow-400 flex items-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p className="text-gray-400">(52,677)</p>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Xbox Series S-512GB SSD Console with Wireless Controller-EU Version
          </h3>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-gray-400 line-through">
              $865.99
            </span>

            <span className="text-2xl font-bold text-blue-600">
              $442.12
            </span>
          </div>
          <p>Game built using the Xbox Series X|S development kit showcase unparalleled load times, visual.</p>
          <div className="flex items-center gap-3 mt-auto py-3">
            <button className="bg-orange-300 text-black px-4 py-3">
              <FaHeart />
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center py-2  px-17 gap-2 font-medium">
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="bg-orange-300 text-black px-4 py-3">
              <FaEye />
            </button>
          </div>
        </div>
       {products.map((product, i) => (
         <div key={i} className="relative bg-white p-4 border border-gray-200 flex flex-col" >

        {product.badge && (
          <span className={` text-xs text-white px-2 py-1 w-fit mb-3 rounded
          ${
            i === 0
              ? "bg-gray-600"
              : i === 2
              ? "bg-yellow-400"
              : i === 6
              ? "bg-orange-600"
              : "bg-yellow-400"
          }
        `}
      >
        {product.badge}
      </span>
    )}
    <div className="relative w-full max-w-[170px] h-[160px] mx-auto mb-4">
       <img src={product.image} alt={product.desc} className="w-full h-full object-contain"/>

       {i === 3 && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      
        <div className="flex gap-3 -translate-y-1">

        <button className="bg-orange-600 p-2 rounded-full text-white">
          <FaHeart size={14} />
        </button>

        <button className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaShoppingCart size={14} />
        </button>

        <button className="bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
          <FaEye size={14} />
        </button>

      </div>

    </div>
  )}

</div>
    <h3 className="text-sm font-semibold line-clamp-2">
      {product.desc}
    </h3>
    <div className="flex items-center gap-2 mt-auto">
      {product.oldPrice && (
        <span className="text-gray-400 line-through text-sm">
          ${product.oldPrice}
        </span>
      )}
         <span className={`font-bold ${i === 3 ? "text-blue-600" : "text-blue-600"}`}>
         ${product.price}
          </span>
        </div>
       </div>
    ))}

      </div>
    </section>
  );
}