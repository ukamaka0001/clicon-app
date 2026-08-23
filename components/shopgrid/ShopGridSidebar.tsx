import PromoCard from "./PromoCard";

export default function ShopGridSidebar() {
  return (
    <div className="space-y-10">

      <div>
        <h2 className="font-bold text-lg mb-5">
          Category
        </h2>

        <div className="space-y-3 text-sm">
          {[
            "Electronics",
            "Computer & Laptop",
            "SmartPhone",
            "Headphone",
            "Mobile Accessories",
            "Gaming Console",
            "Camera & Photo",
            "TV & Homes Appliances",
            "Watches & Accessories",
            "GPS & Navigation",
            "Wearable Technology"
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3">
              <input type="radio" className="accent-orange-500 w-4 h-4"/>
              {item}
            </label>
          ))}
        </div>
      </div>
        <div>
        <h2 className="font-bold text-lg mb-4">
          Price Range
        </h2>

        <input type="range" className="w-full accent-orange-500 mb-5 cursor-pointer"/>

        <div className="flex gap-3 mb-5">

          <input
            type="text"
            placeholder="Min price"
            className="border rounded-lg px-3 py-2 w-full"
          />

          <input
            type="text"
            placeholder="Max price"
            className="border rounded-lg px-3 py-2 w-full"
          />

        </div>

        <div className="space-y-2 text-sm">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            All Price
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-orange-500 w-4 h-4 rounded-full"/>
            Under $20
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            $25 to $100
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            $100 to $300
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            $300 to $500
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            $500 to $1000
          </label>

        </div> 

      </div>

      <div>
        <h2 className="font-bold text-lg mb-5">
          Popular Brands
        </h2>

        <div className="grid grid-cols-2 gap-3 text-sm ">
          {[
            "Apple",
            "Google",
            "Samsung",
            "Microsoft",
            "HP",
            "Dell",
            "Sony",
            "symphony",
            "Xiaomi",
            "LG",
            "Panasonic",
            "Intel",
            "Oneplus",
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-3">
              <input type="checkbox" checked={item === "Apple" || item === "Microsoft" || item === "Google" || item === "HP" || item === "sony" || item === "Panasonic" || item === "LG"} readOnly className="accent-orange-600"/>
              {item}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-5">
          Popular Tags
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Games",
            "iPhone",
            "TV",
            "Asus Laptop",
            "Macbook",
            "SSD",
            "Graphics Card",
            "Power Bank",
            "Smart TV",
            "Speaker",
            "Tablet",
            "Microwave",
            "Samsung"
          ].map((item, i) => (
            <button key={i} className={`px-4 py-2 border text-sm transition ${ item === "Graphics Card"
                ? "border-orange-500 bg-orange-50 text-orange-500"
                : "hover:border-orange-300"
            }`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <PromoCard />

    </div>
  );
}