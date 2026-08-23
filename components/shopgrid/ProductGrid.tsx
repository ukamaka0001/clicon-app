import ProductCard from "./ProductCard";

const products = [
  {
    title: "Xbox Series Controller",
    price: "$70S",
    image: "/images/product-1.png",
    badge: "HOT",
    badgeColor: "bg-red-500",
  },
  {
    title: "Samsung Electronics Samsung Galexy S21 5G",
    price: "$2,300",
    image: "/images/product-2.png",
  },
  {
    title: "MacBook Pro High-speed TV",
    price: "$360",
    image: "/images/product-3.png",
    badge: "BEST DEALS",
    badgeColor: "bg-blue-500",
  },
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone.",
    price: "$80",
    image: "/images/product-4.png",
  },
  {
    title: "Amazon Basics High-speed HDMI Cable (18 Gbps, 4k/6..)",
    price: "$1,500",
    image: "/images/product-5.png",
  },
  {
    title: "Polaroid 57-inch Photo/Video Tripod with Deluxe Tripod ca.",
    price: "$1,200",
    oldPrice: "$1600",
    image: "/images/product-6.png",
    badge: "25% OFF",
    badgeColor: "bg-yellow-400",
  },
  {
    title: "4K UHD LED Smart TV With CHromecast Built-in",
    price: "$250",
    image: "/images/product-7.png",
  },
  {
    title: "Samsung Electronics Samsung Galexy S21 5G",
    price: "$220",
    image: "/images/product-8.png",
    badge: "SALE",
    badgeColor: "bg-green-500",
  },
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone.",
    price: "$360",
    image: "/images/product-9.png",
    badge: "BEST DEALS",
    badgeColor: "bg-blue-500",
  },
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone.",
    price: "$80",
    image: "/images/product-4.png",
  },
  {
    title: "Polaroid 57-inch Photo/Video Tripod with Deluxe Tripod ca.",
    price: "$70",
    image: "/images/product-10.png",
    badge: "HOT",
    badgeColor: "bg-red-500",
  },
  {
    title: "Dell Optiplex 700x7480 All-in-one Computer Monitor",
    price: "$250",
    image: "/images/product-11.png",
  },
  {
    title: "Samsung Electronics Samsung Galexy S21 5G",
    price: "$2,300",
    image: "/images/product-12.png",
  },
  {
    title: "4K UHD LED Smart TV With CHromecast Built-in",
    price: "$220",
    image: "/images/product-13.png",
    badge: "SALE",
    badgeColor: "bg-green-500",
  },
  {
    title: "Polaroid 57-inch Photo/Video Tripod with Deluxe Tripod ca.",
    price: "$1500",
    image: "/images/product-14.png",
  },
  {
    title: "Portable Washing Machine, 11lbs capacity Model 18NMF.",
    price: "$1200",
    oldPrice: "$1600",
    image: "/images/product-15.png",
    badge: "25% OFF",
    badgeColor: "bg-yellow-400",
  },
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone.",
    price: "$70",
    oldPrice: "$75",
    image: "/images/product-7.png",
    badge: "HOT",
    badgeColor: "bg-red-500",
  },
  {
    title: "Samsung Electronics Samsung Galexy S21 5G",
    price: "$2,300",
    image: "/images/product-2.png",
  },
  {
    title: "Amazon Basics High-speed HDMI Cable (18 Gbps, 4k/6..)",
    price: "$360",
    image: "/images/product-16.png",
    badge: "BEST DEALS",
    badgeColor: "bg-blue-500",
  },
  {
    title: "Wired Over-Ear Gaming Headphones with USB",
    price: "$80",
    image: "/images/product-4.png",
  },
  {
    title: "Amazon Basics High-speed HDMI Cable (18 Gbps, 4k/6..)",
    price: "$360",
    image: "/images/product-17.png",
    badge: "BEST DEALS",
    badgeColor: "bg-blue-500",
  },
  {
    title: "Dell Optiplex 700x7480 All-in-one Computer Monitor",
    price: "$250",
    image: "/images/product-18.png",
  },
  {
    title: "Portable Washing Machine, 11lbs capacity Model 18NMF.",
    price: "$80",
    oldPrice: "$124",
    image: "/images/product-19.png",
  },
  {
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphone.",
    price: "$70",
    image: "/images/product-20.png",
    badge: "HOT",
    badgeColor: "bg-red-500",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {Array(6)
        .fill(products)
        .flat()
        .slice(0, 24)
        .map((product, i) => (
          <ProductCard
            key={i}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            badge={product.badge}
            badgeColor={product.badgeColor}
          />
      ))}

    </div>
  );
}