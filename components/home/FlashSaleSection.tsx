"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function FlashSaleSection() {
  const [activeTab, setActiveTab] =
    useState("Best Sellers");

  const [selectedProduct, setSelectedProduct] =
   useState<any>(null);
  const products = [
    {
      id: 1,
      image: "/images/Image-31.png",
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
      price: 1500,
      category: "Best Sellers",
    },
    {
      id: 2,
      image: "/images/Image-1.png",
      name: "Samsung Galaxy S21 Ultra 5G Smartphone",
      price: 1500,
      category: "Top Rated",
    },
    {
      id: 3,
      image: "/images/Image-18.png",
      name: "Amazon Basics HDMI Cable 4K",
      price: 1500,
      category: "New Arrival",
    },
    {
      id: 4,
      image: "/images/Image-6.png",
      name: "Portable Washing Machine",
      price: 80,
      category: "Best Sellers",
    },
    { id: 5,
      image: "/images/Image-20.png",
      name: "Gaming Headphones USB",
      price: 1800,
      category: "Top Rated",
    },
    {
      id: 6,
      image: "/images/Image-51.png",
      name: "Professional Camera Tripod",
      price: 1200,
      category: "New Arrival",
    },
    {
      id: 7,
      image: "/images/Image-3.png",
      name: "Dell Optiplex Monitor",
      price: 250,
      category: "Best Sellers",
    },
    {
      id: 8,
      image: "/images/Image-32.png",
      name: "4K UHD Smart TV",
      price: 220,
      category: "Top Rated",
    },
    {
      id: 9,
      image: "/images/Image-16.png",
      name: "Wireless Mechanical Keyboard",
      price: 140,
      category: "New Arrival",
    },
    {
      id: 10,
      image: "/images/Image-19.png",
      name: "Apple Smart Watch Series 8",
      price: 599,
      category: "Best Sellers",
    },
    {
      id: 12,
      image: "/images/Image-52.png",
      name: "Portable Bluetooth Speaker",
      price: 95,
      category: "Top Rated",
    },
    {
      id: 13,
      image: "/images/Image-2.png",
      name: "Gaming Mouse RGB",
      price: 450,
      category: "New Arrival",
    },
  ];
  const filteredProducts = products.filter(
  (product) => product.category === activeTab
);
    const addToCart = (product: any) => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const existing = cart.find(
     (item: any) => item.id === product.id
    );

     if (existing) {
       existing.quantity += 1;
      } else {
        cart.push({
        ...product,
        quantity: 1,
        name: product.name,
      });
      }

      localStorage.setItem("cart", JSON.stringify(cart)
      );

       window.dispatchEvent(
        new Event("cartUpdated")
      );

     alert("Added to cart!");
    };

  const addToWishlist = (product: any) => {
  const wishlist = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

  const exists = wishlist.find(
    (item: any) => item.id === product.id
  );

  if (!exists) {
    wishlist.push(product);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

    alert("Added to wishlist!");
  } else {
    alert("Already in wishlist!");
  }
};

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-start gap-8 mb-8 justify-between ">
      <h2 className="text-2xl font-bold"> Flash Sale Today </h2>
      <button onClick={() => setActiveTab("Best Sellers")} className={`pb-1 font-medium transition-all duration-300 ${
       activeTab === "Best Sellers"
         ? "text-orange-600 border-b-2 border-orange-600"
         : "text-gray-600 hover:text-orange-600"
       }`}>
         Best Sellers
       </button>

       <button onClick={() => setActiveTab("Top Rated")} className={`pb-1 font-medium transition-all duration-300 ${
        activeTab === "Top Rated"
         ? "text-orange-600 border-b-2 border-orange-600"
         : "text-gray-600 hover:text-orange-600"
       }`}>
          Top Rated
        </button>

       <button onClick={() => setActiveTab("New Arrival")} className={`pb-1 font-medium transition-all duration-300 ${
         activeTab === "New Arrival"
           ? "text-orange-600 border-b-2 border-orange-600"
           : "text-gray-600 hover:text-orange-600"
        }`}>
          New Arrival
       </button>
      </div>
      <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 animate-fade"
>

        {filteredProducts.map((product) => (
           <div key={product.id} onClick={() => setSelectedProduct(product)} className="border border-gray-200 rounded-xl p-4 bg-white flex items-center gap-4 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">

            <div className="flex-shrink-0">
              <img src={product.image} alt={product.name} className="w-[100px] h-[100px] object-contain" />
            </div>
              <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                       {product.name}
                  </p>
                  <p className="text-blue-600 font-bold text-lg">
                      ${product.price.toLocaleString()}
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md flex items-center gap-2">
                     Add to Cart
                  </button>

                  <button onClick={(e) => { e.stopPropagation(); addToWishlist(product); }}
                   className="w-full mt-3 border border-orange-500 text-orange-500 py-3 rounded-lg flex items-center justify-center gap-2">
                   <FaHeart />
                   Add to Wishlist
                  </button>
                </div>

                

            </div>
        ))}

      </div>

      {selectedProduct && (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setSelectedProduct(null)}>

     <div className="bg-white rounded-xl p-6 max-w-md w-full relative"
      onClick={(e) => e.stopPropagation()}>

      <button onClick={() => setSelectedProduct(null)} className="absolute top-3 right-3 text-xl">
        ×
      </button>

      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-56 h-56 object-contain mx-auto"/>

      <h2 className="text-xl font-bold mt-4">
        {selectedProduct.name}
      </h2>

      <p className="text-blue-600 text-2xl font-bold mt-2">
        ${selectedProduct.price.toLocaleString()}
      </p>

      <button onClick={() => addToCart(selectedProduct)} className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg">
        Add to Cart
      </button>
      <button onClick={() => addToWishlist(selectedProduct)}
       className="w-full mt-3 border border-orange-500 text-orange-500 py-3 rounded-lg flex items-center justify-center gap-2">
       <FaHeart />
        Add to Wishlist
       </button>

    </div>

  </div>
)}

    </section>
  );
}