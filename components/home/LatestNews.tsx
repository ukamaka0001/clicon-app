import { FaArrowRight, FaUser, FaCalendarAlt, FaComments, } from "react-icons/fa";

export default function LatestNews() {
  const news = [
    {
      image: "/images/image5.png",
      user: "Kristin",
      date: "19 Dec, 2025",
      comments: "453",
      title: "Cras nisl dolor, accumsan et metus sit amet, vulputate.",
      desc: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus quis neque.",
    },
    {
      image: "/images/image4.png",
      user: "Robert",
      date: "22 Dec, 2025",
      comments: "738",
      title: "Curabitur pulvinar aliquam lectus, non blandit erat.",
      desc: "Pellentesque scelerisque in neque at pharetra. Ut elementum ullamcorper sem, eget luctus.",
    },
    {
      image: "/images/image3.png",
      user: "Jenny",
      date: "28 Dec, 2025",
      comments: "826",
      title: "Fusce interdum ipsum egestas urna amet gravida.",
      desc: "Nullam facilisis elit id lorem volutpat, eu fermentum metus lacinia. Vestibulum ante ipsum.",
    },
  ];

  return (
    <section className="w-full py-14 px-6 bg-gray-100">
      <div className="flex justify-center mb-10">
        <h2 className="text-3xl font-bold">Latest News</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] w-full">

        {news.map((item, i) => (
          <div key={i}className="border border-gray-200 overflow-hidden bg-white hover:shadow-md transition">
            <div className="p-2">
             <div className="bg-white p-4 rounded-xl">
                 <img src={item.image} alt={item.title} className="w-full h-[180px] object-contain"/>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-5 text-sm text-gray-500 mb-4 whitespace-nowrap">

                <div className="flex items-center gap-2">
                  <FaUser className="text-orange-600" />
                  <span>{item.user}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-orange-600" />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaComments className="text-orange-600" />
                  <span>{item.comments}</span>
                </div>

              </div>
              <h4 className="text-lg font-semibold mb-3 leading-snug">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
              <button className="flex items-center gap-3 border border-orange-600 text-orange-600 px-5 py-3 rounded-md hover:bg-orange-600 hover:text-white transition font-medium">
                Read More
                <FaArrowRight size={12} />
              </button>

            </div>

          </div>
        ))}
        </div>

      </div>

    </section>
  );
}