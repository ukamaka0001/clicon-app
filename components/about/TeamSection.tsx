import Image from "next/image";

const team = [
  {
    name: "Kevin Gilbert",
    role: "Chief Executive Officer",
    image: "/images/thumb-2.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "Assistant of CEO",
    image: "/images/thumb-4.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "Head of Designer",
    image: "/images/thumb-6.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "UX Designer",
    image: "/images/thumb-8.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "Product Designer",
    image: "/images/thumb-3.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "Head of Development",
    image: "/images/thumb-5.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "Design Engineer",
    image: "/images/thumb-7.jpg",
  },
  {
    name: "Kevin Gilbert",
    role: "UI Designer",
    image: "/images/thumb-1.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
          Our Core Team Member
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                width={70}
                height={70}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}