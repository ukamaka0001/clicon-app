export default function PopularTopics() {
  const topics = [
    [
      "How do I return my item?",
      "What is Clicon's Returns Policy?",
      "How long is the refund process?",
    ],
    [
      "What are the Delivery Timelines?",
      "What is 'Discover Your Daraz Campaign 2022'?",
      "What is the Voucher & Gift Offer in this Campaign?",
    ],
    [
      "How to cancel Clicon Order.",
      "Ask the Digital and Device Community.",
      "How to change my shop name?",
    ],
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Popular Topics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {topics.map((column, index) => (
            <ul key={index} className="space-y-5">
              {column.map((topic, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 cursor-pointer transition hover:text-orange-500"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-orange-500"></span>

                  <span className={`text-[15px] leading-6 ${topic === "What is Clicon's Returns Policy?"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                  }`}>
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}