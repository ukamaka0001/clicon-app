export default function FlashSaleSection() {
  const products = [
    {
      image: "/images/Image-31.png",
      desc: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
      price: "1,500",
    },
    {
      image: "/images/Image-1.png",
      desc: "Samsung Galaxy S21 Ultra 5G Smartphone",
      price: "$1,500",
    },
    {
      image: "/images/Image-18.png",
      desc: "Amazon Basics HDMI Cable 4K",
      price: "$1,500",
    },
    {
      image: "/images/Image-6.png",
      desc: "Portable Washing Machine",
      price: "$80",
    },
    {
      image: "/images/Image-20.png",
      desc: "Gaming Headphones USB",
      price: "$1,500",
    },
    {
      image: "/images/Image-31.png",
      desc: "Professional Camera Tripod",
      price: "$1,200",
    },
    {
      image: "/images/Image-3.png",
      desc: "Dell Optiplex Monitor",
      price: "$250",
    },
    {
      image: "/images/Image-32.png",
      desc: "4K UHD Smart TV",
      price: "$220",
    },
    {
      image: "/images/Image-16.png",
      desc: "Wireless Mechanical Keyboard",
      price: "$140",
    },
    {
      image: "/images/Image-19.png",
      desc: "Apple Smart Watch Series 8",
      price: "$599",
    },
    {
      image: "/images/Image-29.png",
      desc: "Portable Bluetooth Speaker",
      price: "$95",
    },
    {
      image: "/images/Image-2.png",
      desc: "Gaming Mouse RGB",
      price: "$45",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-start gap-8 mb-8 justify-between ">
      <h2 className="text-2xl font-bold"> Flash Sale Today </h2>
      <button className="text-orange-600 border-b-2 border-orange-600 pb-1 font-medium"> Best Sellers</button>
      <button className="text-gray-600 hover:text-orange-600"> Top Rated</button>
       <button className="text-gray-600 hover:text-orange-600">New Arrival</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {products.map((product, i) => (
           <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white flex items-center gap-4 w-full hover:shadow-md transition">

            <div className="flex-shrink-0">
              <img src={product.image} alt={product.desc} className="w-[100px] h-[100px] object-contain" />
            </div>
              <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                       {product.desc}
                  </p>
                  <p className="text-blue-600 font-bold text-lg">
                     $1,500
                  </p>

                </div>

            </div>
        ))}

      </div>

    </section>
  );
}