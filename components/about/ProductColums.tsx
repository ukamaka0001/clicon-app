import Image from "next/image";
import { Star } from "lucide-react";

const productGroups = [
  {
    heading: "FLASH SALE TODAY",
    products: [
      {
        title: "TOZO T6 True Wireless Earbuds",
        price: "$70",
        oldPrice: "$99",
        image: "/images/Image-31.png",
      },
      {
        title: "Apple AirPods Pro (2nd Gen)",
        price: "$249",
        oldPrice: "$299",
        image: "/images/Image-20.png",
      },
      {
        title: "JBL Flip 6 Bluetooth Speaker",
        price: "$119",
        oldPrice: "$149",
        image: "/images/Image-16.png",
      },
    ],
  },

  {
    heading: "BEST SELLERS",
    products: [
      {
        title: "Samsung Galaxy Watch 6",
        price: "$299",
        oldPrice: "$349",
        image: "/images/Image-1.png",
      },
      {
        title: "Logitech MX Master 3S Mouse",
        price: "$99",
        oldPrice: "$129",
        image: "/images/Image-51.png",
      },
      {
        title: "Sony WH-1000XM5 Headphones",
        price: "$399",
        oldPrice: "$449",
        image: "/images/Image-19.png",
      },
    ],
  },

  {
    heading: "TOP RATED PRODUCTS",
    products: [
      {
        title: "Canon EOS R50 Camera",
        price: "$899",
        oldPrice: "$999",
        image: "/images/Image-18.png",
      },
      {
        title: "Anker 737 Power Bank",
        price: "$149",
        oldPrice: "$179",
        image: "/images/Image-3.png",
      },
      {
        title: "Apple Magic Keyboard",
        price: "$129",
        oldPrice: "$149",
        image: "/images/Image-52.png",
      },
    ],
  },

  {
    heading: "NEW ARRIVALS",
    products: [
      {
        title: "Dell XPS 13 Laptop",
        price: "$1,299",
        oldPrice: "$1,399",
        image: "/images/Image-6.png",
      },
      {
        title: "Nintendo Switch OLED",
        price: "$349",
        oldPrice: "$379",
        image: "/images/Image-32.png",
      },
      {
        title: "PlayStation 5 DualSense Controller",
        price: "$69",
        oldPrice: "$79",
        image: "/images/Image-2.png",
      },
    ],
  },
];

export default function ProductColumns() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {productGroups.map((group, index) => (
            <div key={index}>

              <h2 className="text-lg font-bold mb-6 text-gray-900">
                {group.heading}
              </h2>

              <div className="space-y-5">

                {group.products.map((product, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-3 rounded-xl border border-gray-200 bg-white shadow-sm 
                    hover:shadow-xl transition-all duration-300">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={90}
                      height={90}
                      className="object-contain"
                    />

                    <div className="flex-1">

                      <div className="flex mb-2">
                        {[...Array(5)].map((_, star) => (
                          <Star
                            key={star}
                            size={14}
                            fill="#FDB022"
                            className="text-[#FDB022]"
                          />
                        ))}
                      </div>

                      <h3 className="text-sm text-gray-700 leading-5">
                        {product.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="font-bold text-[#2DA5F3]">
                          {product.price}
                        </span>

                        <span className="text-gray-400 line-through text-sm">
                          {product.oldPrice}
                        </span>
                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}