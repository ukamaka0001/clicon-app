import { FaArrowRight } from "react-icons/fa";

export default function IntroducingPro() {
  const pro = [
    {
      badge: "INTRODUCING",
      title: "New Apple Homepod Mini",
      desc: "Jam-packed with innovation, HomePod mini delivers unexpectedly.",
      image: "/images/Image6.png",
      button: "Shop Now",
    },
    {
      badge: "INTRODUCING NEW",
      title: "Xiaomi Mi 11 Ultra 12GB+256GB",
      desc: "Data provided by internal laboratories.industry measurement.",
      image: "/images/Image-29.png",
      button: "Shop Now",
      price: "$590",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {pro.map((item, i) => (
          <div key={i} className={`relative rounded-2xl p-8 flex items-center justify-between min-h-[320px] overflow-hidden ${
                i === 0 ? "bg-gray-200" : "bg-black"
             }`}>
            <div className="max-w-[260px]">

              <button className={`text-white text-xs px-3 py-2 rounded-md mb-4 ${i === 1 ? "bg-yellow-400" : "bg-blue-600"}`}>
                 {item.badge}
              </button>

              <h1 className={`text-3xl font-bold mb-4 leading-tight ${ i === 1 ? "text-white" : "text-black"}`}>
                {item.title}
              </h1>

              <p className={`text-sm mb-6 ${ i === 1 ? "text-gray-300" : "text-gray-700"}`}>
                {item.desc}
              </p>

              <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-md font-medium">
                {item.button}
                <FaArrowRight size={12} />
              </button>

            </div>
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[220px] object-contain"
              />
            </div>
            {i === 1 && (
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                {item.price}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}